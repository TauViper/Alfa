import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Store';
import { cartsPage, deleteCart, toggleFavorite } from '../../Store/CartsPage';
import classes from './mainPage.module.css';
import { Link } from 'react-router-dom';
import noLike from '../../../assets/img/free-icon-like-6363923.png';
import like from '../../../assets/img/free-icon-like-acrive-4456163.png';
import Header from '../Header/Header';
const MainPage = () => {
    const dispatch = useAppDispatch();
    const photo = useAppSelector(state => state.cartsReducer);
    const filter = useAppSelector(state => state.filterReducer);
    const handleClick = (item) => {
        const id = item.id;
        dispatch(toggleFavorite(id));
    };
    const handleDelete = (item) => {
        const id = item.id;
        if (id != null) {
            dispatch(deleteCart(id));
        }
    };
    useEffect(() => {
        if (!photo.length) {
            dispatch(cartsPage());
        }
    }, [dispatch]);
    const filterCarts = () => {
        if (filter === 'favorite') {
            return photo.filter((item) => item.favorite);
        }
        else {
            return photo;
        }
    };
    return (_jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.title, children: _jsx(Header, {}) }), _jsx("div", { className: classes.wrapper, children: filterCarts().map((item) => {
                    return (_jsxs("div", { className: classes.cartWrapper, children: [_jsxs(Link, { className: classes.cartBox, to: `/${item.id}`, children: [_jsx("h2", { children: item.title }), _jsx("img", { className: classes.img, src: item.image, alt: "" }), _jsx("p", { children: item.price })] }), _jsxs("div", { className: classes.cartFunc, children: [_jsx("div", { onClick: () => handleClick(item), children: item.favorite ? _jsx("img", { className: classes.like, src: like, alt: "Favorite" }) :
                                            _jsx("img", { className: classes.like, src: noLike, alt: "Not favorite" }) }), _jsx("button", { onClick: () => handleDelete(item), children: "Delete" })] })] }, item.id));
                }) })] }));
};
export default MainPage;
