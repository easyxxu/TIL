function solution(spell, dic) {
    let dictionary = dic.map(x => x.split('').sort().join(''));
    let spellSort = spell.sort().join('');
    return dictionary.filter(x => x === spellSort).length > 0 ? 1 : 2
}