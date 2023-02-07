import AppRouter from './router/AppRouter';
import { RecoilRoot } from 'recoil';
import './App.css';
import './styles/font.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <AppRouter />
      </div>
    </RecoilRoot>
  );
}

export default App;
