import Header from './Components/Header';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Items from './Pages/Items';
import ProtectedRoutes from './Components/ProtectedRoutes';
import NonProtectedRoutes from './Components/NonProtectedRoutes';
import PageNotFound from './Pages/PageNotFound';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <NonProtectedRoutes>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </NonProtectedRoutes>
          } >
          </Route>
          <Route path="/" element={
            <ProtectedRoutes>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Items />} />
              </Routes>
            </ProtectedRoutes>
          } >
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
