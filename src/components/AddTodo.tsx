import { ChangeEvent, KeyboardEvent, memo, useCallback, useState } from "react";

import { Button, FormControl, Input } from "@chakra-ui/react";

type TAddTodoProps = {
    className?: string;
};

export const AddTodo = memo((props: TAddTodoProps) => {
    const [text, setText] = useState("");

    const handleAddTodo = useCallback(() => {
        if (text.trim().length) {
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
