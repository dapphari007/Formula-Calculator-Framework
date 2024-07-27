function showContent() {
    var dropdown = document.getElementById("profession");
    
    hideAllContent(); // Hide all content divs
    
    if (dropdown.value === "MATHS") {
        showContentForSubject("mathsContent");
    } else if (dropdown.value === "PHYSICS") {
        showContentForSubject("physicsContent");
    } else if (dropdown.value === "CHEMISTRY") {
        showContentForSubject("chemistryContent");
    } else if (dropdown.value === "BIOLOGY") {
        showContentForSubject("biologyContent");
    }
}

function hideAllContent() {
    var contentDivs = document.querySelectorAll(".content");
    contentDivs.forEach(function(div) {
        div.style.display = "none";
    });
}

function showContentForSubject(subject) {
    var content = document.getElementById(subject);
    content.style.display = "block";
    openLink(subject);
}

function openLink(subject) {
    var linkElement = document.querySelector(`#${subject} a`);
    if (linkElement) {
        var link = linkElement.getAttribute("href");
        window.location.href = link;
    }
}

window.addEventListener("load", function() {
    var dropdownFrame = document.getElementById("dropdownFrame");
    dropdownFrame.style.display = "block";
});