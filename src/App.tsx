import MainPage from './Components/Content/MainPage/MainPage';
import CartPage from './Components/Content/CartPage/CartPage';
import NewCart from './Components/Content/NewCart/NewCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CartPage />} />
        <Route path="/newCart" element={<NewCart />} />
      </Routes>
    </BrowserRouter>


  );
};
export default App;