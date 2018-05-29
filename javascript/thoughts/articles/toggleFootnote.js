function showFootnote() {
    document.querySelector('.footnote').style.visibility = "visible";
}
function hideFootnote() {
    document.querySelector('.footnote').style.visibility = "hidden";
}

/* Example markup
<sup onclick="showFootnote()" onmouseout="hideFootnote()">[1]</sup> 
<span class="footnote">Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet.</span>

*/