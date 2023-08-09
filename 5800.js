const fs = require('fs');
const input = fs.readFileSync("./input/5800.txt").toString().trim().split("\n");

// 성적 내림차순으로 정렬했을 때 가장 큰 인접한 점수 차이 구하는 함수
function gap(arr) {
    arr.sort((a,b) => {
        return b - a
    })
    let gapResult = []
    for(let i = 1; i < arr.length; i++) {
        gapResult.push(arr[i-1] - arr[i])
    }
    
    return Math.max(...gapResult)
}

// 반 개수
const cnt = input.shift()

//  가장 높은 점수, 낮은 점수, 성적을 내림차순으로 정렬했을 때 가장 큰 인접한 점수 차이 출력
for(let i = 0; i < cnt; i++) {
    console.log(`Class ${i+1}`)
    let arr = input[i].split(' ')
    arr.shift()
    const max= Math.max(...arr)
    const min= Math.min(...arr)
    console.log(`Max ${max}, Min ${min}, Largest gap ${gap(arr)}`)
}