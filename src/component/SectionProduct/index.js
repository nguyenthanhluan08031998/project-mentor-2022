import Product from "../Product";
import './style.scss'
const SectionProduct = (props) => {
    const { data } = props;
    const { title = '', products = [] } = data;
    return (
        <div className="sectiom-product">
            <div className="title">
                {title}
            </div>
            <div className="list-product">
                {
                    products.map((product, index) => {
                        return (<Product data={product} />)
                    })
                }
            </div>
        </div>
    )
}
export default SectionProduct;