const removeFromArray = function(array, ...args) {

        let difference = array.filter(x => !args.includes(x))
        return difference;
    };



removeFromArray([1,2,3,4], 3)
removeFromArray([1,2,3,4], 3, 2)
removeFromArray([1,2,2,3,4], 2)
removeFromArray([1,2,3,4], 7, 'tacos')
removeFromArray([1,2,3,4], 2, 7)
removeFromArray([1,2,3,4], 1,2,3,4)
removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3)
removeFromArray([1,2,3], "1", 3)
// Do not edit below this line
module.exports = removeFromArray;
