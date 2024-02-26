function solution(arr1, arr2) {
    const aLen = arr1.length; 
    const bLen = arr2.length;
    const cLen = arr2[0].length;
    const result = Array.from({ length: aLen }, () => new Array(cLen));
    
    for(let i = 0; i < aLen; i++) {
        for(let j = 0; j < cLen; j++) {
            let sum = 0;
            for(let k = 0; k < bLen; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
