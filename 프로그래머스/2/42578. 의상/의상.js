function solution(clothes) {
    const clothesMap = {}
    let answer = 1
    // 의상 종류별로 개수를 저장
    clothes.forEach(arr => {
        const [type, name] = arr
        if(clothesMap.hasOwnProperty(name)){
            clothesMap[name]++
        }else{
            clothesMap[name] = 1
        }
    })

    // 조합 구하기
    for(const key in clothesMap){
        answer *= (clothesMap[key] + 1)
    }
    
    return answer - 1
}