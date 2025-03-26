import { useAppDispatch, useAppSelector } from '../../Store';
import { filter } from '../../Store/Filter';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {


  const dispatch = useAppDispatch();
  const filterValue: string = useAppSelector(state => state.filterReducer);
  const handleClick = (value: string) => {
    dispatch(filter(value));

  };

  return (

    <div className={classes.header}>
      <label>Filter:
        <select value={filterValue} onChange={(e) => handleClick(e.target.value)}>
          <option value="all">All carts</option>
          <option value="favorite">Favorite</option>
        </select></label>
      <Link className={classes.link} to="/newCart">New Cart</Link>
    </div>

  );
};

export default Header;