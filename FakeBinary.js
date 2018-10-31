function fakeBin(x){
    var numb = '';
    for(var i = 0; i < x.length; i++){
      if(x[i] < '6')numb += '0';
      else if(x[i] > '5')numb += '1';
    }
    return numb;
  }
  
  console.log(fakeBin('259376'));
  console.log(fakeBin('593852'));
  console.log(fakeBin(''))