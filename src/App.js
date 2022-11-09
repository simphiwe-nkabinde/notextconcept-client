import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CountriesPage from './pages/countries/countries.page';
import CountryPage from './pages/country/country.page';

function App() {
  return (
    <Router>
      <header className="bg-purple py-2 shadow-sm">
        <h1 className="text-center display-4 text-light">Notext Concept</h1>
      </header>
      <Routes>
        <Route path="/survey/country" element={<CountriesPage />}></Route>
        <Route path='/survey/country/:countryCode' element={<CountryPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
