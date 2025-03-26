import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Store';
import { cartsPage, deleteCart, Photo, toggleFavorite } from '../../Store/CartsPage';
import classes from './mainPage.module.css';
import { Link } from 'react-router-dom';
import noLike from '../../../assets/img/free-icon-like-6363923.png';
import like from '../../../assets/img/free-icon-like-acrive-4456163.png';

import Header from '../Header/Header';


const MainPage = () => {


  const dispatch = useAppDispatch();
  const photo: Photo[] = useAppSelector(state => state.cartsReducer);
  const filter: string = useAppSelector(state => state.filterReducer);

  const handleClick = (item: Photo) => {
    const id = item.id;
    dispatch(toggleFavorite(id));
  };


  const handleDelete = (item: Photo) => {
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
    } else {
      return photo;
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Header />
      </div>
      <div className={classes.wrapper}>
        {filterCarts().map((item) => {
          return (
            <div className={classes.cartWrapper} key={item.id}>
              <Link className={classes.cartBox} to={`/${item.id}`}>
                <h2>{item.title}</h2>
                <img className={classes.img} src={item.image} alt="" />
                <p>{item.price}</p>
              </Link>
              <div className={classes.cartFunc}>
                <div onClick={() => handleClick(item)}>
                  {item.favorite ? <img className={classes.like} src={like} alt="Favorite" /> :
                    <img className={classes.like} src={noLike} alt="Not favorite" />}
                </div>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;