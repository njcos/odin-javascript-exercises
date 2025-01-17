const fibonacci = function(number) {
    let n1 = 0;
    let n2 = 1;
    let next; 

    if(parseInt(number) >= 0){
        for(let i = 1; i <= number; i++) {
            next = n1 + n2;
            n1 = n2;
            n2 = next   
        }
        return n1
    } else {
        return "OOPS"
    }
};



// Do not edit below this line
module.exports = fibonacci;
