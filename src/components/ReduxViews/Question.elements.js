// MOBILE FIRST

import styled from 'styled-components';

export const Li = styled.li`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    list-style: none;
    text-decoration: ${(props) => props.asked ? 'red double line-through' : 'none'};
    cursor: pointer;
`;  