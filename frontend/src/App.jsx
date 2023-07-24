import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div style={{backgroundColor:'#f5f5f5'}}>
      <header style={{position:'fixed', width:'100%'}}>
        <nav>
          <Header/>
        </nav>
          <NavBar/>
        <nav>

        </nav>
      </header>
      <main style={{minHeight:'700px'}}>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
