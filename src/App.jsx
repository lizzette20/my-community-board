import './App.css';
import CommunityBoard from './components/CommunityBoard';

const App = () => {
  return (
    <div className="App">
      <div className="header-box">
        <h1 className="header-title">The Art of Ambition</h1>
        <h2 className="header-subtitle">A Journey into the Work You Were Meant to Do</h2>
      </div>
      <CommunityBoard />
    </div>
  );
};

export default App;