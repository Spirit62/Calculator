
let calc = ""
function calculation(numOp){
  calc += numOp;
  if (numOp !==''){
    return console.log(calc);
  }
  else{
    calc ='';
    return console.log("Cleared");
  }
}
