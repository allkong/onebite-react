import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// 최상위(조상) 컴포넌트
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
