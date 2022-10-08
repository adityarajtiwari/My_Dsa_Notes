let heights=[6,2,5,4,5,1,6]
let smallestVectortoright = []
let rightStack = [];
psuedoEle = 7;
for (let i = heights.length - 1; i >= 0; i--) {
    let tempArr = [heights[i], i]
    // console.log(tempArr)
    if (rightStack.length == 0) {
        smallestVectortoright.push(psuedoEle)
    }
    else if (rightStack.length > 0 && rightStack[rightStack.length - 1][0] < heights[i]) {
        smallestVectortoright.push(rightStack[rightStack.length - 1][1])
    }
    else if (rightStack.length > 0 && rightStack[rightStack.length - 1][0] >= heights[i]) {
        // console.log(smallestVectortoright.reverse())
        // console.log(rightStack, i)
        while (rightStack.length > 0 && rightStack[rightStack.length - 1][0] >= heights[i]) {
            rightStack.pop();
        }
        // console.log(rightStack, i)
        if (rightStack.length == 0) {
            smallestVectortoright.push(psuedoEle)
        }
        else {
            smallestVectortoright.push(rightStack[rightStack.length - 1][1])
        }
    }
    rightStack.push(tempArr)
}
// smallestVectortoright=smallestVectortoright.reverse()

// console.log(smallestVectortoleft)
console.log(smallestVectortoright.reverse())