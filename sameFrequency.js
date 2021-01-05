function sameFrequency(num1, num2){
    let first = num1.toString()
    let second = num2.toString()
    if (first.length !== second.length){
        return false;
    }

    let lookup = {};

    for (let i = 0; i < first.length; i++){
        let item = first[i];
        lookup[item] ? lookup[item] += 1 : lookup[item] = 1
    }

    for (let i = 0; i < second.length; i++){
        let item = second[i];
        if (!lookup[item]){
            return false;
        } else {
            lookup[item] -= 1
        }
    }
    return true
}

//sameFrequency(182, 281)
//sameFrequency(34, 14)
//sameFrequency(3589578, 5879385)
sameFrequency(22, 222)