// This script disables Right-Click on the entire page
function disableRightClick() {
    return false;
}


// This script makes the whoami section interactive and adds console text animation
function whoami() {
    const data = [
        {
          whoamiContent: "<span><br/>[~]-:$ whoami<br/>Name: Pushkar Bagayatkar<br/><br>Gender: Male<br/><br/>Pronouns: He/His<br/><br/>I am just a guy who likes to learn about technology and if possible, build my own version just because I enjoy it. I am an Engineer who graduated with a major in Electronics and Telecommunication along with a specialization in Computer Networks. I learned ethical hacking and Kali is my favourite Linux distribution. I have designed and built countless weekend projects and will continue to do so as that allows me to apply what I've learned and also to learn new stuff along the way.<br/>Although I specialize in computer networks & IT domain, my curiosity has led me to explore many other sectors such as the Aerospace sector, Nuclear Research, and many more.<br/>Feel free to browse my website and learn about some of my interesting projects.<br/>[~]-:$ &zwnj;</span>"
        }
    ];
      
    var allElements = document.getElementsByClassName("whoamiContent");
    for (var j = 0; j < allElements.length; j++) {
        var currentElementId = allElements[j].id;
        var currentElementIdContent = data[0][currentElementId];
        var element = document.getElementById(currentElementId);
        var devTypeText = currentElementIdContent;

        // Text print animation
        var i = 0, isTag, text;
        (function type() {
            text = devTypeText.slice(0, ++i);
            if (text === devTypeText) return;
            element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
            var char = text.slice(-1);
            if (char === "<") isTag = true;
            if (char === ">") isTag = false;
            if (isTag) return type();
            setTimeout(type, 3)
        })();
    }
}

