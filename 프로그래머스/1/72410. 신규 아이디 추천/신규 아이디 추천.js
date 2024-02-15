function solution(new_id) {
    const secondRule = /[^a-z0-9\-_\.]/g
    for(let i=1;i<=7;i++){
        switch(i){
            case 1:
                new_id = new_id.toLowerCase()
                //console.log("#1 ",new_id)
                break;
            case 2:
                new_id = new_id.replace(secondRule, "")
                //console.log("#2 ",new_id)
                break;
            case 3:
                new_id = new_id.replace(/\.{2,}/g, '.');
                //console.log("#3 ",new_id)
                break;
            case 4:
                const arr = [...new_id]
                if(arr[0] === ".")
                    arr.splice(0,1)
                if(arr[arr.length - 1] === ".")
                    arr.splice(arr.length-1, 1)
                new_id = arr.join("")
                //console.log("#4 ",new_id)
                break;
            case 5:
                if(new_id.length === 0)
                    new_id = "a"
                //console.log("#5 ",new_id)
                break;
            case 6:
                if(new_id.length >= 16)
                    new_id = new_id.slice(0, 15)
                if([...new_id][new_id.length - 1] === ".")
                    new_id = new_id.slice(0, 14)
                //console.log("#6 ",new_id)
				break;
            case 7:
                if(new_id.length <= 2){
                    const arr = [...new_id]
                    while(arr.length < 3){
                        arr.push(arr[arr.length - 1])
                    }
                    new_id = arr.join("")
                }
                //console.log("#7 ",new_id)
                break;
        }
    }
    return new_id
}