import { shoe8 } from "../assets/images"
import Button from "../components/Button"


function SupperQuality() {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex-1 flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We provide you  </span>
                    <br/>
                    <span className="text-coral-red inline-block mt-3">Super quality </span>
                    Shoe
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
               <p className="mt-6 lg:max-w-lg info-text "> Build a shoe free universi </p>
               <div className="mt-11">
               <Button label="View Details"/>
               </div>
           

            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={shoe8} 
              alt="Shoe displaaay"
              width={570}
              height={522}
              className="object-contain"
              /> 
            </div>
        </section>
    )
}

export default SupperQuality
