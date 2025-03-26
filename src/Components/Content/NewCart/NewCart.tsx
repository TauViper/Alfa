import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import classes from './newCart.module.css';
import { useAppDispatch } from '../../Store';
import { addCart } from '../../Store/CartsPage';

interface IFormInput {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  description: string;
}


const NewCart = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newCart = { ...data, id: Date.now() };
    dispatch(addCart(newCart));
    history('/');
  };


  return (
    <>
      <div>
        <button onClick={() => history(-1)}>Back</button>
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.input}>
          <label htmlFor="category">Category Name</label>
          <input {...register('category', { required: true, maxLength: 20 })} />
          {errors.category && <span>This field is required</span>}
        </div>
        <div className={classes.input}>
          <label htmlFor="title">Title Name</label>
          <input {...register('title', { required: true, maxLength: 20 })} />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className={classes.input}>
          <label htmlFor="image">Image (URL) </label>
          <input {...register('image', {
            required: true,
            pattern: /^https?:\/\/([a-z0-9-]([a-z0-9-]|(?<!\.)\.)+?(?<!\.)\.[a-z]{2,10}(:\d{1,5})?$)|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?$)/,
          })} />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className={classes.input}>
          <label htmlFor="price">Price</label>
          <input {...register('price', { required: true, maxLength: 20 })} />
          {errors.price && <span>This field is required</span>}
        </div>
        <div className={classes.input}>
          <label htmlFor="description">Description</label>
          <textarea  {...register('description', { required: true, maxLength: 200 })} />
          {errors.description && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};
export default NewCart;