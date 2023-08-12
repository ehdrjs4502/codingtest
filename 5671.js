const fs = require('fs');
const input = fs.readFileSync("./input/5671.txt").toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
    let result = 0
    // N, M 저장
    let [N, M] = input[i].split(' ')
    N = Number(N)
    M = Number(M)

    // 반복문으로 j를 배열로 바꾼 후 j 배열에서 중복을 제거한 배열(set)과 길이 비교해서 같으면 result++ 
    for(let j = N; j <= M; j++) {
        const numArr = String(j).split('')
        const set = [...new Set(numArr)]
        numArr.length === set.length && result++
    }

    //정답 출력
    console.log(result)
}