import Nav from "./components/Nav"
import { Hero,
  Footer,
  CustomerReview,
  ServiceOffer,
  Subscribe,
  SupperQuality,
  PopularProduct,
  SpecialOffer
} from "./sections"



const App = () => (
<main className="relative ">
  {/* navigation */}
  <Nav />
  <section className="xl:padding-l  wide:padding-r padding-b">
      <Hero />
  </section>
  {/* popular product  */}
  <section className="padding">
    <PopularProduct />
  </section>
  {/* ----- */}
  <section className="padding-x py-10">
    <SupperQuality />
  </section>
  <section className="padding">
    <ServiceOffer />
  </section>

  <section className="padding">
    <SpecialOffer />
  </section>

  <section className="bg-pale-blue padding">
    <CustomerReview />
  </section>
  <section className="padding-x sm:py-32 py-16 w-full ">
    <Subscribe />
  </section>
  <section className="bg-black padding-x padding-t pb-8">
   <Footer /> 
  </section>

</main>
)

export default App