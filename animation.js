$(document).ready(function(){
  var num_li=$(".nav li").length;
  var n=1;
  var moving=0;
  $(window).mousewheel(function(e){
    b1=0;
    b2=0;
    b3=0
    $(".box1>.content").hide("fast",function(){$(".box1").animate({height:"40vh", width:"40vw", margin:"2.5vw auto 5vh 5vh"},"fast");});
    $(".box2>.content").hide("fast",function(){$(".box2").animate({height:"40vh", width:"35vw", margin:"15vh 10vh 25vh auto", float: "right"},"fast");});
    $(".box3>.content").hide("fast",function(){$(".box3").animate({height:"60vh", width:"45vw", margin:"10vh auto 20vh 35vh"},"fast");}); 
      if(e.deltaY==-1){
        if(n<num_li){
          n++;
        }
      }
      else{
        if(n>1){
          n--;
        }
      }
    $("html, body").animate({
      "scrollTop": $(".p0"+n).offset().top
    }, "fast");
  });
  for(var i=0;i<=num_li;i++){
    $(".nav li:eq("+i+")").click({
      id:i
    }, function(e){
      $(".nav li").css("background-color","AAAAAA");
      var page=e.data.id+1;
      $("html,body").animate({
        "scrollTop": $(".p0"+page).offset().top
      });
      $(this).css("background","#DDDDDD");
      n=e.data.id+1;
    })
  }

  center();

  $(window).resize(function(){
    center();
  });

  function center(){
    $(".nav").css("top","15vh");
  }
  $(window).scroll(function(){
    if(n==1){
      $(".nav li").css("background-color","#AAAAAA");
      $(".nav li:eq(0)").css("background-color","#DDDDDD");
    }
    else if(n==2){
      $(".nav li").css("background-color","#AAAAAA");
      $(".nav li:eq(1)").css("background-color","#DDDDDD");
    }
    else if(n==3){
      $(".nav li").css("background-color","#AAAAAA");
      $(".nav li:eq(2)").css("background-color","#DDDDDD");
    }
  });
  var b1=0,b2=0,b3=0;
  $(".box1").click(function(){
    if(b1==0){
      $(".box1").animate({height:"80vh", width:"70vw"},function(){$(".box1>.content").show();});
      b1=1;
    }
    else{
      $(".box1>.content").hide(function(){$(".box1").animate({height:"40vh", width:"40vw", margin:"2.5vw auto 5vh 5vh"});});
      b1=0;
    }
   });
  $(".box2").click(function(){
    if(b2==0){
      $(".box2").animate({height:"80vh", width:"70vw", float: "right"},function(){$(".box2>.content").show();});
      b2=1;
    }
    else{
      $(".box2>.content").hide(function(){$(".box2").animate({height:"45vh", width:"35vw", margin:"15vh 10vh 25vh auto", float: "right"});});
      b2=0;
    }
  });
  $(".box3").click(function(){                                                                                                  
      if(b3==0){                                                                                                                 
      $(".box3").animate({height:"80vh", width:"70vw"},function(){$(".box3>.content").show();});                                  
      b3=1;                                                                                                                         
    }                                                                                                                                  
    else{                                                                                                                               
      $(".box3>.content").hide(function(){$(".box3").animate({height:"60vh", width:"45vw", margin:"10vw auto 20vh 35vh"});});              
      b3=0;                                                                                                                               
    }                                                                                                                                    
  });
});
