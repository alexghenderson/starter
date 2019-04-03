import {css} from '@emotion/core';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p
          css={css`
            font-weight: bold;
          `}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
