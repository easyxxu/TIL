function solution(park, routes) {
    const PARK = park.map(x => x.split(''))
    const obstacle = []
    let w = PARK[0].length
    let h = PARK.length
    let now = [0,0] // 로봇 강아지 위치
    
    // 로봇 강아지, 장애물 위치 파악
    PARK.forEach((row, index) => {
        row.forEach((item, idx) => {
            if(item === 'S'){
                now[0] = index
                now[1] = idx
            }
            if(item === 'X'){
                obstacle.push([index,idx])
            }
        })
    })
    // 명령 실행
    routes.forEach((route) => {
        let {pass, goal} = passRoute(now, route)
        const go = cango(pass, obstacle, goal)
        if(go === true){
            now = JSON.parse(JSON.stringify(goal))
        }
    })
    
    return now
    
    function passRoute(now, route) {
        const arr = route.split(' ')
        const direction = arr[0]
        const cnt = parseInt(arr[1])
        const pass = []
        const goal = JSON.parse(JSON.stringify(now))
        switch (direction){
            case "E":
                goal[1] += cnt
                break;
            case "W":
                goal[1] -= cnt
                break;
            case "N":
                goal[0] -= cnt
                break;
            case "S":
                goal[0] += cnt
                break;
        }
        for(let i=0;i<cnt;i++){
            if(now[0] === goal[0]){
                pass.push([goal[0], Math.abs(goal[1] - i)])
            }else if(now[1] === goal[1]){
                pass.push([Math.abs(goal[0] - i), goal[1]])
            }
        }
        return {pass, goal}
    }

    function cango(pass, obstacle, goal){
        let go
        if(obstacle.length === 0) { // 장애물이 없는 경우
            go = true
            return go
        }else if(goal[0] < 0 || goal[0] >= h || goal[1] < 0 || goal[1] >= w) { // 공원밖으로 나가는 경우
            go = false
        }else {
            go = true;
        for(let i = 0; i < pass.length; i++){
            for(let k = 0; k < obstacle.length; k++){
                if(JSON.stringify(pass[i]) === JSON.stringify(obstacle[k])){
                    go = false;
                    return go;
                }
            }
        }
        }
        return go
    }
}