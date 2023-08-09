const numArr = [9,8,7,6,3,2,5,1,4]

console.log(numArr)
numArr.sort((a, b) => {
    console.log("a : ", a, "b : ", b, " / ",a - b)
    return(a-b)
    
})

console.log(numArr)