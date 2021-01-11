import { updateObject } from "./utils";

test('It updates the object', ()=>{
   const oldObject= {
       a: 'a',
       b: 'b,'
   };
   const updatedProperties= {
       c: 'c'
   };
   const result = updateObject(oldObject, updatedProperties);
   const expectedResult = {
       a: 'a',
       b: 'b,',
       c: 'c'
   };
   expect(result).toEqual(expectedResult);
});
