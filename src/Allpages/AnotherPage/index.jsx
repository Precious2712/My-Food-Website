import React from 'react'
import foodImage from '/download-app-desktop-opt.avif'
import applogo from '/download-app-logo-opt.svg'
import apple from '/app-store-button.svg'
import google from '/google-play-button.svg'

const AnotherPage = () => {
    return (
        <div className='mt-0 bg-sky-600'>
            <div className='grid grid-cols-1 w-[90%] m-auto sm:flex justify-between mt-[75px]'>
                <div className='w-full sm:w-[50%] mt-0'>
                    <div className='flex justify-center'>
                        <img src={applogo} alt="App Logo" />
                    </div>
                    <h1 className='text-center text-[20px] font-bold sm:text-[40px]'>Download the app</h1>
                    <p className='text-center leading-[1.5] sm:leading-normal'>Order anything and track it in real time with the Glovo app.</p>
                    <div className='flex justify-center mt-[29px] gap-[10px]'>
                        <img src={apple} alt="Apple Store" />
                        <img src={google} alt="Google Play Store" />
                    </div>
                </div>
                <div className='flex justify-center mt-4 sm:mt-0'>
                    <img className='w-[300px] sm:w-[500px]' src={foodImage} alt="Food Image" />
                </div>
            </div>
        </div>
    )
}

export default AnotherPage
