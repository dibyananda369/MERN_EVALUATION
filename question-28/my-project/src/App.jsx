import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting'; // Adjust the path based on your file structure

const App = () => {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
