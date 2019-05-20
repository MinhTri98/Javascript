//câu 1:
// let a, b;
// function min(a, b) {
//    let message = (a > b) ? b: (a < b) ? a :  a||b;
//    alert (message);
// }//hàm kiểm tra bằng mutiple '?'
// min(3,2);

// function min2(a,b) {
//    if(a>b) {
//       alert(b);
//    }
//    else if(a<b) {
//       alert(a);
//    }
//    else {
//       alert(a||b);
//    }
// }//hàm kiểm tra bằng if else
// min2(3,5);

// //câu 2:
// let x,n;
// function pow(x,n) {
//    alert(x**n);
// }
// let input = prompt('Mời bạn nhập x: ',x);
// let input2 = prompt('Mời bạn nhập n: ',n);
// pow(input,input2);

//cau 1
// let ask = (question,yes,no) => {
//    if( confirm(question)) yes();
//    else no();
// }
// ask("Do you agree",() => alert("You agreed"), () => alert("You canceled the execution"));

//cau 2
// let i=0;
// while (i<3) {
//    alert( `number ${i}!` );
//    i++;
// }

//object

// let user = {
//    name : "John",
//    surname : "Smith"
// };
// alert(user.name);

// user.name = "Pete";
// alert(user.name);

// delete user.name;
// alert(user.name);

// let salaries = {
//    John : 100,
//    Ann : 160,
//    Pete : 130
// };
// let result = 0;

// if ("John" in salaries && "Ann" in salaries && "Pete" in salaries) {
//   let sum = 0; 
//   for(let price in salaries) {
//       sum = sum + salaries[price];
//   }
//   result = sum;
// }
// else{
//    result = 0;
// }

// alert(result);

// let menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
//  };

// function multiplyNumeric(menu) {
//     for (let key in menu){
//       if  (typeof(menu[key]) == 'number') {
//         menu[key] = menu[key] * 2;
//       }
//       console.log(menu[key]);
//     }
// }

// multiplyNumeric(menu);

//Array
let nhanVien1 = {
  name : "tri",
  luong : 2000
};

let nhanVien2 = {
  name : "duy",
  luong : 1000
};

let nhanVien3 = {
  name : "Vien",
  luong : 10000
};

let arr = [];

function addNhanVien(obj, obj1, obj2){
  arr.push(obj);
  arr.push(obj1);
  arr.push(obj2);
}

// function tongLuong (arr) {
//   let tong = 0;
//   for(let i = 0 ; i < arr.length ; i++){
//     tong = tong + arr[i].luong;
//   }
//   console.log(tong);
// }

addNhanVien(nhanVien1, nhanVien2, nhanVien3);
console.log(arr);

// tongLuong(arr);

function deleteNhanVien (arr) {
  let viTri;
  let viTri1 = prompt("Bạn muốn xóa nhân viên thứ mấy",viTri);
  arr.splice(viTri1,1);
}
deleteNhanVien(arr);

console.log(arr);
