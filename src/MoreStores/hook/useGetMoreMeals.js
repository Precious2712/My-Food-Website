import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetMoreMeals = () => {
    const [meals, setMeal] = useState();
    const Navigate = useNavigate();
    const getAllStores = async () => {
        try {
            const response = await axios.get('http://localhost:2000/api/v1/getAllFoodDelivery');
            console.log('response', response?.data);
            setMeal(response?.data);
        } catch (error) {
            console.error('error', error);
        }
    };

    useEffect(() => {
        getAllStores();
    }, []);

    const handleDirectToFoods = async (id, picture) => {
        alert(id);
        Navigate('/table-meal', { state: { res: picture } });
    };

    return {
        meals,
        getAllStores,
        handleDirectToFoods
    };
};
