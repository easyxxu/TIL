function solution(id_list, report, k) {
    const set = new Set(report);
    const reportedUsersID = [];
    const reportedUsersCnt = new Array(id_list.length).fill(0);
    const finalReportedUsers = [];
    const result = new Array(id_list.length).fill(0);
    
    // 중복을 없앤 신고당한 유저의 ID List
    for(let i of set.values()){
    	const reportArr = i.split(' ');
        reportedUsersID.push(reportArr[1]);
    }
	// 유저가 신고받은 횟수
    for(let i=0; i < id_list.length; i++){
        reportedUsersID.forEach(user => {
            if(user === id_list[i])
                reportedUsersCnt[i]++;
        })
    }
    // 최종적으로, 신고받은 횟수 >= k 인 유저 ID List
    for(let i=0;i<id_list.length;i++){
        if(reportedUsersCnt[i] >= k){
            finalReportedUsers.push(id_list[i]);
        }
    }
    // 유저 처리 결과 메일 받은 횟수
    for(let i of set.values()){
        const reportArr = i.split(' ');
        for(let k of finalReportedUsers){
            if(k === reportArr[1]){
                id_list.forEach((id,idx) => id === reportArr[0] ? result[idx]++ : null);
            }
        }
    }
	return result;
}