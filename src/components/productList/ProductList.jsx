import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="p1">
        <div className="p1-texts">
            <h1 className="p1-title">Create & inspire. It's Yavuz</h1>
            <p className="p1-desc">
              Yavuz is a creative portfolio that your work has been waiting for.
              Beautiful homes, stunning portfolio styles & a whole lot more awaits
              inside. 
            </p>
        </div>
        <div className="p1-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
    </div>
  )

};

export default ProductList;