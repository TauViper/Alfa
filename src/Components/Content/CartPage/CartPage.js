import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store';
import { cartPage } from '../../Store/SingleCart';
import classes from './cartPage.module.css';
const CartPage = () => {
    const history = useNavigate();
    const { id } = useParams();
    const GoBackButton = () => {
        return history(-1);
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(cartPage(id));
        }
    }, [dispatch, id]);
    const cart = useAppSelector(state => state.cartReducer);
    return (_jsxs("div", { children: [_jsx("button", { onClick: () => GoBackButton(), children: "Back" }), _jsx("div", { className: classes.wrapper, children: _jsxs("div", { className: classes.cartWrapper, children: [_jsx("p", { children: cart.category }), _jsx("h2", { children: cart.title }), _jsx("img", { className: classes.img, src: cart.image, alt: "" }), _jsx("p", { children: cart.price }), _jsx("p", { className: classes.description, children: cart.description })] }, cart.id) })] }));
};
export default CartPage;
