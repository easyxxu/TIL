function solution(wallpaper) {
    let lux = [], luy = [], rdx = [], rdy= []; // 최소 x, y, 최대 x, y
    const array = wallpaper.map(i => i.split(''));

    array.forEach((item, index) => {
        item.forEach((i, idx) => {
            if(i === '#'){
                lux.push(index);
                luy.push(idx);
                rdx.push(index + 1);
                rdy.push(idx + 1);
            }
        })
    })
    return [Math.min(...lux), Math.min(...luy), Math.max(...rdx), Math.max(...rdy)]
}