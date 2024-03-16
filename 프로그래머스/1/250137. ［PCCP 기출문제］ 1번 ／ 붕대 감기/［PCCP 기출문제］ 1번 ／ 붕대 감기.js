function solution(bandage, health, attacks) {
    let timer = 0;
    let count = 0; // 연속 성공 카운트
    let curHealth = health; // 현재 체력
    
    const castingTime = bandage[0];
    const recovery = bandage[1];
    const addRecovery = bandage[2];
    
    const lastAttack = attacks[attacks.length - 1][0];
	let i = 0;
    
    while(timer !== lastAttack + 1){
        const attackTime = attacks[i][0];
        const damaged = attacks[i][1];
        
        if(timer === attackTime){ // 공격 당함
            curHealth -= damaged;
            count = 0;
            i++
        }else{
            if(health > curHealth) {
                curHealth += recovery;
                count++;
            }
            if(count === castingTime) {
                curHealth += addRecovery;
                count = 0;
            };
        }
        
        // 체력 확인
        if(curHealth > health){ 
            curHealth = health;
        }else if(curHealth <= 0){
            break;
        }
        timer++
    }
    return curHealth <= 0 ? -1 : curHealth;
}