describe('Thermostat', function () {

    let thermostat;
    beforeEach(function () {
        thermostat = new Thermostat();
    })

    describe('businesslogic', function() {
        it('starting temperature is 20', function () {
            expect(thermostat.temp).toEqual(20);
        });
        it('temperature down', function () {
            thermostat.down(10)
            expect(thermostat.temp).toEqual(10);
        });
        it('temperature up with powersaver', function () {
            thermostat.up(7)
            expect(thermostat.temp).toEqual(25);
        });
        it('temperature up without powersaver', function () {
            thermostat.power()
            thermostat.up(17)
            expect(thermostat.temp).toEqual(32);
        });
        it('minimum', function () {
            thermostat.down(20)
            expect(thermostat.temp).toEqual(10);
        });
        it('reset', function () {
            thermostat.reset()
            expect(thermostat.temp).toEqual(20);
        });
        it('gives usage', function () {
            thermostat.down(10)
            thermostat.checkUsage()
            expect(thermostat.usage).toEqual('Low');
        });
    });
});
