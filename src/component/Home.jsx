import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

function Home() {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  console.log(products);

  const transformProduct = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.rating >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProduct;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productsContainer">
        {transformProduct().map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
}

export default Home;
