import FooterPage from '@/Allpages/footer';
import { useGetMoreMeals } from '../hook/useGetMoreMeals';

const MultipleMeals = () => {
    const { meals, handleDirectToFoods } = useGetMoreMeals();



    return (
        <>
            <div className="pb-10 pt-8">
                <h1 className="text-[18px] text-center text-white sm:text-2xl font-bold mb-5">Restaurants delivery in Ibadan</h1>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 m-auto w-11/12 sm:w-4/5 p-4'>
                    {
                        meals?.data.map((item, i) => (
                            <div onClick={() => handleDirectToFoods(item._id, item.picture)} className='relative z-10' key={i}>
                                <img className='w-[300px] sm:w-[450px] md:w-[470px] h-full m-auto' src={item.mainImage} alt="" />
                                <h1 className=' absolute bottom-0 left-0 w-full text-center text-[10px] sm:text-xl font-bold bg-black bg-opacity-50 text-white p-2 z-0 hover:bg-white hover:text-black transition-colors duration-300'>{item.name}</h1>
                            </div>
                        ))
                    }
                </div>


            </div>

            <FooterPage />
        </>
    )

};

export default MultipleMeals