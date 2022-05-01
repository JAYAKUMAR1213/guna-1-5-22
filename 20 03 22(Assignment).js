function showModulus(val1,val2)
{
   var result=val1%val2;
    alert(result);
}
function displayIncrementpre()
{
    //No Parameter passed
    var num1=50,first;
    first=num1++;
    alert("First value is : "+first+" num1 value is : "+num1);
    return num1;
}
function displayIncrementpost()
{
    var num2=80,second;
     second=++num2;
    alert(" second: "+second+" num2: "+num2);
}
function displaypredecrement()
{
    //No Parameter passed
    var num1=50,first;
    first=num1--;
    alert("First value is : "+first+" num1 value is : "+num1);
    return num1;
}

function displaypostdecrement()
{
    var num2=80,second;
     second=--num2;
    alert(" second: "+second+" num2: "+num2);
}

//assignment operators
 function displayEqual(x)
 {
     var x,y;
      y=x;
     alert("y value is "+y);
 }
 function displayEqualplus(x,y)
 {
      x+=y;
     alert("x value is "+x);
 } 
 function displayEqualminus(x,y)
 {
      x-=y;
     alert("x value is "+x);
 } 
 
 function displayEqualmul(x,y)
 {
      x*=y;
     alert("x value is "+x);
 } 
 
 function displayEqualdiv(x,y)
 {
      x/=y;
     alert("x value is "+x);
 } 
 
 function displayEqualmodulus(x,y)
 {
      x%=y;
     alert("x value is "+x);
 } 
 function displayEqualtwomul(x,y)
 {
      x**=y;
     alert("x value is "+x);
 } 
 
 function displayEqualequal()
 {
     var x=10,y=20;
      z=(x==y);
     alert("z value is "+z);
 } 
 
 function displayEqualequalequal()
 {
    var x=10,y=10;
    z=(x===y);
    alert("z value is "+z);
 }
 function displayNotequal()
 {
     var aa=10,aaa=100;
     a=(aa!=aaa);
     alert("  Not equla value is   "+a)
 }
 function displayNotequaltype()
 {
     var aa=10,aaa=100;
     a=(aa!==aaa);
     alert("  Not equla & type value is  "+a)
 }
  function greaterthan()
  {
      var L=90,M=100;
      c=(L>M);
      alert("  greaterthan value is  "+c) 
  }
  function 	lessthan()
  {
    var L=90,M=100;
    c=(L<M);
    alert("  greaterthan value is  "+c);
}
function greaterthanequal()
{
    var L=90,M=10;
    c=(L>M);
    alert("  greaterthanequal value is  "+c);
}
function 	lessthanequal()
{
  var L=90,M=10;
  c=(L<M);
  alert("  greaterthanequal value is  "+c);
}
// function ternary()
// {
//     var age=30;
//     y=c?(a:b)
//     y=(age>10)?(a:b); 
// }