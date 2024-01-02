function solution(id_list, report, k) {
    const set = new Set(report);
    const reportedUserArr = [];
    const finalReportedUsers = [];
    const reportedUsers = [];
    const result = [];
    for(let i = 0; i < id_list.length; i++){
        finalReportedUsers[i] = 0;
    }
    for(let i = 0; i < id_list.length; i++){
        result[i] = 0;
    }
    for(let i of set.values()){
    	const reportArr = i.split(' ');
        reportedUserArr.push(reportArr[1]);
    }
    for(let i=0; i < id_list.length; i++){
        reportedUserArr.forEach(user => {
            if(user === id_list[i])
                finalReportedUsers[i]++;
        })
    }
    for(let i=0;i<id_list.length;i++){
        if(finalReportedUsers[i] >= k){
            reportedUsers.push(id_list[i]);
        }
    }
    for(let i of set.values()){
        const reportArr = i.split(' ');
        for(let k of reportedUsers){
            if(k === reportArr[1]){
                id_list.forEach((id,idx) => id === reportArr[0] ? result[idx]++ : null);
            }
        }
    }
	return result;
}