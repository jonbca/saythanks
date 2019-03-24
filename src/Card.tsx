import React from 'react';

import './Card.css';

interface CardProp {
    toName: string;
    fromName?: string;
    message: string;
    timestamp: Date;
    bgColour?: string;
}

const Card = ({ toName }: CardProp): JSX.Element => <h1>Hello, {toName}</h1>;

export default Card;
