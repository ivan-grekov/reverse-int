module.exports = function reverse (n) {
    let numberAbs = Math.abs(n);
    let arr1 = String(numberAbs).split('');
    let arr2 = arr1.reverse();
    let result = arr2.join('');
    return result; 
}
