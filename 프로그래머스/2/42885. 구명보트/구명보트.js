function solution(people, limit) {
    people.sort((a,b) => b-a)
	let count = 0;
    let first = 0;
    let last = people.length - 1;
    
    while(first<last){
        if(people[first] + people[last] <= limit){
            first++;
            last--;
        }else{
            first++;
        }
        count++;
    }
    
    if(first === last) count++;
    return count;
}