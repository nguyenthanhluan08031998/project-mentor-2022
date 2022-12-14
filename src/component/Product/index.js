import './style.scss';
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/cart/action';
const Product = (props) => {
    const dispatch = useDispatch()

    const onBuyProduct = product => {
        dispatch(addProductToCart(product))
    }
    
    const { data } = props;
    const { img = '', name = '', price = '' } = data;
    return (
        <div className="product">
            <img src={img} />
            <span className='txt-name'>{name}</span>
            <span className='txt-price'>{price}</span>
            <button className='btn' onClick={() => onBuyProduct(data)}>Chọn mua</button>
        </div>
    )
}
export default Product;