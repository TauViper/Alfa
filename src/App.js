import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MainPage from './Components/Content/MainPage/MainPage';
import CartPage from './Components/Content/CartPage/CartPage';
import NewCart from './Components/Content/NewCart/NewCart';
import { HashRouter, Route, Routes } from 'react-router-dom';
const App = () => {
    return (_jsx(HashRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainPage, {}) }), _jsx(Route, { path: "/:id", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "/newCart", element: _jsx(NewCart, {}) })] }) }));
};
export default App;
