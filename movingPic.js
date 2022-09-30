var checkerStop =false;
var interv;

var int1=0,int2=0,int3=360;
var checkint=0;
function go()
{
   // var img1=document.getElementById("img1").style.top="300px";
    //console.log(img1.toString());
  var obj =document.getElementById("btn1");
  if(obj.value=="go")
  {
    obj.value="stop";
    interv=setInterval(function(){
     
        if(checkint==0)
        {
            int1 += 10;
            int2 +=10;
            int3 -= 10;
            document.getElementById("img1").style.top = int1.toString()+"px";
            document.getElementById("img2").style.left = int2.toString()+"px";
            document.getElementById("img3").style.left = int3.toString()+"px";
            if(int1>360)
            {
                checkint=1;
            }
            
        }else {
            int1 -= 10;
            int2 -= 10;
            int3 += 10;
            document.getElementById("img1").style.top = int1.toString()+"px";
            document.getElementById("img2").style.left = int2.toString()+"px";
            document.getElementById("img3").style.left = int3.toString()+"px";
            if(int1<30)
            {
                checkint=0;
            }

        }
        document.getElementById("p1").innerHTML="&lt;img src=\"icon1.gif style=\"left="+int2.toString()+"px"+"\" &gt;<br>&lt;img src=\"icon2.gif style=\"left="+int3.toString()+"px"+"\" &gt;"
    },100);

  }
  else{

    clearInterval(interv);
    obj.value="go";
  }

}
function reset(){
    int1=0,int2=0,int3=360;
    document.getElementById("img1").style.top = "10px";
    document.getElementById("img2").style.left = "10px";
    document.getElementById("img3").style.left = "360px";

    go();
    
}