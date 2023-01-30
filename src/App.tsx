import AppRouter from './router/AppRouter';
import './App.css';
import { RecoilRoot } from 'recoil';

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
