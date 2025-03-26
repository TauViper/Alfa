import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import classes from './newCart.module.css';
import { useAppDispatch } from '../../Store';
import { addCart } from '../../Store/CartsPage';
const NewCart = () => {
    const dispatch = useAppDispatch();
    const history = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newCart = { ...data, id: Date.now() };
        dispatch(addCart(newCart));
        history('/');
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("button", { onClick: () => history(-1), children: "Back" }) }), _jsxs("form", { className: classes.form, onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: classes.input, children: [_jsx("label", { htmlFor: "category", children: "Category Name" }), _jsx("input", { ...register('category', { required: true, maxLength: 20 }) }), errors.category && _jsx("span", { children: "This field is required" })] }), _jsxs("div", { className: classes.input, children: [_jsx("label", { htmlFor: "title", children: "Title Name" }), _jsx("input", { ...register('title', { required: true, maxLength: 20 }) }), errors.title && _jsx("span", { children: "This field is required" })] }), _jsxs("div", { className: classes.input, children: [_jsx("label", { htmlFor: "image", children: "Image (URL) " }), _jsx("input", { ...register('image', {
                                    required: true,
                                    pattern: /^https?:\/\/([a-z0-9-]([a-z0-9-]|(?<!\.)\.)+?(?<!\.)\.[a-z]{2,10}(:\d{1,5})?$)|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?$)/,
                                }) }), errors.image && _jsx("span", { children: "This field is required" })] }), _jsxs("div", { className: classes.input, children: [_jsx("label", { htmlFor: "price", children: "Price" }), _jsx("input", { ...register('price', { required: true, maxLength: 20 }) }), errors.price && _jsx("span", { children: "This field is required" })] }), _jsxs("div", { className: classes.input, children: [_jsx("label", { htmlFor: "description", children: "Description" }), _jsx("textarea", { ...register('description', { required: true, maxLength: 200 }) }), errors.description && _jsx("span", { children: "This field is required" })] }), _jsx("input", { type: "submit" })] })] }));
};
export default NewCart;
