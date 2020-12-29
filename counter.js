function solve(str){
    let letters = {};
    let text = str.split('');
    for (let i = 0; i < text.length; i++){
        if (text[i]!== ' '){
            if (!letters.hasOwnProperty(text[i])){
                letters[text[i]] = 1
            } else {
                letters[text[i]] += 1
            }
        }
    }
    console.log(letters)
}

//solve('aaaa')
solve('hello there')
