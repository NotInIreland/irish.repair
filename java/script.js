function show() {
    document.getElementById('cat1')
        .style.display = "block";
    document.getElementById('cat2')
        .style.display = "block";
    document.getElementById('cat3')
        .style.display = "block";
    document.getElementById('cat4')
        .style.display = "block";
    document.getElementById('cat5')
        .style.display = "block";
    document.getElementById('show')
    .style.display = "none";	
    document.getElementById('hide')
    .style.display = "block";	
}

function hide() {
document.getElementById('cat1')
    .style.display = "none";
document.getElementById('cat2')
    .style.display = "none";
document.getElementById('cat3')
    .style.display = "none";
document.getElementById('cat4')
    .style.display = "none";
    document.getElementById('cat5')
    .style.display = "none";
document.getElementById('show')
.style.display = "block";
document.getElementById('hide')
.style.display = "none";	
}

function game() {
    var x = document.getElementById("choice");
    if (x.value == "/flash/bloonstd.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 525" + ">";
    }
    else if (x.value == "/flash/bloonstd2.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 525" + ">";
    }
    else if (x.value == "/flash/bloonstd3.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 525" + ">";
    }
    else if (x.value == "/flash/bloonstd4.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 722" + ">";
    }
    else if (x.value == "/flash/bloonstd4exp.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 722" + ">";
    }
    else if (x.value == "/flash/bloonstd5.swf")
    {
        document.getElementById("flash").innerHTML = "<embed src=" + x.value + " width = 700" + " height = 543" + ">";
    }
    
}