import React from 'react';
import './Card.css';

interface CardProp {
    toName: string;
    fromName?: string;
    message: string;
    timestamp: Date;
}

const Card = ({ toName, message }: CardProp): JSX.Element => (
    <div className="card">
        <h1>{toName}</h1>
        <p>{message}</p>
    </div>
);

export default Card;