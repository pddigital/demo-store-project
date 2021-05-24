import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ProductStars = () => {
  const { selectedProduct } = useContext(ProductContext);

  // round up for the loop
  const rating = Math.ceil(selectedProduct.reviewRating);
  const stars = [];

  // For decimal ratings, using a half star; For whole numbers, full star;
  for (let i = 1; i <= rating; i++) {
    if (i === rating && !Number.isInteger(selectedProduct.reviewRating)) {
      stars.push('half');
      break;
    }
    stars.push('whole');
  }

  const starRatings = stars.map((star) => {
    return star === 'whole' ? <FaStar /> : <FaStarHalf />;
  });

  return <div className="review-stars">{starRatings} {selectedProduct.reviewRating} out of 5</div>;
};

export default ProductStars;
