var x=1;
$(document).ready(function(){
  $(document).click(function(){
    if(x==1){
      $("#profile").animate({marginTop:"-10%"}).transition('fade down');
      $("#contact").animate({marginTop:"5%"});
      $("#pic").animate({marginTop:"50%"}).transition('fade up');
      $("#profile").animate({marginTop:"110%"});
      x+=1;
    }
    else if(x==2){
      $("#contact").animate({marginTop:"-10%"}).transition('fade down'); 
      $("#pic").animate({marginTop:"5%"});
      $("#profile").animate({marginTop:"50%"}).transition('fade up');
      $("#contact").animate({marginTop:"110%"});
      x+=1;
    }
    else if(x==3){
      $("#pic").animate({marginTop:"-10%"}).transition('fade down');
      $("#profile").animate({marginTop:"5%"});
      $("#contact").animate({marginTop:"50%"}).transition('fade up');
      $("#pic").animate({marginTop:"110%"});
      x=1;
    }
  });
});
