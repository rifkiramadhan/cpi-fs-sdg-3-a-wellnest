import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, HomePage, CategoryList } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoryList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
