import React from 'react';
import Form from './Form.js';

class App extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <h1 class="col-sm-12">Example Login</h1>
                    <p>&nbsp;</p>
                </div>
                <Form />
            </div>
        );
    }
}

export default App;