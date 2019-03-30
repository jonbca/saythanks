import React from 'react';
import { Component, ReactNode } from 'react';
import Grid from './Grid';

export interface ThankYou {
    toName: string;
    fromName?: string;
    timestamp: Date;
    message: string;
}

export interface ThankYouContainerState {
    thankYous: ThankYou[];
    timer: NodeJS.Timeout | null;
}

export interface ThankYouData {
    thankYous: ThankYou[];
}

export interface ThankYouContainerProps {
    loadThankYous?: (url: string) => Promise<ThankYouData>;
    url: string;
    title?: string;
    refreshInterval: number;
}

const thankYouLoader = async (url: string): Promise<ThankYouData> => {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });

    return response.json() as Promise<ThankYouData>;
};

class ThankYouContainer extends Component<ThankYouContainerProps, ThankYouContainerState> {
    public static defaultProps = {
        loadThankYous: thankYouLoader,
        refreshInterval: 30000,
    };

    public state: ThankYouContainerState = {
        thankYous: [],
        timer: null,
    };

    public render(): ReactNode {
        return <Grid thanks={this.state.thankYous.slice()} {...this.props} />;
    }

    public async componentDidMount(): Promise<void> {
        if (this.props.loadThankYous) {
            const loadThankYous = this.props.loadThankYous;

            const setThankYouState = async (): Promise<void> => {
                const thankYous = await loadThankYous(this.props.url);
                this.setState(thankYous);
            };

            const timer = setInterval(setThankYouState, this.props.refreshInterval);
            this.setState({ ...this.state, timer });
            await setThankYouState();
        }
    }

    public componentWillUnmount(): void {
        if (this.state.timer !== null) {
            clearInterval(this.state.timer);
        }
    }
}

export default ThankYouContainer;
