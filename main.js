let res = document.querySelector('.result');
const nums = document.querySelectorAll('.nums .num');
let a = document.getElementById('a').value;







nums.forEach(function(e){
    e.addEventListener('click' , function(){  
        if(e.value === a){
            if(res.innerHTML == ''){
                res.innerHTML = ''
            }
            else{
                res.innerHTML = eval(res.innerHTML)
            }
        }
        else if(e.value == 'sin'){ 
            res.innerHTML += 'sin '
            nums.forEach(function(r){
                r.addEventListener('click' , function(s){
                    eval(Number(res.innerHTML += ' = ' + eval(Math.sign(r.value))));
                })
            })
          
        }
        else if(e.value == 'c'){
            res.innerHTML = ' '
        }
        else if(e.value == 'D'){
            res.innerHTML = res.innerHTML.slice(0 , - 1)
        }
       else{
        res.innerHTML += (e.value)
       }
    })
})



// if(res.value == undefined){
//     res.style.opacity = 0.5
// }
// else{
//     res.style.opacity = 1
// }




