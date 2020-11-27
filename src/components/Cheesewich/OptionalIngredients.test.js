import React from 'react';
import * as OI from './OptionalIngredients';
import Ingredient from '../../components/Cheesewich/Ingredients/Ingredients.jsx';

describe('OptionalIngredients.js', ()=>{
    describe('_buildIngredients()', ()=>{
        describe('WHEN: Given a key (ingredient string) and an integer,', ()=>{
            test('THEN: It returns an instance of that Ingredient with a key', ()=>{
                const key = 'meat';
                const integer = 0;
                const result = OI._buildIngredients(key, integer);
                expect(result).toEqual(<Ingredient key={key + integer} type={key}/>);
            })
        });
    });
});