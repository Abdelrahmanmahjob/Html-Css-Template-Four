let link = document.getElementsByTagName('a');
link.addEventListener('click',function(e) {
    if(e.target.hasAttributes('active')) {
        e.remove();
    }
    else {
        e.setAttribute('class','active')
    }
})