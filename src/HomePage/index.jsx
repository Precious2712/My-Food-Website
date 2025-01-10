import harmburger from '/harmburger.mp4'
import shamawa from '/shawarma video.mp4'
import banner from '/foodbanner.mp4'
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WelcomePage = () => {
    return (
        <div className="h-screen m-0">
            <div className="relative h-full w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                >
                    <source src={banner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                    <div className="text-center p-6">
                        <h1 className="text-4xl font-bold">Hello World</h1>

                        <Link to="/signup" className="inline-flex items-center px-4 py-2 mt-4 text-lg font-semibold text-white bg-green-600 rounded hover:bg-blue-700">
                            Signup
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WelcomePage