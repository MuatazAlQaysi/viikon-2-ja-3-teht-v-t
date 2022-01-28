function f1() {
  var v= (document.getElementById("one_one").value);
  v=v.toUpperCase();
  var output= 0;
  //alert("bÄÄ" + v);
  for (var i = 0; i < v.length; i++) {
    switch (v[i]) {
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
      output++;
      break;

      case "O":
      case "Ä":
      case "K":
      case "L":
      output+=2;
      break;

      case "U":
      case "M":
      output+=3;
      break;

      case "Y":
      case "H":
      case "J":
      case "P":
      case "R":
      case "V":
      output+=4;
      break;

      case "Ö":
      case "D":
      output+=7;
      break;

      case "B":
      case "F":
      case "G":
      output+=8;
      break;

      case "C":
      output+=10;
      break;

      default:
      output+=12;
    }
  }
  document.write(output);
}


function f2() {
    var output="";
    var num =0;
    for(var i = 1; i <=7; i++){
        num = Math.floor( Math.random()*40)+1;
        output+=num + ",";
    }
  //  document.write(output);//
  document.getElementById("one").innerHTML=output;
  }


function f3()
{
  var ar=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26,7]];

  var contents ="<table border='1'>";

    for( var first = 0; first <=3; first ++) {
      contents+="<tr>";
      for(var second = 0; second <=3; second++){
        contents+="<td>" + ar[first][second] +"</td>";
      }
      contents+="</tr>";
    }
      contents+="</table>";

  document.write(contents);

}


function f4()
{
  var contents ="";
  var pics = "";
  var all = [];
  var num;
  for( var shapes = 1; shapes <= 4; shapes ++) {
    if (shapes == 1) {
      pics = String.fromCharCode(9824);
    }
    else if (shapes == 2) {
      pics = String.fromCharCode(9829);
    }
    else if (shapes == 3) {
      pics = String.fromCharCode(9824);
    }
    else {
      pics = String.fromCharCode(9830);
    }
    for(var num = 1; num <=13; num++){
      all.push(pics+","+ num);
    }
  }
  //alert(all[7]);
  for (var i = 1; i <= 5; i++) {
    num = Math.floor( Math.random()*52)+1;
    contents+= all[num] + " ";
  }

  document.write(contents);

}
