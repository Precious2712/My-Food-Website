
import { useLocation } from "react-router-dom";
import { useCreateUserCart } from "./hook/useCreateUserCart";

const AboutFoodDetails = () => {
    const location = useLocation()
    const response = location?.state?.response

    const { hanleAddToCart } = useCreateUserCart()

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">

                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={response?.data?.data?.imageUrl} alt="Product Image" />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button onClick={() => hanleAddToCart(response?.data?.data._id)} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{response?.data?.data?.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {response?.data?.data?.description}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300">    #{response?.data?.data?.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutFoodDetails;