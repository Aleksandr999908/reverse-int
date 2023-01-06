module.exports = function reverse (n) {
       
       if (n < 0) return reverse(-n);
       
       let number = [...`${Math.abs(n)}`].reverse().join('');
       
          return number;
        
        
         
        
       
       
        
              
}

