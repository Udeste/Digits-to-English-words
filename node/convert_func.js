'use strict';
/**
 * Convert function
 */
let convert = function (num) {
    let units = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forthy',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventhy',
        '80': 'eighty',
        '90': 'ninety'
    };
    let hundreds = {
        '100': 'hundred',
        '1000': 'thousand'
    };

    let result = [];

    /* HELPER FUNCTIONS */
    function getThousands(num) {
        if(num > 1000 || num < 0){
            result.push("You must convert a number between 0 and 1000");
            return;
        }
        if (num == 1000) {
            result.push(units[1]);
            result.push(hundreds[1000]);
        } else {
            getHundreds(num);
        }

    }
    function getHundreds(num) {
        if (num == 100){
            result.push(units[1]);
            result.push(hundreds[100]);
        }else{
            if (num > 100) {
                let decimals = (num % 100);
                let hundred_unit = (num - decimals) / 100;
                result.push(units[hundred_unit]);
                result.push(hundreds[100]);
                result.push('and');
                getUnits(decimals);
            } else {
                getUnits(num);
            }
        }
        
    }
    function getUnits(num) {
        if (num < 20) {
            result.push(units[num]);
        } else {
            let unit = (num % 10);
            let decimal = (num - unit);
            if(decimal >= 20 && unit != 0){
                let s = units[decimal] + '-' +units[unit];
                result.push(s);    
            }else{
                let s = units[decimal];
                result.push(s);
            }
        }
    }

    getThousands(num);
    return result.join(' ');
}
module.exports = convert;