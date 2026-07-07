const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());      //agar sirf yshi krte toh jsb psgr khults uss moment ka time and date de deta ,
  clock.innerHTML = date.toLocaleTimeString();      //so we use function that will reload in each sec at the same page
}, 1000);   //1000 means ki ye har 1 sec pe reload hota rahega 

