import { memo } from 'react';

import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react';
import { Todo } from '../__generated__/graphql';

type TTodoItemProps = {
    todo: Todo;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void

    className?: string;
};

export const TodoItem = memo((props: TTodoItemProps) => {
    const { todo, onToggle, onDelete, className} = props;
    const { id, title, completed } = todo || {};

    return (
        <HStack spacing={3} className={className}>
            <Checkbox isChecked={completed} onChange={() => onToggle(id, !completed)} />
            <Text>{title}</Text>
            <CloseButton onClick={() => onDelete(id)} />
        </HStack>
    )
});
