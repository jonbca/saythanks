import React, { Component, ReactNode } from 'react';
import Card from './Card';
import './Grid.css';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
}

interface GridProps {
    thanks: ThankYou[];
}

class Grid extends Component<GridProps, ReadonlyArray<ThankYou>> {
    public constructor(props: GridProps) {
        super(props);

        this.state = [...props.thanks];
    }

    private renderThankYou(thankYou: ThankYou): ReactNode {
        return <Card {...thankYou} />;
    }

    public render(): ReactNode {
        return <ul className="flex-grid">{this.state.map(this.renderThankYou)}</ul>;
    }
}

export default Grid;
