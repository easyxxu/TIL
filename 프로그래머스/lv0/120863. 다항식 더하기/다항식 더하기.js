function solution(polynomial) {
    const polyArr = polynomial.split(" + ");
    
    let xNum = 0;//x끼리
    let num = 0;//상수끼리
    
    polyArr.forEach((item) => {
        //x끼리 연산
        if(item.includes("x")){
            const xArr = item.split("x");
            console.log(xArr)
            if(xArr[0] === ""){
                xNum += 1;
            }
            //1x인 경우
            if(xArr[0] !== ""){
                xNum += Number(xArr[0]);
            }
        }
        //상수끼리 연산
        if(!item.includes("x")){
            num += Number(item);
        }
    })
    //xNum과 num이 0이 아닌 경우 => x항과 상수항이 둘 다 존재
    if(xNum !== 0 && num !== 0){
        if(xNum === 1){//x의 계수가 1인 경우
            return `x + ${num}`;        
        }
        
        return `${xNum}x + ${num}`;    
    }
    //xNum은 0이 아니면서 num은 0인 경우 => x항만 존재
    if(xNum !== 0 && num === 0){
        if(xNum === 1){//x의 계수가 1인 경우
            return "x";
        }
        
        return `${xNum}x`;
    }
    //상수항만 존재하는 경우
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
    //x항과 상수항이 존재하지 않는 경우
    if(xNum === 0 && num === 0){
        return "0";
    }
}