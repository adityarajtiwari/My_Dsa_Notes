function stockSpan(n, arr) {
  let answerarr=[];
  let stack=[];
  for(let i=0; i<arr.length ;i++){
      if(stack.length==0){
          // answerarr.push(-1)
      }
      // if stack size is not zero and top of stack is greater than arr[i]
      else if(stack.length>0 && stack[stack.length-1][0]>arr[i]){
          {
              answerarr.push(stack[stack.length-1][1])
          }
      }
      
      else if(stack.length>0 && stack[stack.length-1][0]<=arr[i]){
      // pop until stack size is not zero and top of stack is greater than arr[i]
      // as soon as arr[i] is smaller loop will break
          while(stack.length>0 && stack[stack.length-1][0]<=arr[i]){
              stack.pop()
          }
      // if stack size is zero then push 1
          if(stack.length==0){
              // answerarr.push(-1)
          }
      // if stack size is not zero then push top of stack
          else{
              answerarr.push(stack[stack.length-1][1])
          }
      }
      // push arr[i] in stack
      console.log(stack)
      stack.push([arr[i],i])
  }
  return answerarr
}
// Output:         {1,  1,  1,  2,  1,  4,  6}
console.log(stockSpan(7, [100, 80, 60, 70, 60, 75, 85]))