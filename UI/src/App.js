import "./App.css";
import EditSupplierComponent from "./comopnents/Supplier/EditSupplierComponent";
import SupplierComponent from "./comopnents/Supplier/SupplierComponent";
import Accueil from "./comopnents/pageGlobal/Accueil";
import Footer from "./comopnents/pageGlobal/Footer";
import Navbar from "./comopnents/pageGlobal/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="/supplier" element={<SupplierComponent />} />
          <Route path="/supplier/:id" element={<EditSupplierComponent />} />
          <Route path="/test" element={<EditSupplierComponent />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
