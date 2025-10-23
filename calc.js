function duplicateEncode(word) {
    let counts = {};
    let arr = word.toLowerCase().split("");

    for (let char of arr) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] > 1) {
            arr[i] = ')';
        } else {
            arr[i] = '(';
        }
    }

    return arr.join('');
}


