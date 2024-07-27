function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");

    function updateDateTimeString() {
        var now = new Date();
        var date = now.toLocaleDateString();
        var time = now.toLocaleTimeString();
        var dateTimeString = date + " " + time;
        datetimeElement.innerText = dateTimeString;
    }


    updateDateTimeString();

    
    setInterval(updateDateTimeString, 1000);
}


updateDateTime();
