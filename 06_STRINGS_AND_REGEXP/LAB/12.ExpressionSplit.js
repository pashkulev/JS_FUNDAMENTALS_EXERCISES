function expressionSplit(expression) {
    let regex = /[().,;\s]+/g;
    let result = expression.split(regex);
    result.forEach(e => console.log(e))
}

function test() {
    let towns =
        "Sofia, Varna,Pleven,  Veliko Tarnovo;   Paris – London--Viena\n\n Пловдив|Каспичан";
    console.log(towns.split(/\s*[.,|;\n\t–-]+\s*/).join('\n'));

}

expressionSplit('let sum = 4 * 4,b = "wow";');
// test();