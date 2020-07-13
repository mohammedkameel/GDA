function copyText(id){

// this is for tooltip
const tooltip = document.querySelector(".tooltip")


var textarea = document.createElement('textarea');
 
textarea.id = 'temp_element';

 
textarea.style.height = 0;

 
document.body.appendChild(textarea);

textarea.value = document.getElementById(id).innerText;

 
var selector = document.querySelector('#temp_element');

selector.select();


// this is for tooltip

tooltip.classList.add("show");
        setTimeout(function(){
          tooltip.classList.remove("show");
        },900);
 
document.execCommand('copy');

 
document.body.removeChild(textarea);

 
}

/* this for 2nd button */

function newText(id){

 
var textarea = document.createElement('textarea');
 
textarea.id = 'temp_element';

 
textarea.style.height = 0;

 
document.body.appendChild(textarea);

textarea.value = document.getElementById(id).innerText;

 
var selector = document.querySelector('#temp_element');


 
selector.select();

 
document.execCommand('copy');

 
document.body.removeChild(textarea);

 
}