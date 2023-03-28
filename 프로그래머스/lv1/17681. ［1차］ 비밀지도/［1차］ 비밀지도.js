function solution(n, arr1, arr2) {
    //이진수로 변환->길이가 n 미만인 경우 앞에 0 붙이기
    let twoArr1 = arr1.map(x=>x.toString(2)).map(x => x.length < n ? x = '0'.repeat(n - x.length) + x : x).map(x=>x.split(''))
    let twoArr2 = arr2.map(x=>x.toString(2)).map(x => x.length < n ? x = '0'.repeat(n - x.length) + x : x).map(x=>x.split(''))
    let result = ''
    let resultArr = []
    for(let i = 0;i < n;i++){
        for(let k=0;k<n;k++){
            if(twoArr1[i][k] === '0' && twoArr2[i][k] === '0'){
                result += ' '
            }else{
                result += '#'
            }
        }
        resultArr.push(result)
        result = ''
    }
    return resultArr
}