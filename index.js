function check() {
    var input = document.getElementById('fname');
    if (input.value !== "") {
        ecertificate();

    }
    else {
        alert("Input field is empty.");
    }
}
function ecertificate() {
    var x = document.getElementById("main");
    x.style.display = "block";
    var name = document.getElementById('fname').value;
    var details = document.getElementById('fdetails').value;
    var oname = document.getElementById('forganisername').value;
    document.getElementsByTagName('h3')[0].innerHTML = name;
    document.getElementsByTagName('h4')[0].innerHTML = details;
    document.getElementsByTagName('h5')[0].innerHTML = oname;

}
function dcheck() {
    var input = document.getElementById('fname');
    if (input.value !== "") {
        download();

    }
    else {
        alert("Input field is empty.");
    }
}

function download() {
    const { jsPDF } = window.jspdf;

    // Set up jsPDF instance
    const pdf = new jsPDF({
        orientation: 'landscape', // Landscape orientation for certificate
        unit: 'px',               // Use pixels for size
        format: [1150, 650],      // Custom size: width x height
    });

    // Get the certificate element
    const main = document.getElementById('main');

    // Add HTML content to PDF
    pdf.html(main, {
        callback: function (doc) {
            doc.save("E-Certificate.pdf"); // Save the PDF
        },
        x: 0,
        y: 0, // Position of the content in the PDF
        width: 1150, // Match the width
        windowWidth: 1150, // Ensure correct scaling
    });
}

    