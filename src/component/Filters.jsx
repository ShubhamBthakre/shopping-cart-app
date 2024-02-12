import { Button, Form } from "react-bootstrap";
import Rating from "./Rating.jsx";
import { CartState } from "../context/Context.jsx";

function Filters() {
  const {
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, byRating, sort, searchQuery);

  return (
    <div className="filters">
      <span className="title">Filters Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "Sort_by_price",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "Sort_by_price",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "Filter_by_stock",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "Filter_by_delivery",
            })
          }
          checked={byFastDelivery}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onclick={(i) =>
            productDispatch({
              type: "Filter_by_rating",
              payload: i + 1,
            })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() => productDispatch({ type: "Clear_filters" })}
      >
        Clear filters
      </Button>
    </div>
  );
}

export default Filters;
