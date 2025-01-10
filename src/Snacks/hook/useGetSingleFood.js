import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useGetSingleFood = () => {
    const { id } = useParams();

    const Navigate = useNavigate()

    const handleSelectSingleId = async (id) => {
        // alert(id)
        try {
            const getSelectedFoodId = await axios.get(`http://localhost:2000/api/v3/getAllCategories/${id}`);
            // console.log('data', getSelectedFoodId);
            const colnedRes = JSON.parse(JSON.stringify(getSelectedFoodId));
            Navigate('/food-details', { state: { response: colnedRes } })
        } catch (error) {
            console.log('error: /', error);
        }
    }

    useEffect(() => {
        handleSelectSingleId();
    }, [])

    return {
        handleSelectSingleId,
    }
}