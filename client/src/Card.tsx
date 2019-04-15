import React from 'react';
import styled from 'styled-components';

interface CardProp {
    toName: string;
    fromName?: string;
    message: string;
    timestamp: Date;
}

const Card = styled.div`
    margin-left: 1rem;
`;

export default function({ toName, message }: CardProp) {
    return (
        <Card>
            <h1>{toName}</h1>
            <p>{message}</p>
        </Card>
    );
}
