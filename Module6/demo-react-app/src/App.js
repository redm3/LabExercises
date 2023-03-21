import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import PropsDisplayer from './PropsDisplayer';
import Comment from './Comment';
import Greeting from './Greeting';
import EmojiSwitcher from './EmojiSwitcher';
import CalculatorComponent from './CalculatorComponent';
import Example from './Example';
import Weather from './Weather';
import HookExample from './HookExample';
import HookWeather from './HookWeather';
import HookGreeting from './HookGreeting';
import HookClockDisplay from './HookClock';
import ClockDisplay from './Clock';
import Login from './Login';
import HookLogin from './HookLogin';
import Reservation from './Reservation';
import StudentList from './StudentList';

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
  <div className='componentBox'>
  <div className="App">
    <h2>Module 6</h2>
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
    <HookGreeting name = "Marco" />
    <Greeting name="Marco" />
    <EmojiSwitcher />
    <CalculatorComponent />
    <Example />
    <Weather/>
    <HookExample/>
    <HookWeather/>
    <ClockDisplay/>
    <HookClockDisplay/>
    <Login/>
    <HookLogin/>
    <Reservation/>
    <StudentList/>
  </div>
  </div>
);
}

export default App;
