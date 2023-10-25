import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      {/* Note check Index.html for code....Do folder for header main and footer,
       Check code on resposive design, Use live scss too...You can also write <Header></Header> as
       <Header/> */}
     <Header></Header>
     <Main/> 
     <Footer></Footer>
    </div>
  );
}

export default App;
