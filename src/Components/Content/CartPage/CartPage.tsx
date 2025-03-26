import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store';
import { cartPage } from '../../Store/SingleCart';
import { Photo } from '../../Store/CartsPage';
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
  const cart: Photo = useAppSelector(state => state.cartReducer);

  return (
    <div>
      <button onClick={() => GoBackButton()}>Back</button>
      <div className={classes.wrapper}>

        <div className={classes.cartWrapper} key={cart.id}>
          <p>{cart.category}</p>
          <h2>{cart.title}</h2>
          <img className={classes.img} src={cart.image} alt="" />
          <p>{cart.price}</p>
          <p className={classes.description}>{cart.description}</p>

        </div>


      </div>
    </div>
  );
};

export default CartPage;