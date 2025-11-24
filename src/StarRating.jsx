import { range } from "./util"

function StarRating({ rating }) {
  /*
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return (
    <div className="star-wrapper">
      {range(1, rating).map(num => (
        <img
          key={crypto.randomUUID()}
          alt=""
          className="gold-star"
          src="/star.svg"
        />
      ))}
    </div>
  )
}

export default StarRating
