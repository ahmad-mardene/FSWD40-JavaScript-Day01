

function task1(){
 var a=new Array(20);
 var text="Vienna is a nice city.";
 var b=[];
 var output=[];

 for(var i=0;i<text.length;++i)
  {b.push('_');
   a[i]=b.join('')+text.charAt(i);
  }	
  console.log(a);

  for(var j=0;j<text.length;++j)
   {
   	output.push("<p>"+a[j]+"</p>");
   }	

  document.getElementById("task1").innerHTML=output.join(''); 
}


function task2(){

 var text='Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".';
 var output=text.split("$");
 document.getElementById("task2").innerHTML=output.join(' ');
}

function tasks(){
 task1();
 task2();
}