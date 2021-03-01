function checkInput(){
  document.getElementById('button').onclick=isMultiple();
  
  function isMultiple(){
    var inputValue = document.getElementById('input').value;
    if(isNaN(inputValue)){
      alert("Please enter a number")
    }
    else{
      if(inputValue%5===0){
        document.getElementById('result').innerHTML="Is a Multiple of 5";
      }
      else{
        document.getElementById('result').innerHTML="Is not a Multiple of 5";
      }
    }
  }
}