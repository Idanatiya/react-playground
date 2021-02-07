

import AppHeader from './cmps/AppHeader.jsx';
import Home from './views/Home.jsx';
import './assets/style/main.scss'


function App() {
  return (
    <div className="App flex column">
      <AppHeader/>
        <main className="content">
          <Home />
        </main>
      </div>
  );
}

export default App;
