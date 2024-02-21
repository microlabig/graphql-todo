import { Spinner, VStack } from "@chakra-ui/react";
import { memo } from "react";
import { TodoItem } from "./TodoItem";
import { TotalCount } from "./TotalCount";
import { useQuery } from "@apollo/client";
import { ALL_TODO } from "../apollo/todos";
import { Todo } from "../__generated__/graphql";

type TTodoListProps = {
    className?: string;
};

export const TodoList = memo((props: TTodoListProps) => {
    const { data, loading, error } = useQuery(ALL_TODO);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h2>Error...</h2>
    }

    return (
        <>
            <VStack spacing={2} mt={4}>
                {data?.todos?.map((todo) => (
                    <TodoItem key={todo?.id} todo={todo as Todo} />
                ))}
            </VStack>

            <TotalCount />
        </>
    );
});
