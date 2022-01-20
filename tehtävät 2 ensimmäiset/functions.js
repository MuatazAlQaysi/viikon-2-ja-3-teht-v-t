function f1() {
  var v1;
  var v2;
  var v3;
  var output;
  v1= parseInt(document.getElementById("one_one").value);
  v2= parseInt(document.getElementById("one_two").value);
  v3= parseInt(document.getElementById("one_three").value);
  const numbers = [v1,v2,v3];
  numbers.sort();
  output="Annoit luvut: "+ v1 +" "+v2 +" "+v3 + "<br>";
  document.writeln(output);
  output= "Lukujen järjestys: "+numbers;
  document.write(output);
}

function f2() {
  var v1= parseInt(document.getElementById("two_one").value);
  var v2= parseInt(document.getElementById("two_two").value);
  var v3= parseInt(document.getElementById("two_three").value);
  var v4= parseInt(document.getElementById("two_four").value);
  var v5= parseInt(document.getElementById("two_five").value);
  var output=0;
  if(v1 > output) {
    output = v1;
  }
  if(v2 > output) {
    output = v2;
  }
  if(v3 > output) {
    output = v3;
  }
  if(v4 > output) {
    output = v4;
  }
  if(v5 > output) {
    output = v5;
  }
  document.write(output);
}

function f3() {
  var v= parseInt(document.getElementById("three_one").value);
  var output= "parillinen";
  if (v%2!=0) {
    output="pariton";
  }
  document.write(output);
}
function f4() {
  var v= parseInt(document.getElementById("four_one").value);
  var output= "voi ajaa autoa";
  if (v<16) {
    output="voi ajaa polkupyörää";
  }
  if (v>=16 && v<18) {
      output="voi ajaa Mopoa";
  }
  document.write(output);
}

function f5() {
    var v= document.getElementById("teht5").value;
    var output= "";
    if (v=="Englanti") {
        output= "Hello World!";
    }
    if (v=="Espanja") {
      output= "Hola Mundo!";
    }
    if (v== "Suomi") {
      output= "Hei Maailma!"
    }
    document.write(output);
}
