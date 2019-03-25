import React, { Component, ReactNode } from 'react';
import './App.css';
import ThankYouContainer from './ThankYouContainer';

class App extends Component {
    public render(): ReactNode {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello world</h1>
                </header>
                <main>
                    <ThankYouContainer url="http://www.mocky.io/v2/5c993bbb3200007500d90847" />
                </main>
            </div>
        );
    }
}

export default App;
