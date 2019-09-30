/* JavaScript code here */
alert("HACKED!!!")
//Task 2
function arraySum(arr){
    let sum=0
  arr.forEach(x =>{
sum=sum+x
  })
  return (multiplier) => { 
      return sum*multiplier
}
}
    let sum=arraySum([1,2,3])
    console.log(sum(5))
