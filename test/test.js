//require testing modules
let mocha = require('mocha')
let expect = require('chai').expect
let { describe, it } = mocha
//let messenger = require('../jsfile')

// require the module that we are putting to the test.


// prove all the things
describe('Testing my knowledge of Testing', () => {
    it('Returns a string', () => {
        let myString = 'A string of text'

        expect(myString).to.be.a('string');
    })

    it('Returns an object', () => {
        let myObject = {color: 'Yellow'}

        expect(myObject).to.be.an('object');
    })

    it('Returns null', () => {
        let myNull = null

        expect(myNull).to.be.a('null');
    })
    
    it('Returns undefined', () => {
        let myUndefined = undefined
        
        expect(myUndefined).to.be.an('undefined');
    })

    it('Returns an empty array', () => {
        let myEmptyArray = []

        expect(myEmptyArray).to.be.an('array').that.is.empty;
    })

    it('Returns an array of 5', () => {
        let myFiveArray = [1,2,3,4,5]

        expect(myFiveArray).to.be.an('array').that.includes(5);
    })

    it('Returns something other than an array', () => {
        let notAnArray = 1
        
        expect(notAnArray).to.not.be.an('array')
    })

    it('Returns a model property', () => {
        let myModel = {model: 'Toyota'}

        expect(myModel).to.have.a.property('model');
    })

    it('Returns an object', () => {
        let myTesla = {make: 'tesla', model: 'cybertruck'}

        expect(myTesla).to.include({make: 'tesla', model: 'cybertruck'});
    })

})