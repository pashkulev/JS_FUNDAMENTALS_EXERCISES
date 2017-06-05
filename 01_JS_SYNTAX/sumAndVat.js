function sumAndVat(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let vat = sum * 0.2;
    let sumAndVat = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + sumAndVat);
}

sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
