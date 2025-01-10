import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <div className='bg-black py-[50px]'>
            <div className='grid grid-cols-2 gap-[0px]  m-auto sm:flex justify-evenly gap-[0px]'>

                <div>
                    <Link>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HtiBPUoFKnC42lAfRgiYAUzFoihPZ9jBiQ&s" className="w-12 h-12 rounded-full" alt="tailus logo" width="144" height="133" />
                    </Link>
                    <div className='mt-[8px] '>
                        <h1 className='text-white-800 text-[16px] font-bold sm:text-[25px] text-white '>Let’s do it together</h1>
                        <Link>
                            <p className='text-neutral-500 mt-[7px]'>Careers</p>
                        </Link>
                        <Link>
                            <p className='text-neutral-500 mt-[7px]'>Glovo for Partners</p>
                        </Link>
                        <Link>
                            <p className='text-neutral-500  mt-[7px]'>Couriers</p>
                        </Link>
                        <Link>
                            <p className='text-neutral-500 mt-[7px]'>Glovo Business</p>
                        </Link>
                    </div>
                </div>

                <div className='mt-[50px]'>
                    <h1 className='text-white-800 text-[16px] font-bold sm:text-[25px] text-white '>Links of interest</h1>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>About us</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>FAQS</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Glovo Prime</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Blog</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Contact us</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Security</p>
                    </Link>
                </div>

                <div className='mt-[50px]'>
                    <h1 className='text-white-800 text-[16px] font-bold sm:text-[25px] text-white '>Follow us</h1>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Facebook</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Twitter</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[7px]'>Instagram</p>
                    </Link>
                </div>

                <div className='mt-[55px]'>
                    <Link>
                        <img src="https://glovoapp.com/images/app_store/download-button-new.svg" alt="" />
                    </Link>
                    <Link>
                        <img className='mt-[12px]' src="https://glovoapp.com/images/google_play/download-button-new.svg" alt="" />
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[12px]'>TERMS & CONDITIONS</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[12px]'>PRIVACY POLICY</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[12px]'>COOKIE POLICY</p>
                    </Link>
                    <Link>
                        <p className='text-neutral-500 mt-[12px]'>COMPLIANCE</p>
                    </Link>
                </div>

            </div>

            <div className='mt-[40px] sm:mt-[70px]'>
                <h1 className='text-white-800 text-[16px] font-bold sm:text-[25px] text-white '>Top categories: Nigeria</h1>
                <div className='grid grid-cols-2 mt-[17px] sm:flex justify-start gap-[12px]'>
                    <p className='text-white text-[14px]'>Indian</p>
                    <p className='text-white text-[14px]'>Healthy</p>
                    <p className='text-white text-[14px]'>Pizza</p>
                    <p className='text-white text-[14px]'>Sushi</p>
                    <p className='text-white text-[14px]'>Burger</p>
                    <p className='text-white text-[14px]'>Breakfast</p>
                    <p className='text-white text-[14px]'>Pastries</p>
                    <p className='text-white text-[14px]'>Nigerian</p>
                </div>
            </div>
        </div>
    )
};

export default FooterPage