import { useState } from 'react';
import logo from '/ChickenRepublic_Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { useGetUserCart } from '@/userCart/hook/useGetUserCart';

const LandingPage = () => {

    const {items} = useGetUserCart();
    console.log('page:', items?.result[0]?.items?.length);
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    const headings = [
        {
            id: "1",
            name: " Collections",
            path: "/collections"
        },
        {
            id: "2",
            name: "Home",
            path: "/home"
        },
        {
            id: "3",
            name: "Cart",
            path: "/cart"
        },
        // {
        //     id: "3",
        //     name: "Table-meal",
        //     path: "/table-meal"
        // }
    ];

    const navbarStyle = {
        transition: 'background-color 0.3s ease',
        width: '100%',
        position: 'fixed',
        top: 0,
        borderBottom: '0px solid rgb(255, 0, 0)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        height: '10vh',
        zIndex: 50,
        backgroundColor: 'rgb(17,24,39)'
    };

    return (
        <div>
            <header style={navbarStyle}>
                <nav className='w-full flex items-center justify-between'>
                    <div className={``}>

                        <Link to={'/cart'}>
                            <div className="fixed top-0 left-0 z-50 ml-5 flex items-center justify-center w-12 h-12 bg-gray-00 text-white rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 w-6 bg-red-500 text-white text-xs rounded-full">{items?.result[0]?.items?.length}</span>
                            </div>
                        </Link>

                    </div>

                    <div className='mr-5'>
                        <ul className={`flex-col sm:flex-row  gap-5 fixed sm:static top-14 left-0 w-full sm:w-auto bg-black sm:bg-transparent p-5 sm:p-0 ${isVisible ? 'flex' : 'hidden'} sm:flex`}>
                            {headings.map((item) => (
                                <li key={item.id} className="text-white mt-2 sm:mt-0">
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "text-red-400"
                                                : isActive
                                                    ? "text-blue-600"
                                                    : ""
                                        }
                                        to={item.path}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="sm:hidden text-white focus:outline-none mr-4"
                    >
                        ☰
                    </button>
                </nav>
            </header>

            <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden mt-0">
                <div class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="Background Image" class="object-cover object-center w-full h-full" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 class="text-3xl font-bold leading-tight mb-4">Welcome to More Awesome Food Store</h1>
                    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                    <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <span className="text-blue-800">Welcome</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default LandingPage