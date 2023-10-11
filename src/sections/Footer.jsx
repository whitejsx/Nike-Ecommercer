import { copyrightSign } from '../assets/icons'
import FooterLogo from '../assets/images/footer-logo.svg'

import {SocialMedia,footerLinks} from '../constants'

function Footer() {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={FooterLogo}

                            width={150}
                            height={46}/>
                    </a>
                    <p className="mt-6 text-base leading-7 font-montderrat text-white-400 sm:max-w-sm">Get Shoes ready for the new term at your nearest Nike store. Find Your perferct Size in Store. Get Rewards</p>
                    <div className="flex items-center gap-5 mt-8">
                        {
                        SocialMedia.map((item, index) => (
                            <div key={index}
                                className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src={
                                        item.src
                                    }
                                    alt={
                                        item.alt
                                    }
                                    width={24}
                                    height={24}/>
                            </div>
                        ))
                    } </div>

                </div>

                <div className='flex flex-1 justify-between lg:gap-10 gap-10 flex-wrap '>
                      {footerLinks.map((section) => (
                        <div key={section}>
                          <h4 className='text-white font-montserrat text-2xl leading-6 '>
                            {section.title}
                          </h4>
                          <ul>
                            {section.links.map((link) =>(
                              <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-salte-gray cursor-pointer' key={link.name}>
                                <a>{link.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                </div>
            </div>
            <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:item-center'>
              <div className='flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                <img 
                  src={copyrightSign}
                  alt="copy right sign"
                  width={20}
                  height={20}
                  className='rounded-full m-0'
                />
                <p>Copyright. All rights Reseaved.</p>
              </div>
              <p className='font-montserrat cursor'>Terms & Conditions</p>

            </div>
        </footer>
    )
}

export default Footer
