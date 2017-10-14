var x=1;
$(document).ready(function(){
  $(document).click(function(){
    if(x==1){
      $("#profile").transition('fade up'); 
      x+=1;
    }
    else if(x==2){
      $("#profile").transition('fade down',function(){$("#contact").transition('fade up');});
      x+=1;
    }
    else if(x==3){
      $("#contact").transition('fade down');
      x=1;
    }
  });
});
