$(document).ready(function(){
  var num_li=$(".nav li").length;
  var n=1;
  var moving=0;
  $(window).mousewhell(function(e){
    $("html, body").stop();
    if(moving==0){
      moving=1;
      if(e.deltaY==-1){
        if(n<num_li){
          n++;
        }
        else{n=1};
      }
      else{
        if(n>1){
          n--;
        }
        else{n=num_li;}
      }
    }
    $("html, body").animate({
      "scrollTop": $(".p0"+n).offset().top
    }, function(){
      moving=0;
    });
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
    var pos=$(window).height()/2-$(".nav").height()/2;
    $(".nav").css("top",pos);
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

});
