// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const euros = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 127.9 yen", function(){

    const { fromEuroToYen } = require('./app.js')

    const euros = fromEuroToYen(127.9)

    const expected = 127.9 / 127.9;

    expect(fromEuroToYen(127.9)).toBe(1);

})


test("One euro should be .8 pound", function(){

    const { fromEuroToPound } = require('./app.js')

    const euros = fromEuroToPound(1)

    const expected = 2 * .8;

    expect(fromEuroToPound(2)).toBe(1.6);

})

test("One point two dollars should be 127.9 yen", function(){

    const {fromDollarToYen} = require('./app.js')

    const dollars = fromDollarToYen(1.2)

    const expected = (1.2/1.2) * 127.9;

    expect(fromDollarToYen(1.2)).toBe(127.9);

});