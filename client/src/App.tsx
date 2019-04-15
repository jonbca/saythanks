import React, { Component, ReactNode } from 'react';
import ThankYouContainer, { ThankYouData } from './ThankYouContainer';
import sampleDataLoader from './lib/sampleDataLoader';

function sampleDataLoaderIfDevelopment(): (() => Promise<ThankYouData>) | undefined {
    return window.location.search.indexOf('devMode=true') >= 0 ? sampleDataLoader : undefined;
}

class App extends Component {
    public render(): ReactNode {
        return (
            <div className="App">
                <main>
                    <ThankYouContainer url="/data/thanks.json" loadThankYous={sampleDataLoaderIfDevelopment()} />
                </main>
            </div>
        );
    }
}

export default App;
