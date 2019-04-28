// //câu 1:
let a,b;
function min(a,b){
   let message = (a>b) ? b: (a<b) ? a :  a||b;
   alert (message);
}//hàm kiểm tra bằng mutiple '?'
min(3,2);

function min2(a,b){
   if(a>b){
      alert(b);
   }
   else if(a<b){
      alert(a);
   }
   else{
      alert(a||b);
   }
}//hàm kiểm tra bằng if else
min2(3,5);

//câu 2:
let x,n
function pow(x,n){
   alert(x**n);
}
let input = prompt('Mời bạn nhập x: ',x);
let input2 = prompt('Mời bạn nhập n: ',n);
pow(input,input2);
