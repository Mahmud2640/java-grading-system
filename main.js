function grade(){
   var result = (document.getElementById("number").value);

   if (result <=0){
      document.getElementById("view").innerHTML = "Enter Your Number";
   }
    else if (result <= 50) {
      document.getElementById("view").innerHTML = "U got F";
    }
    else if (result >= 50 && result < 60) {
      document.getElementById("view").innerHTML = "U got D";
    }
    else if (result >= 60 && result < 70) {
      document.getElementById("view").innerHTML = "U got C";
    }
    else if (result >= 70 && result < 80) {
      document.getElementById("view").innerHTML = "U got B";
    }
    else if (result >= 80 && result < 90) {
      document.getElementById("view").innerHTML = "U got A";
    }
    else if (result >= 90) {
      document.getElementById("view").innerHTML = "U got A+";
    }
}