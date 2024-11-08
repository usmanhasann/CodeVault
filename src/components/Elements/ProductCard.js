import { Link } from "react-router-dom";
import Rating from "./Rating";

export const ProductCard = ({
  id,
  name,
  overview,
  price,
  poster,
  image_local,
  rating,
  in_stock,
  size,
  best_seller,
}) => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="text-sm text-white  bg-orange-500 bg-opacity-90 rounded-full py-1 px-3 absolute top-2 left-2 z-10">
            Best Seller
          </span>
        )}
        <img
          className="rounded-t-lg w-full h-64 object-cover"
          src={image_local}
          alt="Product image"
        />
      </Link>

      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
          {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
          </button>
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  );
};