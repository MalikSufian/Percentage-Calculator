function per() {
    let a = +document.querySelector("#tm").value;
    let b = +document.querySelector("#om").value;
    let res = (b / a) * 100;

res=res.toFixed(2);

    document.querySelector("#result").innerHTML = `YOU GOT ${res}%`;
   
  };


 /*
function grade(){
  if (res > 33) {
      System.out.println("You Passed");
  } else if (res >= 60.0 && res <= 69.0) {
      System.out.println("Congrats! You got a D");
  } else if (res >= 70.0 && res <= 79.0) {
      System.out.println("Congrats! You got a C");
  } else if (res >= 80.0 && res <= 89.0) {
      System.out.println("Congrats! You got a B");
  } else if (res >= 90.0 && res <= 100.0) {
      System.out.println("Congrats! You got an A");
  } else {
      System.out.println("You didn't pass");
  }
};
*/





