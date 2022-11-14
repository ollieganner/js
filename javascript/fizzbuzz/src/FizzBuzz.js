// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

class Fizzbuzz {
    go(number) {
        if (number % 3 == 0 && number % 5 == 0)
            return 'fizzbuzz';
        else if (number % 3 == 0)
            return 'fizz';
        else if (number % 5 == 0)
            return 'buzz';
        else
            return number;
    }
}