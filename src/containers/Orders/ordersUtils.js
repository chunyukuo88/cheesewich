import React from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';



export const buildFetchedOrders = (serverResponseObject) => {
    const fetchedOrders = [];
    for(const key in serverResponseObject.data){
        fetchedOrders.push({
            ...serverResponseObject.data[key],
            id: key
        });
    };
    return fetchedOrders;
}

export const getContent = ({ orders, loading }) => {
    return loading
        ? <Spinner/>
        : buildOrdersContent(orders);
};

const buildOrdersContent = ordersObject => (
    ordersObject.map(({ingredients, price}, key) => (
    <Order key={key}
           ingredients={ingredients}
           price={price}/>
    ))
);
