import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useGetSingleMealsId = () => {

    const Navigate = useNavigate()

    const FoodSelectId = async (id) => {
        // alert('Select')
        try {
            const getSelectedMealId = await axios.get(`https://food-webbackened.onrender.com/getAllFoodVendors/${id}`);
            console.log('data', getSelectedMealId);
            const colnedRes = JSON.parse(JSON.stringify(getSelectedMealId));
            Navigate('/meal-details', { state: { response: colnedRes } })
        } catch (error) {
            console.log('error: /', error);
            if (error?.message == 'Network Error') {
                alert('Network Error')
            }
        }
    }

    useEffect(() => {
        // FoodSelectId();
    }, [])

    return {
        FoodSelectId
    }
};