module.exports = function reverse (n) {
    
        let result;
        result = [...`${Math.abs(n)}`].reverse().join('');
    
    
        return result;
    
}
