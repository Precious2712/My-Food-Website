import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetCurrentUser = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const validateUser = async () => {
        const token = localStorage.getItem('token')
        console.log(token);
        
        try {
            const checkUser = await axios.get('https://food-webbackened.onrender.com/currentUser', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(checkUser.data.data.userName);
            
            setUser(checkUser?.data);
        } catch (error) {
            console.log(error, 'message');
            if (error) {
                localStorage.removeItem('token');
                toast.error(`${error.message}`);
                navigate('/login');
            } 
        }
        console.log(user);
        
    }

    useEffect(()=>{
        validateUser();
    },[])

    return {
        user
    }
}