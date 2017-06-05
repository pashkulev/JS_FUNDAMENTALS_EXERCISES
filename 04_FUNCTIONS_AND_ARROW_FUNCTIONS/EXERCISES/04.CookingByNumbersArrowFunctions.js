function executeOperations(array) {
    let number = Number(array[0]);

    let chop = () => number /= 2;
    let dice = () => number = Math.sqrt(number);
    let spice = () => number += 1;
    let bake = () => number *= 3;
    let fillet = () => number *= 0.8;

    for (let i = 1; i < array.length; i++) {
        let operation = array[i];
        switch (operation) {
            case 'chop': chop(); break;
            case 'dice': dice(); break;
            case 'spice': spice(); break;
            case 'bake': bake(); break;
            case 'fillet': fillet(); break;
        }

        console.log(number);
    }
}

executeOperations(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);