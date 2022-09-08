import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
  );
}

export default App;
