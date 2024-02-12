import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function Rating({ rating, onclick }) {
  console.log("rating", rating);
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onclick(i)} style={{ cursor: "pointer" }}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
