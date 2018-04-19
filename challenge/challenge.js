

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


function tasks(){
 task1();
}