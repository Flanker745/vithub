import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/signup';
import Signin from './pages/Signin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
