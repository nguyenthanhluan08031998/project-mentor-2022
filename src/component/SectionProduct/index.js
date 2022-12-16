import Product from "../Product";
import './style.scss'
import { useEffect, useState } from "react";
import API from '../../api/product/index';

const SectionProduct = (props) => {
    const { data } = props;
    const { title = '', products = [] } = data;
    const [dataProduct, setDataProduct] = useState([])

    const getDataProductAPI = async () => {
        const resp = await API.getProducts();
        setDataProduct(resp)
        return resp;
    }

    useEffect(() => {
        getDataProductAPI();
    }, [])

    return (
        <div className="sectiom-product">
            <div className="title">
                {title}
            </div>
            <div className="list-product">
                {
                    dataProduct.map((product, index) => {
                        return (<Product data={product} />)
                    })
                }
            </div>
        </div>
    )
}
export default SectionProduct;