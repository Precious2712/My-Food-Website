import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetUserCart = () => {
    const [items, setItems] = useState();

    const individualCart = async () => {
        try {
            const getCustomerCart = await axios.get('http://localhost:2000/api/v4/getUserCart',
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    }
                }
            );
            setItems(getCustomerCart?.data)
            console.log('getCustomerCart', getCustomerCart?.data);
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
            const handleDeleteItem = await axios.delete(`http://localhost:2000/api/v4/deleteUserCart/${id}`,
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