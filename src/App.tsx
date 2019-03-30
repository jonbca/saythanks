import React, { Component, ReactNode } from 'react';
import './App.css';
import ThankYouContainer, { ThankYouList } from './ThankYouContainer';
import sampleDataLoader from './lib/sampleDataLoader';

function sampleDataLoaderIfDevelopment(): (() => Promise<ThankYouList>) | undefined {
    return window.location.search.indexOf('devMode=true') >= 0 ? sampleDataLoader : undefined;
}

class App extends Component {
    public render(): ReactNode {
        return (
            <div className="App">
                <main>
                    <ThankYouContainer
                        url="http://localhost:3000/sample-thanks.json"
                        loadThankYous={sampleDataLoaderIfDevelopment()}
                    />
                </main>
            </div>
        );
    }
}

export default App;
