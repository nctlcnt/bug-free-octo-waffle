export function getMyPosition(mapping, heights, myIndex, colNum) {
  let myPosition = 0
  for (let i = myIndex - colNum; i >= 0; i = i - colNum) {
    // if (!heights[mapping[i]]) return false
    // console.log(heights[mapping[i]])
    myPosition += heights[mapping[i]]
    if (myIndex > colNum - 1) {
      myPosition += 10
    }
  }
  return myPosition ? myPosition : 0
}
