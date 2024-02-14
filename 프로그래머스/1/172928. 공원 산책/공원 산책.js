function solution(park, routes) {
    const PARK = park.map(x => x.split(''))
    let w = PARK[0].length
    let h = PARK.length
    let now = [0,0] // 로봇 강아지 현재 위치
    
    // 로봇 강아지, 장애물 위치 파악
    PARK.forEach((row, index) => {
        row.forEach((item, idx) => {
            if(item === 'S'){
                now[0] = index
                now[1] = idx
            }
        })
    })
    
    // 명령 실행
    routes.forEach((route) => {
        const [direction, cnt] = route.split(' ')
        const goal = JSON.parse(JSON.stringify(now))
        let go = true
        for(let i=0;i<parseInt(cnt);i++){
            switch (direction){
                case "E":
                    goal[1]++
                    break;
                case "W":
                    goal[1]--
                    break;
                case "N":
                    goal[0]-- 
                    break;
                case "S":
                    goal[0]++ 
                    break;
            }
            
            if(goal[0] < 0 || goal[0] >= h || goal[1] < 0 || goal[1] >= w || park[goal[0]][goal[1]] === 'X'){
                go = false;
                break;
            }
        }
        if(go){
            now[0] = goal[0]
            now[1] = goal[1]
        }
	})
    return now
}