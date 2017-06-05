function sort(strArray) {
    strArray.sort((s1, s2) => {
            let result = s1.length - s2.length;
            if (result === 0) {
                s1 = s1.toLowerCase();
                s2 = s2.toLowerCase();
                if (s1 === s2) {
                    result = 0;
                } else if (s1 < s2) {
                    result = -1;
                } else {
                    result = 1;
                }
            }
            return result;
        });
    console.log(strArray.join('\n'));
}

// sort(['alpha', 'beta', 'gamma']);
// sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sort(['test', 'Deny', 'omen', 'Default']);