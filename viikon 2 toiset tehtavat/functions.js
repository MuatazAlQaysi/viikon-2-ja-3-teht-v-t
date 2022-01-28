function f1() {
  var v= parseInt(document.getElementById("one_one").value);
  var output= "luku on negativinen";
  if (v>=0) {
    output="luku on positivinen";

  }
document.getElementById("first").innerHTML =output;
}



function f2() {

    var v= parseInt(document.getElementById("one_two").value);

    var output="";
      if(v == 1 ) {
        output = "Maanantai";
      }
      else if(v == 2 ) {
        output = "Tiistai";
      }
      else if(v == 3 ) {
        output = "Keskiviikko";
      }
      else if(v == 4 ) {
        output = "Torstai";
      }
      else if(v == 5 ) {
        output = "Perjantai";
      }
      else if(v == 6 ) {
        output = "Lauantai";
      }

     else {
       output = "Sunnuntai";
      }

  document.getElementById("second").innerHTML =output;

}


function f3 (output){
    var output;
    v = parseInt(document.getElementById("one_three").value);
    if (v % 4 == 0 && v % 100 !=0 ){
      output = "Vuosi on karkausvuosi"
    }
    else if(v % 400 == 0){
      output = "Vuosi on karkausvuosi"
    }
    else{
      output = "Vuosi ei ole karkausvuosi"
    }
    document.getElementById("third").innerHTML =output;

 }


 function f4() {

   var v1= parseInt(document.getElementById("four_one").value);
   var v2= parseInt(document.getElementById("four_two").value);
   var v3= parseInt(document.getElementById("four_three").value);
   var v4= parseInt(document.getElementById("four_four").value);
   var v5= parseInt(document.getElementById("four_five").value);

   var sum = v1 + v2 + v3 + v4 + v5;
   var ka = sum / 5;
   var output = "lukujen summa on: " + sum + " ja keskiarvo on: " + ka;

  document.getElementById("fourth").innerHTML = output;
 }


 function f5() {

   var v= parseInt(document.getElementById("five_one").value);

   var i = "";
   i += v + "x 1 = " + v * 1 + "<br>";
   i += v + "x 2 = " + v * 2 + "<br>";
   i += v + "x 3 = " + v * 3 + "<br>";
   i += v + "x 4 = " + v * 4 + "<br>";
   i += v + "x 5 = " + v * 5 + "<br>";
   i += v + "x 6 = " + v * 6 + "<br>";
   i += v + "x 7 = " + v * 7 + "<br>";
   i += v + "x 8 = " + v * 8 + "<br>";
   i += v + "x 9 = " + v * 9 + "<br>";
   i += v + "x 10 = " + v * 10 + "<br>";



   document.getElementById("tenth").innerHTML = i;

}
