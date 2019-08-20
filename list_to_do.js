var Mylist= document.getElementsByTagName("li");
for(let i=0; i< Mylist.length;i++){
  var span=document.createElement("SPAN");
  var txt=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  Mylist[i].appendChild(span);
}

var close=document.getElementsByClassName("close");
for(let i=0;i<close.length;i++){
  close[i].onclick = function(){
    var div=this.parentElement;
    div.style.display="none";
  }
}





function newElement(){
  var Li=document.createElement("li");
  var node=document.getElementById("dzo").value;
  var Element=document.createTextNode(node);
  Li.appendChild(Element);

  if(node===""){
    alert("vui lòng nhập việc cần làm");
  }else{
    document.getElementById("ul").appendChild(Li);
  }

  document.getElementById("dzo").value="";
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
   Li.appendChild(span);
  for(let i=0;i<close.length;i++){
    close[i].onclick = function(){
      var div=this.parentElement;
      div.style.display="none";
    }
  }
}