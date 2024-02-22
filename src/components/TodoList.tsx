import { useMutation, useQuery } from "@apollo/client";
import { Spinner, VStack } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { Todo } from "../__generated__/graphql";
import { ALL_TODO, DELETE_TODO, UPDATE_TODO } from "../apollo/todos";
import { TodoItem } from "./TodoItem";
import { TotalCount } from "./TotalCount";
import { Modifier } from "@apollo/client/cache";

export const TodoList = memo(() => {
    const { data, loading, error } = useQuery(ALL_TODO);

    const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);
    const [deleteTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
        update(cache, { data }) {
            if (!data || !data.removeTodo) {
                return;
            }

            cache.modify({
                fields: {
                    // allTodos - название кэша (не алиаса), можно посмотреть в Apollo DevTools -> cache
                    allTodos(currentTodos = []): Modifier<any> {
                        return currentTodos.filter(
                            (todo: { __ref: string }) =>
                                todo.__ref !== `Todo:${data.removeTodo!.id}`
                        ); // 'Todo' - это __typename, записанный в __ref данного кэша
                    },
                },
            });
        },
    });

    const handleToggle = useCallback(
        (id: string, completed: boolean) => {
            toggleTodo({
                variables: { id, completed },
            });
        },
        [toggleTodo]
    );
    const handleDelete = useCallback(
        (id: string) => {
            deleteTodo({ variables: { id } });
        },
        [deleteTodo]
    );

    if (loading) {
        return <Spinner />;
    }

    if (error || updateError || deleteError) {
        return <h2>Error...</h2>;
    }

    return (
        <>
            <VStack spacing={2} mt={4} align={"flex-start"} px={10}>
                {data?.todos?.map((todo) => (
                    <TodoItem
                        key={todo?.id}
                        todo={todo as Todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </VStack>

            <TotalCount />
        </>
    );
});
