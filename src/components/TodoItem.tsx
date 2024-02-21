import { memo } from 'react';

import { Checkbox, CloseButton, HStack, Text } from '@chakra-ui/react';
import { Todo } from '../__generated__/graphql';

type TTodoItemProps = {
    todo: Todo;

    className?: string;
};

export const TodoItem = memo((props: TTodoItemProps) => {
    const { todo, className} = props;
    const { id, title, completed } = todo || {};

    return (
        <HStack spacing={3} className={className}>
            <Checkbox isChecked />
            <Text>{title}</Text>
            <CloseButton />
        </HStack>
    )
});
