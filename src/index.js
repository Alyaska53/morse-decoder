const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    
    for (let i = 0; i < expr.length; i += 2) {
        if (i % 10 === 0) {
            arr.push(' ');
        }

        if (expr.substr(i, 2) === '10') {
            arr.push('.');
        } else if (expr.substr(i, 2) === '11') {
            arr.push('-');
        }
    }

    return arr.join('')
              .trim()
              .split(' ')
              .map(element => (element) ? MORSE_TABLE[element] : ' ')
              .join('');
}

module.exports = {
    decode
}