import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl'
import { Context } from './assets/Wrapper'

function App(props) {
  const context = useContext(Context);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <select value={context.locale} onChange={context.selectLanguage}>
        <option value='en'>English</option>
        <option value='fr'>French</option>
      </select>
      <p>
        <FormattedMessage
          id="app.header"
          defaultMessage="Hello World"
        />
      </p>
      <p>
        <FormattedMessage
          id="app.body"
          defaultMessage="Hello World"
        />
      </p>
      <p>
        <FormattedDate
          value={props.date}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </p>
      <p>
        <FormattedNumber
          value={20.42}
          style="currency"
          currencyDisplay="symbol"
          currency="USD"
        />
      </p>
      <p>
        <FormattedNumber
          value={10000}
        />
      </p>
    </>
  )
}

export default App
