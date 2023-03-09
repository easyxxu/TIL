function solution(seoul) {
    // return `김서방은 ${seoul.indexOf('Kim')}에 있다`
    return `김서방은 ${seoul.findIndex(x => x ==='Kim')}에 있다`
}