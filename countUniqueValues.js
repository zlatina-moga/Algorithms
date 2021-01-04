function countUniques(arr){
    let uniquesArr = [];
    if (arr.length > 0){
        uniquesArr.push(arr[0])
    }
    for (let i = 0; i < arr.length; i++){
        if (!uniquesArr.includes(arr[i])){
            uniquesArr.push(arr[i])
        }
    }
    return (uniquesArr.length)
}
//countUniques([1, 1, 1, 1, 1, 2])
//countUniques([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniques([-2, -1, -1, 0, 1])
//countUniques([])