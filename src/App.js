import './App.css';
import Header from './components/Header';
import Boock from './components/Boock';
import Footer from './components/Footer';
import boocksArr from './components/BoocksArr';

function App() {
  const books = boocksArr.map(el => <Boock boockObj={el}/>)
  return (
    <div className="wrepper">
        <Header />
        <div className="cards">
          {books}
        </div>
        <Footer />
    </div>
  );
}

export default App;
