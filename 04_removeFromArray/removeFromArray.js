const removeFromArray = function(array, ...arg) {
    const slicedArray = [];

    array.forEach((element) => {
        if(!arg.includes(element)) {
            slicedArray.push(element);
        }
    });

    return slicedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
