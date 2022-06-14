import logo from './../logo.svg';
import snail from './../snail.svg';

export default function AppTiser({seconds}) {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="//reactjs.org"
            target="_blank" rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Number of seconds is {seconds}</p>        
          <a 
            className="App-link"
            href="//github.com/otolaa/snail_chat" 
            target="_blank" rel="noopener noreferrer"
          >
            Snail_Chat_v1.0
            <img src={snail} className="Snail-logo" />
          </a>         
        </header>
      </div>
      )
}