import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { UseAllCategories } from './hook/useAllCategories'


const SectionPage = () => {
    const { response, handleClick } = UseAllCategories()
    return (
        <div className='mt-20'>
            <h1 className='ml-6 text-1xl font-bold text-center'>Stores you might likes</h1>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-auto w-11/12 sm:w-full p-4'>
                {
                    response?.data?.data?.map((item, i) => {
                        // console.log(item?.name); 
                        return (
                            <div key={i} className="text-center" onClick={() => handleClick(item?.images)}>
                                <img className='rounded' src={item?.mainImage} alt={item?.name} />
                                <h1 className='lg:text-1xl sm:text-black-800 font-bold'>{item?.name}</h1>
                            </div>  
                        );
                    })
                }
                {/* Additional links can be added here if needed */}
            </div>

            <div className='flex justify-center'>
                <Link to={'/collections'}>
                    <Button>Click to see more stores</Button>
                </Link>
            </div>
        </div>

    )
}

export default SectionPage