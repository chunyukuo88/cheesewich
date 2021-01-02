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

export const getContent = (props) => {
    console.log(props.orders[0]);
    return props.loading
        ? <Spinner/>
        : buildOrdersContent(props.orders);
};

const buildOrdersContent = ordersObject => {
    return (
        ordersObject.map(({ingredients, price}, key) => (
        <Order key={key}
               ingredients={ingredients}
               price={price.toFixed(2)}/>
        ))
    );
}

