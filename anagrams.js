function anagrams(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};

    for (let letter of str1){
        counter1[letter] = (counter1[letter] || 0) + 1;
    }

    for (let letter of str2){
        counter2[letter] = (counter2[letter] || 0) + 1;
    }

    for (let key in counter1){
        if (counter1[key] !== counter2[key]){
            return false;
        }
    }
    return true
}

