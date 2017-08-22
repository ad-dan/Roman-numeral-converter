const radix = 10;
$(document).ready(function () {
    $('#head').addClass('animated rotateIn');
    $('#data').addClass('animated rotateIn');
    $('#convert').addClass('animated rotateIn');
    $('#convert').on('click', function(){
            let number = $('#data').val() || 0;
            let roman_num = convertToRoman(Number.parseInt(number));
            $('#result').text(roman_num);
    });
});
const romans = {
    1: 'I',
    5: 'V', 
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    5000: 'D',
    10000: 'C'
};

function convertToRoman(num) {
    let roman_values = [];
    let digits = String(num).split('').reverse();
    digits.forEach(function (digit, place) {
        let value = digit * Math.pow(radix, place);
        let small_roman = Math.pow(radix, place);
        let mid_roman = 5 * small_roman;
        let large_roman = small_roman * radix;
        let roman_result = '';
        if(digit<4){
            for(let i = 0;i<digit;i++){
                roman_result += romans[small_roman];
            }
        }else if(digit == 4){
            roman_result = romans[small_roman] + romans[mid_roman];
        }
        else if(digit<9){
            roman_result = romans[mid_roman];
            digit %= 5;
            for(let i=0;i<digit;i++){
                roman_result += romans[small_roman];
            }
        }
        else if(digit == 9){
            roman_result = romans[small_roman] + romans[large_roman];
        }
        roman_values.push(roman_result);
    });
    return roman_values.reverse().join('');
}
