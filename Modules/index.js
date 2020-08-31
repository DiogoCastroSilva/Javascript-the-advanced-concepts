// First way of using Module Pattern - without returning
// IIFE
var fightModule = (function () {
    var harry = 'Potter';
    var voldemort = 'He who must not be name';

    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? char1 : char2 + ' wins';
    }

    return {
        fight
    };
})();

// Module Revealing Pattern - returning functions or variables
console.log(fightModule.fight('Ron', 'Hagrid'));

// CommonJS & UMD -> Removed the global pollution that comea with Module Pattern IIFE
var module1 = require('module1');
var module2 = require('module2');

function fight() {}

module1.exports = {
    fight: fight
};


