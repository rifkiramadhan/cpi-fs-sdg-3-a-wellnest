import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, HomePage, Login, Register, CategoryList } from './components';
import Logout from './components/Users/Login/Logout';
import { selectUser } from './redux/slices/users/usersSlices';

const App = () => {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoryList />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
