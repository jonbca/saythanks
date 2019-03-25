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

class Grid extends Component<GridProps, GridProps> {
    public constructor(props: GridProps) {
        super(props);

        this.state = Object.assign({}, props);
    }

    private renderThankYou(thankYou: ThankYou): ReactNode {
        return (
            <li key={thankYou.id}>
                <Card {...thankYou} />
            </li>
        );
    }

    public render(): ReactNode {
        return <ul className="flex-grid">{this.state.thanks.map(this.renderThankYou)}</ul>;
    }
}

export default Grid;
