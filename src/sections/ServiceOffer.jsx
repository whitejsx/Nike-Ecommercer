import ServceCard from "../components/servceCard"
import { services } from "../constants"


// servceCard
function ServiceOffer() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServceCard key={service.label}
            {...service} />
        ))} 
    </section>
  )
}

export default ServiceOffer