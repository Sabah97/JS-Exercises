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


   //Task 5

   var cart = [ 
    {
        name: 'Shoes',
        price: 560,
        quantity: 4
    },
    {
        name: 'Regular Tees',
        price: 455.50,
        quantity: 6
    },
    {
        name: 'Socks',
        price: 65.99,
        quantity: 2
    }];
function addSomething(newItem)
{
cart.push(newItem)
}
var newItem={
  name: 'shirts',
        price: 70.99,
        quantity: 1
}
addSomething(newItem)
console.log(cart)

function sortByname(namekey)
{
  
  cart.sort(function(a,b){
    return a[namekey] - b[namekey];
  });

}
sortByname('quantity');
console.log(cart);



//Not Working

function findByName(name){
var name=cart.find(cart => cart.name === 'Socks');
}
console.log(name);



function totalCost(){
  var sum=0;
  for(var i=0;i<cart.length;i++){
    sum+=cart[i]['price'];
  }
  return sum;
}
console.log(totalCost());





