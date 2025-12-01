// Function to load XML Data
function loadSkills() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this);
        }
    };
    xhttp.open("GET", "skills.xml", true);
    xhttp.send();
}

function parseXML(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Category</th><th>Technology</th><th>Proficiency Level</th></tr>";
    var x = xmlDoc.getElementsByTagName("skill");
    
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("technology_name")[0] ? 
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue : // fallback
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + 
        "</td><td>" +
        x[i].getElementsByTagName("level")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    
    // Update the table body
    const tableBody = document.querySelector("#skills-table tbody");
    
    // Clear existing body to prevent duplicates
    tableBody.innerHTML = ""; 

    // Rebuild rows specifically for the tbody
    for (i = 0; i < x.length; i++) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        cell1.innerHTML = x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
        cell2.innerHTML = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        cell3.innerHTML = x[i].getElementsByTagName("level")[0].childNodes[0].nodeValue;
    }
    
    // Hide the button after loading
    document.querySelector("button").style.display = "none";
}

// Auto-run on load (Optional, or keep the button to show interaction)
// window.onload = loadSkills;
      