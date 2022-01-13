//Total using array
var i;
var m=[10,20,30,40,50];
var s=0;
for(i=0;i<5;i++)
{
    var s=s+m[i];
}
var per=(s/500)*100;
document.write("Total % ="+per+"%");