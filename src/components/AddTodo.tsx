import { ChangeEvent, KeyboardEvent, memo, useCallback, useState } from "react";

import { useMutation } from "@apollo/client";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { ADD_TODO, ALL_TODO } from "../apollo/todos";

type TAddTodoProps = {
    className?: string;
};

export const AddTodo = memo((props: TAddTodoProps) => {
    const [addTodo, { error }] = useMutation(ADD_TODO, {
        // после создания (выполнения addTodo) сделает refetch query ALL_TODO,
        // это делается редко, в основном используют метод update без нового запроса refetch (см. ниже)
        // refetchQueries: [
        //     {
        //         query: ALL_TODO,
        //     },
        // ],

        // обновление кэша (без запуска нового запроса)
        update(cache, { data }) {
            // прочитать кэш todos из query ALL_TODO
            const { todos = [] } = cache.readQuery({ query: ALL_TODO }) || {};

            if (!todos || !data || !data.newTodo) {
                return;
            }
            // обновить todos через writeQuery
            cache.writeQuery({
                query: ALL_TODO,
                data: {
                    // используя writeQuery необходимо обновлять как в Redux - иммутабельно
                    todos: [data.newTodo, ...todos]
                }
            });
        },
    });

    const [text, setText] = useState("");

    const handleAddTodo = useCallback(() => {
        if (text.trim().length) {
            addTodo({
                variables: {
                    title: text,
                    completed: false,
                    userId: "123",
                },
            });
            setText("");
        }
    }, [text]);

    const handleKey = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                handleAddTodo();
            }
        },
        [handleAddTodo]
    );

    const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, []);

    if (error) {
        return <h2>Error...</h2>;
    }

    return (
        <FormControl display="flex" mt={6} gap={4} className={props.className}>
            <Input
                value={text}
                onChange={handleChangeText}
                onKeyDown={handleKey}
            />
            <Button onClick={handleAddTodo}>Add todo</Button>
        </FormControl>
    );
});
