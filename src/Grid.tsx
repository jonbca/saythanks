import React, { Component, ReactNode } from 'react';
import Card from './Card';
import './Grid.css';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
    id: number;
}

interface GridProps {
    thanks: ThankYou[];
}

class Grid extends Component<GridProps, ReadonlyArray<ThankYou>> {
    public constructor({ thanks }: GridProps) {
        super({ thanks });

        this.state = [...thanks];
    }

    private renderThankYou(thankYou: ThankYou): ReactNode {
        return (
            <li key={thankYou.id}>
                <Card {...thankYou} />
            </li>
        );
    }

    public render(): ReactNode {
        return <ul className="flex-grid">{this.state.map(this.renderThankYou)}</ul>;
    }
}

export default Grid;
