import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserCart = () => {
    const [items, setItems] = useState();

    const individualCart = async () => {
        try {
            const getCustomerCart = await axios.get('https://food-webbackened.onrender.com/getUserCart',
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    }
                }
            );
            setItems(getCustomerCart?.data)
            // console.log('getCustomerCart', getCustomerCart?.data);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        individualCart();
    }, []);

    const deleteCartProduct = async (id) => {
        alert(id);
        try {
            const handleDeleteItem = await axios.delete(`https://food-webbackened.onrender.com/deleteUserCart/${id}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                }
            )
            console.log('handle', handleDeleteItem);
            individualCart()
        } catch (error) {
            console.log(error);

        }
    };

    return {
        individualCart,
        items,
        deleteCartProduct
    }
};