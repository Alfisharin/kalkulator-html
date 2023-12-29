function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clrdisp(){
    document.getElementById("screen").value="" 
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}

function del() {
    var currentInput = document.getElementById("screen").value;
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        document.getElementById("screen").value = currentInput;
    }
}



