import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

// ReviewCard
function CustomerReview() {
  return (
    <div>
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our
      <span className="text-coral-red"> Customers</span> Say?
      </h3> 
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuie storie from our
         satisfied customer about their 
         exceptional experices with us</p>

         <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
          {reviews.map((review) => (
            <ReviewCard 
            key={review.imgURL} 
            imgURL={review.imgURL}
            customerName={review.customerNae}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}
         </div>
    </div>
  )
}

export default CustomerReview