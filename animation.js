var x=1;
$(document).ready(function(){
  $(document).click(function(){
    if(x==1){
      $("profile").transition('fly up'); 
      x+=1;
    }
    else if(x==2){
      $("profile").transition('fly down');
      $("contact").transition('fly up');
      x+=1;
    }
    else if(x==3){
      $("contact").transition('fly down');
      x=1;
    }
  });
};);
