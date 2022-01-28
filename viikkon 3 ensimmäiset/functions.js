function f1() {
  var v= parseInt(document.getElementById("one_one").value);
  var output= "";
  for (var i = 0; i <=v; i++) {
    if (i!=0 && i%2==0 ) {
      output+=i+" ";
    }
  }
  document.write(output);
}



function f2() {
  var v= (document.getElementById("two_one").value);
  var output= "";
  for (var x=0; x <v.length; x++){
    output+=v[x]+"Ö";

  }
  document.write(output);

}


function f3() {
  var v= (document.getElementById("three_one").value);
  var output= "ei ole";
  for (var y=0; y <v.length; y++) {
    if (v[y]=="ö" || v[y]=="Ö") {
        output="on";
    }
  }
  document.write(output);
}





function f4() {
  var v= parseInt(document.getElementById("four_one").value);
  var output =1;
  for (var i = 1; i <= v; i++) {
  output*=i;
  }

  document.write(output);
}





function f5() {
  var output= "";
  for (var i = 1; i <= 100 ; i++) {
    if (i%3 == 0) {
      output+="Hip ";
    }
    else if (i%5 == 0) {
      output+="Heijaa ";
    }
    else if (i%3 == 0 && i%5 ==0) {
      output+= "Hip Heijaa ";
    }
    else {
      output+=i+" ";
    }

  }
  document.write(output);
}





function f6() {

  var output= "";
for (var i = 1; i <= 10 ; i++) {

  output+=i.toString(10)+" ";
}
  document.write(output);
}







function f7() {

  var output=0;
  for (var i = 1; i <=10 ; i++) {
output+=i;
}
  document.write(output);
}




function f8() {
  var v1= parseInt(document.getElementById("eight_one").value);
  var v2= parseInt(document.getElementById("eight_two").value);


  document.getElementById("eight").innerHTML = Math.pow(v1,v2);



}




function f9() {
  var v1= parseInt(document.getElementById("nine_one").value);
  var v2= parseInt(document.getElementById("nine_two").value);
  var v3= parseInt(document.getElementById("nine_three").value);
  var v4= parseInt(document.getElementById("nine_four").value);
  var v5= parseInt(document.getElementById("nine_five").value);

  var output1= Math.min(v1, v2, v3, v4 ,v5) ;
  var output2= Math.max(v1, v2, v3, v4 ,v5) ;
  output= "Pienin luku: " +output1 + " ja suurin luku: " + output2 ;
    document.getElementById("ninth").innerHTML =output;
  }




function f10() {
  var v= (document.getElementById("ten_one").value);
  var output= "";
  for (var x=0; x <v.length; x++){
    output+=v[x]+ makeid(1);



    function makeid(length) {
        var result           = '';
        var characters       = 'Ö';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() *
     charactersLength));
       }
       return result;
    }
  }
document.getElementById("tenth").innerHTML =output;
}



function f11() {
  var v1= parseInt(document.getElementById("eleven_one").value);
  var v2= parseInt(document.getElementById("eleven_two").value);
  var output="";
  var summa=0;
  //alert("v1=" + v1 + ", v2= " + v2 + ", output= " + output + ", summa = " + summa);
  for (var i = v1; i <=v2 ; i++) {

    if (i%2==0) {
      summa+=i;
      output+=i+" ";
    }
  }
    document.getElementById("elventh").innerHTML = output + "<br>"
    + summa;
}
