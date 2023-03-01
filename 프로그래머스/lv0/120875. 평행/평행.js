function solution(dots) {
    const a = dots[0]
    const b = dots[1]
    const c = dots[2]
    const d = dots[3]
    
    // 직선 ab 기울기, 직선 cd 기울기
    const ab = Math.abs(b[1]-a[1]) / Math.abs(b[0]-a[0])
    const cd = Math.abs(c[1]-d[1]) / Math.abs(c[0]-d[0])
    
    // 직선 ac 기울기, 직선 bd 기울기
    const ac = Math.abs(a[1]-c[1]) / Math.abs(a[0]-c[0])
    const bd = Math.abs(b[1]-d[1]) / Math.abs(b[0]-d[0])
    
    // 직선 ad 기울기, 직선 bc 기울기
    const ad = Math.abs(a[1]-d[1]) / Math.abs(a[0]-d[0])
    const bc = Math.abs(b[1]-c[1]) / Math.abs(b[0]-c[0])
    
    //기울기가 같다면 평행
    // if(ab === cd || ac === bd || ad === bc) 
    //     return 1
    // else return 0
    return (ab === cd || ac === bd || ad === bc) ? 1 : 0
}