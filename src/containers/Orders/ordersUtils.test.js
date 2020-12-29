import React from 'react';
import Order from '../../components/Order/Order';
import { buildFetchedOrders, getContent } from './ordersUtils';

describe('ordersUtils.js', ()=>{
    describe('getContent()', ()=>{
        describe('WHEN: Given a state object, ', ()=>{
            test('THEN: Return an array of Order components, ', ()=>{
                const state = {
                    orders: [
                        {
                            ingredients: {
                                ing1: 'foo',
                                ing2: 'bar',
                            },
                            price: 123
                        }
                    ],
                };
                const result = getContent(state);
                const expectedResult = [
                    <Order ingredients={state.orders[0].ingredients}
                           key="0"
                           price={123}/>
                    ];
                expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
            });
        });
    });
    describe('buildFetchedOrders()', ()=>{
        describe('WHEN: Given a serverResponseObject', ()=>{
            test('WHEN: Given a serverResponseObject', ()=>{
                const serverResponseObject = {
                    data: {
                        key: {
                            orderData: {},
                            price: 1234
                        },
                    },
                };
                const result = buildFetchedOrders(serverResponseObject);
                const expectedResult =   [
                    {
                        "id": "key",
                        "orderData": {},
                        "price": 1234
                    }
                ];
                expect(result).toEqual(expectedResult);
            });
        });
    });
});
