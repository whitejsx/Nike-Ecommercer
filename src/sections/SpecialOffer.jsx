import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

// offer
// Button
function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
         
         <div className="flex-1">
            <img 
            src={offer}
            width={773}
            height={687}
            className="object-contain w-full"
            /> 
         </div>
          <div className="flex-1 flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Special </span>
                    <br/>
                    <span className="text-coral-red inline-block mt-3">Super quality </span>
                Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
               <p className="mt-6 lg:max-w-lg info-text "> Build a shoe free universi </p>
               <div className="mt-11 flex flex-wrap gap-4 ">
               <Button 
                    label="Shop now"
                    iconURL={arrowRight}
               />
               <Button 
                    label={"Learn more"}
                    backgroundColor="bg-white"
                    borderColor="border-coral-red"
                    textColor="text-coral-red" />
               </div>
               </div>
    </section>
  )
}

export default SpecialOffer