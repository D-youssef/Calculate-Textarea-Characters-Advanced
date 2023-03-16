/*
    Calculate Textarea Characters While Writing (Advanced)
*/

var $count = document.getElementById("count"),
    $textarea = document.getElementById("text"),
    $maxLength = $textarea.getAttribute("maxLength");

// We use oninput() method it works with copy and paste text
$textarea.oninput = function () {

    'use strict';

    $count.innerHTML = $maxLength - this.value.length;

    if ($count.innerHTML == 0) {
        
        $count.classList.add('zero');  // we add a class of css

    } else {
        
        $count.classList.remove('zero'); // we remove class that we have created before
    }
};