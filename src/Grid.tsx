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
            <li key={generateId(thankYou)} style={{ background: '#23ce45' }}>
                <Card {...thankYou} />
            </li>
        );
    }

    public render(): ReactNode {
        return (
            <div className="thankyou-grid">
                <header className="title-box">
                    <h1>Hello world</h1>
                </header>
                <div className="card-box">
                    <ul>{this.props.thanks.map(this.renderThankYou)}</ul>
                </div>
            </div>
        );
    }
}

export default Grid;
