import React from 'react';
import Order from '../../components/Order/Order';

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

export const getContent = ({ orders }) => {
    const result = orders.map(({ingredients, price}, key) => (
        <Order key={key}
               ingredients={ingredients}
               price={price}/>
    ));
    return result;
}