function toggleContent(id) {
    var idText = "text" + id;
    var idArrow = "arrow" + id;

    var content = document.getElementById(idText);
    var arrow = document.getElementById(idArrow);

    if (content.style.display == "none") {
        if (idText == "text3") 
            content.style.display = "flex";        
        else
            content.style.display = "block";

        arrow.classList.add("rotate");
    }
    else {
        content.style.display = "none";
        arrow.classList.remove("rotate");
    }

    adjustFooter();
}

function adjustFooter() {
    const footer = document.querySelector('footer');
    const windowHeight = window.innerHeight;
    const contentHeight = document.body.scrollHeight;

    if (contentHeight < windowHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative';
    }
}

window.onload = adjustFooter;
