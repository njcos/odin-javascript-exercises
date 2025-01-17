const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {

    const array = people
    const age = array.map(item => {
        const currentYear = new Date().getFullYear()
            if(item.yearOfDeath === undefined){
                 return currentYear - item.yearOfBirth
                }else {
                 return item.yearOfDeath - item.yearOfBirth
                }

                
        })

        function found(arr) {
            max = 0; 
            maxIndex = 0; 
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] > max ) {
                    max = arr[i]
                    maxIndex = [i]
                }
            }
            return maxIndex;
        }


        return(array[found(age)])
};


findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
