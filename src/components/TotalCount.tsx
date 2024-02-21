import { memo } from 'react';

import { Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { ALL_TODO } from '../apollo/todos';

type TTotalCountProps = {
    

    className?: string;
};

export const TotalCount = memo((props: TTotalCountProps) => {
    const { data } = useQuery(ALL_TODO);

    return (
        <Flex justifyContent="center" borderTop={"2px"} mt={5} className={props.className}>
            {!!data?.todos?.length && <b>Total todos: {data.todos.length}</b>}
        </Flex>
    )
});
