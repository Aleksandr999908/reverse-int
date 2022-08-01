module.exports = function reverse (n) {
    
        let number;
        number = [...`${Math.abs(n)}`].reverse().join('');
    
    
        return number;
    
}
