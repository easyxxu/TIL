function solution(progresses, speeds) {
	// 각 작업마다 며칠뒤에 가능한지 파악
    //앞>=뒤 라면 둘을 합친것을 리턴함
    //앞<뒤 라면 앞에거 먼저
    const dayArr = []
    const result = []
    for(let i=0;i<progresses.length;i++){
        dayArr.push(days(progresses[i], speeds[i]))
    }
    console.log("걸리는 시간: ",dayArr)
    let tmp = dayArr[0]
    let idx = 0
    result[0] = 1
    for(let i=1;i<dayArr.length;i++){
        console.log(`i=${i} tmp(${tmp}) : dayArr[i](${dayArr[i]})`)
        if(tmp >= dayArr[i]){
			result[idx]++
            //i++
            console.log(`tmp(${tmp})가 더 커! `)
        }else{
            ++idx
            result[idx] = 1
            tmp = dayArr[i]
            console.log(`다음게(${tmp}) 더 커! `)
        }
        console.log("#result ",result,"#i ",i)
        console.log("************************")
    }
    return result
}
function days(progress, speed){
    if((100-progress) % speed === 0){
        return (100-progress) / speed
    }else {
        return Math.floor((100-progress) / speed) + 1
    }
}