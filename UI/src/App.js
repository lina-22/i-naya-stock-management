import './App.css';

import CategoryComponent from './comopnents/CategoryComponent';
import SupplierComponent from './comopnents/Supplier/SupplierComponent';
import Accueil from './comopnents/pageGlobal/Accueil';
import Footer from './comopnents/pageGlobal/Footer';
import Navbar from'./comopnents/pageGlobal/Navbar';


function App() {
  return (
    <div className="App">
     {/* <CategoryComponent/> */}
     <SupplierComponent/>
     <Navbar/>
     <Accueil/>
     <Footer/>
    </div>
  );
}

export default App;
