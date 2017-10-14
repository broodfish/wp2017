var x=1;
$(document).ready(function(){
  $(document).click(function(){
    if(x==1){
      $("#profile").animate({marginTop:"-10%"},"slow").transition('fade down');
      $("#contact").animate({marginTop:"15%"},"slow");
      $("#pic").animate({marginTop:"60%"},"slow").transition('fade up');
      $("#profile").animate({marginTop:"110%"});
      x+=1;
    }
    else if(x==2){
      $("#contact").animate({marginTop:"-10%"},"slow").transition('fade down'); 
      $("#pic").animate({marginTop:"15%"},"slow");
      $("#profile").animate({marginTop:"60%"},"slow").transition('fade up');
      $("#contact").animate({marginTop:"110%"});
      x+=1;
    }
    else if(x==3){
      $("#pic").animate({marginTop:"-10%"},"slow").transition('fade down');
      $("#profile").animate({marginTop:"15%"},"slow");
      $("#contact").animate({marginTop:"60%"},"slow").transition('fade up');
      $("#pic").animate({marginTop:"110%"});
      x=1;
    }
  });
});
