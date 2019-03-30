import React, { ReactNode, PureComponent } from 'react';
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
}

function generateId({ toName, fromName, timestamp, message }: ThankYou): string {
    return crypto
        .createHash('md5')
        .update(toName + fromName + timestamp + message)
        .digest('hex');
}

class Grid extends PureComponent<GridProps> {
    private renderThankYou(thankYou: ThankYou): ReactNode {
        return (
            <li key={generateId(thankYou)}>
                <Card {...thankYou} />
            </li>
        );
    }

    public render(): ReactNode {
        return <ul className="flex-grid">{this.props.thanks.map(this.renderThankYou)}</ul>;
    }
}

export default Grid;
