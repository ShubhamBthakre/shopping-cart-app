import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log("cart", cart);

  return (
    <div className="product">
      <Card>
        <Card.Img src={prod.imageUrl} variant="top" alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {
            //some check weather that particular thing exist inside of that array or not
            cart.some((p) => p.id === prod.id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "Remove_from_card",
                    payload: prod,
                  })
                }
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                disabled={!prod.inStock}
                onClick={() =>
                  dispatch({
                    type: "Add_to_card",
                    payload: prod,
                  })
                }
              >
                {prod.inStock ? "Add to cart" : "Out of stock"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
