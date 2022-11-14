describe('FizzBuzz', function () {

    let fizzbuzz;
    beforeEach(function () {
        fizzbuzz = new Fizzbuzz();
    });

    describe('returns correct response', function () {
        it('divisible by 3', function () {
            expect(fizzbuzz.go(3)).toEqual('fizz');
        });
        it('divisible by 5', function () {
            expect(fizzbuzz.go(5)).toEqual('buzz');
        });
        it('divisible by 15', function () {
            expect(fizzbuzz.go(15)).toEqual('fizzbuzz');
        });
        it('not divisible', function () {
            expect(fizzbuzz.go(4)).toEqual(4);
        });
    });
});
