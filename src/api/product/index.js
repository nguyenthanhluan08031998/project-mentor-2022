import Api from "../index"

const getProducts = () => {
    return Api.get("https://fakestoreapi.com/products")
        .then(res => res.data)
        .catch(error => console.log(error))
}

export default {
    getProducts
}