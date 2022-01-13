//Compare two numbers,if first one is greater then print sum otherwise print subtraction
var n=prompt("Enter a number");
n=parseInt(n);
var o=prompt("Enter a number");
o=parseInt(o);
document.write(n);
document.write("\t"+o);
document.write("<br/>"+"Operation:");
var c=(n>o)?n+o:n-o;
document.write(c);