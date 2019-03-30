import React from 'react';
import { Component, ReactNode } from 'react';
import Grid from './Grid';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
}

export interface ThankYouList {
    thankYous: ThankYou[];
}

export interface ThankYouContainerProps {
    loadThankYous?: (url: string) => Promise<ThankYouList>;
    url: string;
}

const thankYouLoader = async (url: string): Promise<ThankYouList> => {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });

    return response.json() as Promise<ThankYouList>;
};

class ThankYouContainer extends Component<ThankYouContainerProps, ThankYouList> {
    public static defaultProps = {
        loadThankYous: thankYouLoader,
    };

    public constructor(props: ThankYouContainerProps) {
        super(props);

        this.state = { thankYous: [] };
    }

    public render(): ReactNode {
        return <Grid thanks={this.state.thankYous.slice()} />;
    }

    public async componentDidMount(): Promise<void> {
        if (this.props.loadThankYous) {
            const thankYous = await this.props.loadThankYous(this.props.url);
            this.setState(thankYous);
        }
    }
}

export default ThankYouContainer;
