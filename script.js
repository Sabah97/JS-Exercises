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

    //Task 4

    var library = [ 
      {
          author: 'Bill Gates',
          title: 'The Road Ahead',
          readingStatus: true,
         updateStatus: function (read)  { this.readingStatus=read }
      },
      {
          author: 'Steve Jobs',
          title: 'Walter Isaacson',
          readingStatus: true,
          updateStatus: function (read)  { this.readingStatus=read }
      },
      {
          author: 'Suzanne Collins',
          title:  'Mockingjay: The Final Book of The Hunger Games', 
          readingStatus: false
      }];
      library[1].updateStatus(false)
      console.log("reading status", library[1].readingStatus)

      function readStatus(index){
        return library[index].readingStatus
      }
   console.log(readStatus(2))
