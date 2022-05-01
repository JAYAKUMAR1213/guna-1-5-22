var item;

/* ======= para function ======= */

function para(item)
{
if (item == 1)
{        
for(i=0;i<item;i++)
{
   var enter = document.getElementsByClassName("star"+(i+1))[0]
    enter.classList.add("new3");
}
for(i=5;i>item;i--)
{
   var enter1 = document.getElementsByClassName("star"+i)[0]
    enter1.classList.remove("new3");
}

}
else if (item == 2)
{        
for(i=0;i<item;i++)
{
    var name1 = document.getElementsByClassName("star"+(i+1))[0]
    name1.classList.add("new3");
}
for(i=5;i>item;i--)
{
    var name2 = document.getElementsByClassName("star"+i)[0]
    name2.classList.remove("new3");
}
}
else if (item == 3)
{        
for(i=0;i<item;i++)
{
    var not= document.getElementsByClassName("star"+(i+1))[0]
    not.classList.add("new3");
}
for(i=5;i>item;i--)
{
    var not1= document.getElementsByClassName("star"+i)[0]
    not1.classList.remove("new3");
}
}
else if (item == 4)
{        
for(i=0;i<item;i++)
{
    var not= document.getElementsByClassName("star"+(i+1))[0]
    not.classList.add("new3");
}
for(i=5;i>item;i--)
{
    var not1= document.getElementsByClassName("star"+i)[0]
    not1.classList.remove("new1");
}
}
else if (item == 5)
{        
for(i=0;i<item;i++)
{
    var same= document.getElementsByClassName("star"+(i+1))[0]
    same.classList.add("new3");
}
for(i=5;i>item;i--)
{
    var same1= document.getElementsByClassName("star"+i)[0]
    same1.classList.remove("new1");
}

}
   // return item;

}

/* ======= submit function =========*/
  
  function submit()
  {  
   //var num5 = item 

      //var same = document.getElementsByClassName("demo").innerHTML=item;
   var num1 = document.getElementsByClassName("name")[0].value
      var num2= document.querySelector('input[name="gender"]:checked').value;
      var num3 = document.getElementById("tel").value
     var rainting = document.getElementById("stars").value
     /*  ======== array call ======= */
     
     var collection = []
     console.log(collection.push(num1,num2,num3,rainting));
     alert(collection);

      }
     
    
