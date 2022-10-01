import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Term from "./pages/Term";
import Policy from "./pages/Policy";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/term" element={<Term />} />
          <Route path="policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
