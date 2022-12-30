
let uname = document.getElementById(uname);
let pword = document.getElementById(pword);

function verify(callback){
    if(uname.value == "admin" && pword.value == "12345"){
    callback();
    }
    else{
        alert("Invalid, please try again.");
        return false;
    }
}


function todo(){
window.location.href=("todo.html");
}



function displaylist(){
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
        try{
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status ===200){
                    console.log(httpRequest.responseText);
                    display(httpRequest.responseText)
                }
                else{
                    alert("Error from API");
                }
            }
        }
        catch(e){
            alert(e.description);
        }
    };
    try{
        httpRequest.open('GET','https://jsonplaceholder.typicode.com/todos',true);
        httpRequest.send();
    }
    catch(e){
        alert(e.description);
    }

}

function logout(){
    window.location.href="index.html";
}

function display(data){
    var list = JSON.parse(data);
    let table = document.getElementById("todotable");

    for(var i=0;i<list.length;i++){
        let rowcount = table.rows.length;
        var row = table.insertRow(rowcount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML=list[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=list[i].title;

        var cell3 = row.insertCell(2);
        var element= document.createElement("input");
        element.type="checkbox";

        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }
        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                checkCounter();
            }
            else{
                count--;
            }
        })
        cell3.appendChild(element);


    }

}

var count =0;
function checkCounter(){

    let promise = new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats");
        }

    })
    promise.then(function(s){
        alert(s);
    })

}