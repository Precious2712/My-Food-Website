import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useGetSingleFood } from "./hook/useGetSingleFood";
import { useGetUserCart } from "@/userCart/hook/useGetUserCart";

const SnackFoods = () => {
    const { items } = useGetUserCart();
    // console.log('page:', items?.result[0]?.items?.length);

    const { handleSelectSingleId } = useGetSingleFood();
    const location = useLocation();
    const response = location?.state?.res

    return (
        <div className="">
            {/* <SecondNav /> */}
            <div className="">
                <Link to={'/cart'}>
                    <div className="fixed top-0 left-0 z-50 ml-5 flex items-center justify-center w-12 h-12 bg-gray-00 text-white rounded-full shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 w-6 bg-red-500 text-white text-xs rounded-full">{items?.result[0]?.items?.length}</span>
                    </div>
                </Link>
            </div>

            <div className="bg-gray-100 min-h-screen py-3 px-12 dark:bg-slate-900">
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {
                            response?.map((el, i) => {
                                return (
                                    <div key={i} className="grid grid-rows-12 relative w-full bg-white rounded-xl shadow-lg overflow-hidden h-[430px] dark:bg-gray-950">
                                        <div className="row-span-6 h-full">
                                            <img className="w-full h-full object-cover" src={el?.imageUrl} alt={el.name} />

                                        </div>
                                        <div className="p-4 row-span-3  self-start">
                                            <h2 className="text-xl font-semibold dark:text-slate-100">{el?.name}</h2>
                                            <p className="text-gray-600 text-sm font-medium mt-2 dark:text-slate-400">{el?.description}</p>
                                            <p className="absolute top-3 start-3 bg-slate-900 font-medium px-2 py-1 rounded-full text-gray-200 text-xs mt-2">#{el?.price}</p>
                                        </div>
                                        <div className="p-4 row-span-3 self-end">
                                            <Button onClick={() => handleSelectSingleId(el?._id)} className="w-full text-white bg-indigo-600 hover:bg-indigo-700 mt-3 dark:text-white dark:bg-indigo-600 dark:hover:bg-blue-500">View Details</Button>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SnackFoods