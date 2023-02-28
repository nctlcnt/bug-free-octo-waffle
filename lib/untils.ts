export function getMyPosition(mapping, heights, myIndex) {
  let myPosition = 0
  for (let i = myIndex - 3; i >= 0; i = i - 3) {
    // if (!heights[mapping[i]]) return false
    // console.log(heights[mapping[i]])
    myPosition += heights[mapping[i]]
    if (myIndex > 2) {
      myPosition += 10
    }
  }
  return myPosition ? myPosition : 0
}

export function allPositionFilled(mapping: string[], heights) {
  for (let i = 0; i < heights.length; i++) {
    if (!heights[mapping[i]]) return false
  }
  return true
}
