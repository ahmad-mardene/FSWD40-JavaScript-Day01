

function task1(){
  var a = 7;
  var b = 14;
  var c = "21";
  var d = '36';
  var e = 42;

  var f = '1';
  var g = 15;
  var h = 8;
  var i = "1";

  var result1= a+b+Number(c)+Number(d)+42;
  var result2= Number(f)*g*h*Number(i);
  var result3=result1/result2;
  var output1="<p>The 1.result is "+result1+"</p>";
  var output2="<p>The 2.result is "+result2+"</p>";
  var output3="<p>The final result is "+result3+"</p>";
  var output=output1+output2+output3;
  document.getElementById("task1").innerHTML=output;
  //console.log(output)
}

function task2(){
 var a=[ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
 var b=[];

 b.push(a[1][1]);
 b.push(a[4][2]);
 b.push(a[5][3]);
 b.push(a[2][3]);
 b.push(a[2][1]);

 document.getElementById("task2").innerHTML=b;	
}

function task3(){
 var oString="With the online map of Vienna you can easily navigate through Vienna.";
 var pString=oString.split('Vienna');
 var Vienna=[];

 
 pString.forEach(Vienna.push("<p>Vienna</p>"));
 
 document.getElementById("task3").innerHTML=Vienna.join('');

}


function tasks(){
 task1();	
 task2();
 task3();
}
