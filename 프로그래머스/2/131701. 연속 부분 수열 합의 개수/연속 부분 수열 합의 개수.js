function solution(elements) {
    const set = new Set();
    for(let i=1;i<=elements.length;i++){
        const arr = elements.concat(elements.slice(0,i));
        for(let k=0;k<arr.length;k++){
            set.add(arr.slice(k,k+i).reduce((a,b) => a+b));
        }
    }
    return set.size
}