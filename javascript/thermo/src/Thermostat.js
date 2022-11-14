// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

class Thermostat {
    constructor() {
        this.temp = 20;
        this.powersaver = true;
        this.usage = 'Medium';
    }
    reset() {
        this.temp = 20
    }

    power() {
        if (this.powersaver) {
            this.powersaver = false;
        }
        else {
            this.powersaver = true;
        }
    }

    up(num) {
        if (this.powersaver) {
            if (this.temp + num > 25) {
                this.temp = 25
            }
            else {
                this.temp += num
            }
        }
        else {
            if (this.temp + num > 32) {
                this.temp = 32
            }
            else {
                this.temp += num
            }
        }
    }
    checkUsage() {
        if (this.temp < 18) {
            this.usage = 'Low';
        }
        else if (this.temp <= 25) {
            this.usage = 'Medium';
        }
        else {
            this.usage = 'High';
        }
    }
    down(num) {
        if (this.temp - num < 10) {
            this.temp = 10;
        }
        else {
            this.temp -= num;
        }
    }

    
}