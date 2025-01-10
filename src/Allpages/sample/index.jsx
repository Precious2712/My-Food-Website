import React from 'react'
import rice from '/src/assets/rice.jpeg'
import beanCake from '/src/assets/bean cake.jpeg'
import drink from '/src/assets/cocacola.jpeg'
import chopNow from '/src/assets/chopnownow.jpeg'
import kfc from '/KFC.jpeg'
import freshKitchen from '/src/assets/Fresh Kitchen Restaurant.jpeg' 
import chop from '/pizza.jpeg'
import smallChops from '/src/assets/smallChops.jpeg'
import delivery from '/src/assets/delivery-opt.svg'
import goceries from '/src/assets/groceries-opt.svg'
import restaurant from '/restaurants-opt.svg'

const Restaurants = () => {
    return (
        <div className='mt-[25px]'>
            <h1 className='text-black-500 text-[24px] font-bold sm:text-[35px] text-center'>Top foods and more in Nigeria</h1>
            <div className='grid grid-cols-3 gap-3 mt-8 sm:flex sm:justify-center sm:gap-6'>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={rice} alt="Rice" />
                </div>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={beanCake} alt="Bean Cake" />
                </div>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={drink} alt="Drink" />
                </div>
                <div className='hidden sm:block'>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={chopNow} alt="Chop Now" />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-3 mt-8 sm:flex sm:justify-center sm:gap-6'>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={freshKitchen} alt="Rice" />
                </div>
                <div className='hidden sm:block'>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={smallChops} alt="Bean Cake" />
                </div>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={chop} alt="Drink" />
                </div>
                <div>
                    <img className='w-[100px] h-[100px] rounded-full shadow object-cover mx-auto' src={kfc} alt="Chop Now" />
                </div>
            </div>

            <div className='mt-[60px]'>
                <h1 className='text-black-800 font-bold text-[26px] text-center sm:text-[40px]'>Anything delivered</h1>
                <div className='grid cols-1 gap-5 mt-[50px] m-auto sm:flex justify-evenly'>
                    <div className=' w-80'>
                        <div className='flex justify-center'>
                            <img className='' src={delivery} alt="" />
                        </div>
                        <h1 className='text-[15px] font-bold text-center sm:text-[17px] font-bold'>Your city's top restaurants</h1>
                        <p className='text-center mt-[6px] leading-[0.7]'>With a great variety of restaurants you can</p>
                        <p className='text-center'>order your favourite food or explore new</p>
                        <p className='text-center'>restaurants nearby!</p>
                    </div>

                    <div className='w-80'>
                        <div className='flex justify-center'>
                            <img className='' src={goceries} alt="" />
                        </div>
                        <h1 className='text-[15px] font-bold text-center sm:text-[17px] font-bold'>Fast delivery</h1>
                        <p className='text-center mt-[6px] leading-[0.7]'>Like a flash! Order or send anything in your</p>
                        <p className='text-center'>city and receive it in minutes</p>
                    </div>

                    <div className='w-80'>
                        <div className='flex justify-center'>
                            <img className='' src={restaurant} alt="" />
                        </div>
                        <h1 className='text-[15px] font-bold text-center sm:text-[17px] font-bold'>Groceries delivery & more</h1>
                        <p className='text-center mt-[6px] leading-[0.7]'>Find anything you need! From</p>
                        <p className='text-center'>supermarkets to shops, pharmacies to</p>
                        <p className='text-center'>florists — if it's in your city order it and</p>
                        <p className='text-center'>receive it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurants
