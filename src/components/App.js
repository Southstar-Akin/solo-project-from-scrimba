import Message from './Message';
import Intro from './intro';
import Socials from './socials';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Intro />
      <Message />
      <Socials />
      </div>
    </div>
  );
}

export default App;

