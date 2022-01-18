const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    let total = 0;
    if(start<end) {
        for(let i = start; i <=end; i++) {
            total += i;
          }
    } else {
        for(let i = start; i >=end; i--) {
            total += i;
          }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
