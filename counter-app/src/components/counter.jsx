import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    };

    render() { 
        // React.createElement('div')
        return (
            <div>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </div>
        );
    }
}
 
export default Counter;