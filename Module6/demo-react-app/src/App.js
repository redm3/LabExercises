import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import PropsDisplayer from './PropsDisplayer';
import Comment from './Comment';
import Greeting from './Greeting';
import EmojiSwitcher from './EmojiSwitcher';
import CalculatorComponent from './CalculatorComponent';

function formatName(name) {
  return name.first + ' ' + name.last;
}

function App() {

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const name = { first: 'Marco', last: 'Wells' };
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
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
    <h2>{formatName(name)}</h2>
    <MyComponent />
    <PropsDisplayer name="Marco" location="NZ" number={42} />
    <Comment user={comment.author} date={comment.date} text={comment.text} />
    <Greeting name="Marco" />
    <EmojiSwitcher />
    <CalculatorComponent />
  </div>
);
}

export default App;
