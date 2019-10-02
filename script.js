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


    // task 3

    function validEmail(email){
      var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     return regex.test(email);

    }
    console.log(validEmail("cffhdf"));
