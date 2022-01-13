//Accept rate,principal,time and find simple interest
var p=prompt("Enter principal");
p=parseInt(p);
var r=prompt("Enter rate");
r=parseInt(r);
var t=prompt("Enter time");
t=parseInt(t);
document.write("Principal="+p+"<br/>"+"Rate="+r+"<br/>"+"Time="+t);
var si=p*t*r/100;
document.write("<br/>"+"Simple Interest="+si);
