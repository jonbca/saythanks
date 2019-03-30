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
                    <ThankYouContainer url="http://localhost:3000/sample-thanks.json" />
                </main>
            </div>
        );
    }
}

export default App;
