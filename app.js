var num=[100,200,300,400,500],max=0,min=1000,i;
for(i=0;i<=5;i++)
{
    max=num[i]>max?num[i]:max;
    min=num[i]<min?num[i]:min;
}
console.log("Greatest number is:",max);
console.log("Smallest number is:",min);

