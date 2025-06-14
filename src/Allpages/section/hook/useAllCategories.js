import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseAllCategories = () => {
    const [response, setResponse] = useState()
    const Navigate = useNavigate()
    const handleGetAllCategories = async () => {
        try {
            const res = await axios.get('https://food-webbackened.onrender.com/allCategories')
            // console.log(res);
            setResponse(res)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = async (images) => {
        Navigate('/africa-food', { state: { res: images } })
    }

    useEffect(() => {
        handleGetAllCategories()
    }, [])


    return {
        response,
        handleGetAllCategories,
        handleClick
    }
}