var x=1;
$(document).ready(function(){
  $(document).click(function(){
    if(x==1){
      $("#profile").animate({marginTop:"-10vh"}).transition('fade down');
      $("#contact").animate({marginTop:"5vh"});
      $("#pic").animate({marginTop:"35vh"}).transition('fade up');
      $("#profile").animate({marginTop:"110vh"});
      x+=1;
    }
    else if(x==2){
      $("#contact").animate({marginTop:"-10vh"}).transition('fade down'); 
      $("#pic").animate({marginTop:"5vh"});
      $("#profile").animate({marginTop:"35vh"}).transition('fade up');
      $("#contact").animate({marginTop:"110vh"});
      x+=1;
    }
    else if(x==3){
      $("#pic").animate({marginTop:"-10vh"}).transition('fade down');
      $("#profile").animate({marginTop:"5vh"});
      $("#contact").animate({marginTop:"35vh"}).transition('fade up');
      $("#pic").animate({marginTop:"110vh"});
      x=1;
    }
  });
});
