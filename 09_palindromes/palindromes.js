const palindromes = function (str) {
    let word = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const seperated = word.split('')
    const reversed = seperated.reverse();
    const joined = reversed.join('')
    console.log(word)
    console.log(joined)
    if(word === joined) {
        return true
    } else {
        return false
    }
};

palindromes('race car')

// Do not edit below this line
module.exports = palindromes;
