function solution(want, number, discount) {
    let count = 0;
    const lastDay = discount.length - 9;

    for (let i = 0; i < lastDay; i++) {
        const slice = discount.slice(i, i + 10);
        const sliceCount = {};

        // slice 배열의 각 항목의 개수를 세기
        for (let item of slice) {
            sliceCount[item] = (sliceCount[item] || 0) + 1;
        }

        // want 배열과 비교
        let flag = true;
        for (let j = 0; j < want.length; j++) {
            if (sliceCount[want[j]] !== number[j]) {
                flag = false;
                break;
            }
        }

        if (flag) count += 1;
    }

    return count;
}
