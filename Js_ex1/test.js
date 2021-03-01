function myFun(){
    document.getElementById('button').onclick=changeText();
    function changeText(){
        document.getElementById('test').innerHTML='New Text'
    }
}