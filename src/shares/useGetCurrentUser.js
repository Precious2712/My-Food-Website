import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useGetCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState();
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const getUser = async () => {
        if (!token) {
            navigate("/login")
        }

        try {
            const res = await axios.get('http://localhost:2000/api/v2/currentUser',
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            )
            // console.log('user:', res);
            setCurrentUser(res?.data)
        } catch (error) {
            // console.log(error);

            if (error?.response?.data == 'Your token expire pls login') {
                toast({
                    title: 'An error occured',
                    description: 'Your token expires pls login'
                });

                navigate('/login');
                alert('token expired')
            }
        }
    };

    function handleLogout() {
        localStorage.removeItem('token');
        setCurrentUser(null);
        navigate('/login');
    }

    useEffect(() => {
        getUser()
    }, []);

    return {
        currentUser,
        handleLogout
    }

};