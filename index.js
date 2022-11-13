// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else

 const inputMonth = prompt("put number of month");

 switch (inputMonth){
   case "1":
   case "2":
   case"12":
     console.log("winter");
     break;
   case "3":
   case "4":
   case "5":
     console.log("spring");
     break;
   case "6":
   case "7":
   case "8":
       console.log("summer");
       break;
  case "9":
  case "10":
  case "11":
         console.log("fall");
         break;   
   default:
     console.log("404 try again");
       break; 
 }


 const userInPut = prompt("put number of month");
 const changeNumber= Number(userInPut);

  if (changeNumber > 0 && uchangeNumber <=2 || changeNumbert === 12 ) {
    console.log("winter");
  }else if(changeNumber >= 3 && changeNumber <= 5 ) {
    console.log("spring");
  }else if(changeNumber >= 6 && changeNumber <= 8 ) {
    console.log("summer");
  }else if(changeNumber >= 9 && changeNumber <= 10) {
    console.log("fall");
  }else{
    console.log("404 try again");
  }

//   Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// 404 try again
// оберіть самі потрібну конструкцію


 const userInPutAge = prompt("How old are you?");
 const checkAge = Number(userInPutAge);

 if (checkAge >= 0 && checkAge <2  ) {
   console.log("baby");
 }else if(checkAge >=2 && checkAge <6 ) {
   console.log("kinder");
 }else if(checkAge >=6 && checkAge <12 ) {
   console.log("child");
 }else if(checkAge >=12 && checkAge <18) {
   console.log("teenager");
 }else if(checkAge >=18 && checkAge <65) {
   console.log("adult");
 }else if(checkAge >=65 && checkAge <100) {
     console.log("oldmen");
 }else if(checkAge >=100 && checkAge <150) {
     console.log("super");
 }else{
   console.log("404 try again");
 }




//   Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!


const userInputHours = prompt("What time now?");
const changeToNumber = Number(userInputHours);

 if (changeToNumber >= 7 && changeToNumber <11  ) {
   console.log("Good morning");
 }else if(changeToNumber >=11 && changeToNumber <18 ) {
   console.log("Good day");
 }else if(changeToNumber >=18 && changeToNumber <23 ) {
   console.log("Good evening");
 }else if(changeToNumber >=0 && changeToNumber <7) {
     console.log("Good night");
 }else{
   console.log("404 try again");
 }


 const userInPutTime = prompt("put number of month");
 const changeInPutNumber = Number(userInPutTime );

 switch (changeInPutNumber ){
   case 0:
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
    console.log("Good night!");
     break;
   case 7:
   case 8:
   case 9:
   case 10:
    console.log("Good morning!");
     break;
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
   case 16:
   case 17:   
    console.log("Good day!");
       break;
  case 18:
  case 19:
  case 20:
  case 21: 
  case 22:
  case 23: 
     console.log("Good evening!");
       break;   
   default:
     console.log("404 try again!");
       break; 
 }