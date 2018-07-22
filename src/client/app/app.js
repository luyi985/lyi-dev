import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss';
const App = () => (
    <div>
        <p>React here!</p>
    </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
