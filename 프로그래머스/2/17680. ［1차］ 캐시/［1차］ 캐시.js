function solution(cacheSize, cities) {
    const cache = []
    let time = 0
    if(cacheSize === 0) return cities.length * 5
    cities = cities.map(city => city.toLowerCase())
    
    cities.forEach(city => {
        if(cache.length === cacheSize){
            if(cache.includes(city)){
                const idx = cache.findIndex(e => e === city)
                cache.splice(idx, 1)
                cache.push(city)
                time++
            }else{
                cache.shift()
                cache.push(city)
                time += 5
            }
        }else{
            if(cache.includes(city)){
                const idx = cache.findIndex(e => e===city)
                cache.splice(idx, 1)
                cache.push(city)
                time++
            }else{
            	cache.push(city)
	            time += 5	    
            }
        }
    })
    return time
}