
let calc = ""
function calculation(numOp){
   if (numOp ===''){
    calc ='';
    document.querySelector('.Result')
     .innerHTML= '';
     return;
  }
  calc += numOp;
    document.querySelector('.Result')
     .innerHTML= calc;

 
}
