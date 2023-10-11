import Button from "../components/Button"



function Subscribe() {
  return (
    <section 
    id="contact-us"
    className="max-container flex justify-center items-center gap-10" >
      <div>
      <h3 className="text-4xl w-full leading-[68px] lg:max-w-md font-palanquin font-bold">Sign up from <span className="text-coral-red">Updates</span> & Newsletter</h3>
      </div>
      <div className="lg:max-w-[70%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <input type="text" name="" placeholder="Subscribe@nike.com" id="" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button
              label="Sign Up"
              className="w-full"
            /> 
        </div>
      </div>
    </section>
  )
}

export default Subscribe