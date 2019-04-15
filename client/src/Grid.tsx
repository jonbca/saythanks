import React, { ReactNode, PureComponent } from 'react';
import styled from 'styled-components';
import Card from './Card';
import './Grid.css';
import crypto from 'crypto';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
}

interface GridProps {
    thanks: ThankYou[];
    title: string;
}

function generateId({ toName, fromName, timestamp, message }: ThankYou): string {
    return crypto
        .createHash('md5')
        .update(toName + fromName + timestamp + message)
        .digest('hex');
}

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 10vh calc(90vh - 1rem);
`;

const TitleBox = styled.header`
    padding-left: 1rem;
`;

const Title = styled.h1``;

const Cards = styled.ul`
    display: grid;
    grid-gap: 1rem;
    align-items: stretch;
    justify-content: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    margin: 0;
    padding: 0 1rem 0 1rem;
    list-style-type: none;
`;

const CardItem = styled.li`
    background: cyan;
    border-radius: 10px;
`;

function renderThankYou(thankYou: ThankYou): ReactNode {
    return (
        <CardItem key={generateId(thankYou)}>
            <Card {...thankYou} />
        </CardItem>
    );
}

class Grid extends PureComponent<GridProps> {
    public static defaultProps = {
        title: 'Thank-you!'
    };

    public render(): ReactNode {
        return (
            <GridBox>
                <TitleBox>
                    <Title>{this.props.title}</Title>
                </TitleBox>
                <Cards>{this.props.thanks.map(renderThankYou)}</Cards>
            </GridBox>
        );
    }
}

export default Grid;
