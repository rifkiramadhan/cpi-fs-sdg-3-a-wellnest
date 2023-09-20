import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, HomePage } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
