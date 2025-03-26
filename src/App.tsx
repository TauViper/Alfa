import MainPage from './Components/Content/MainPage/MainPage';
import CartPage from './Components/Content/CartPage/CartPage';
import NewCart from './Components/Content/NewCart/NewCart';
import { HashRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CartPage />} />
        <Route path="/newCart" element={<NewCart />} />
      </Routes>
    </HashRouter>


  );
};
export default App;