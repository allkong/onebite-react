import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

// 최상위(조상) 컴포넌트
function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
