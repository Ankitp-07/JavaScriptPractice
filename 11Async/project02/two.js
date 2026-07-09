const insert = document.getElementById('insert')
window.addEventListener('keydown',(e) => { //poori window pe eventlisten karna hai . keydown event 
    //keydown : ek keyboard event hai jo key dabate hi turant fire ho jata hai.
    insert.innerHTML=`                      
    <div class='color'>
     <table>
  <tr>
    <th>key</th>       
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' ' ? 'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

    </div>`;
})   ;


//here table under div is due to ki agar hamhe heading bhi deni ho table ki toh kaisedete 

//div ko hum wrapper/container bolte hain. Uska kaam hota hai:
//                          Related elements ko group karna.
                            //CSS apply karna.
                            //JavaScript se poore group ko access karna.
//Isliye React, Angular, Vue aur normal HTML sab jagah tum bahut baar dekhoge:



//diff b/w getElementbyId and querySelector

//getElementById() : sirf ID se element select karta hai aur fast hota hai, jabki 
// querySelector()  :kisi bhi CSS selector se element select kar sakta hai aur pehla matching element return karta hai.

// dono ka main kaam same hai — DOM se element ko select (dhoondna) aur uske saath kaam karna.
            //Difference sirf kaise dhoondte hain usme hai.