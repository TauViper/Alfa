import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../Store';
import { filter } from '../../Store/Filter';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const dispatch = useAppDispatch();
    const filterValue = useAppSelector(state => state.filterReducer);
    const handleClick = (value) => {
        dispatch(filter(value));
    };
    return (_jsxs("div", { className: classes.header, children: [_jsxs("label", { children: ["Filter:", _jsxs("select", { value: filterValue, onChange: (e) => handleClick(e.target.value), children: [_jsx("option", { value: "all", children: "All carts" }), _jsx("option", { value: "favorite", children: "Favorite" })] })] }), _jsx(Link, { className: classes.link, to: "/newCart", children: "New Cart" })] }));
};
export default Header;
