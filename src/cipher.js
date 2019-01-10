let functionFor = (encodeDecode, offset,string) =>{
  let output= '';

  //console.log('encode= '+ encodeDecode + ' offset= ' + offset + ' string= '+ string);
  offset=offset %26;

  for (let i =0; i < string.length;i++){
    if(string.charCodeAt(i)>=65 && string.charCodeAt(i) <=90){
    output= output.concat(String.fromCharCode((string.charCodeAt(i) + parseInt(encodeDecode) + offset)%26+65))
    } else{
      output=output.concat(string[i]);
    }
  }
 return output;
}
window.cipher = {
   encode: (offset,string) => {
    //  let output= '';
    //  for (let i =0; i < string.length;i++){
    //    if(string.charCodeAt(i)>=65 && string.charCodeAt(i) <=90){
    //    output= output.concat(String.fromCharCode((string.charCodeAt(i) -65 + parseInt(offset))%26+65))
    //    } else{
    //      output=output.concat(string[i]);
    //    }
    //  }
    // return output;
    return functionFor(-65,offset,string);
  },
   decode: (offset,string) => {
   //  let output= '';
   //  offset=offset %26;
   //  for (let i =0; i < string.length;i++){
   //    if(string.charCodeAt(i)>=65 && string.charCodeAt(i) <=90){
   //      output= output.concat(String.fromCharCode((string.charCodeAt(i) +65 - parseInt(offset))%26+65))
   //    }
   //    else {
   //       output=output.concat(string[i]);
   //    }
   //  }
   // return output;
   return functionFor(65,-offset,string);
   },
 };

// functionFor('-65','+offset',string)
// functionFor('+65','-offset',string)
