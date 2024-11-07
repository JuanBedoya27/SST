function generateCertificate() {
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const cedula = document.getElementById('cedula').value;
    const currentDate = new Date(); // Genera la fecha automáticamente

    // Validar que todos los campos estén llenos
    if (!name || !cedula) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Insertar los valores en el certificado
    document.getElementById('participant-name').textContent = name;
    document.getElementById('participant-cedula').textContent = cedula; // Agregado para mostrar la cédula
    document.getElementById('issue-date').textContent = currentDate.toLocaleDateString();
    document.getElementById('course-duration').textContent = "40"; // Puedes cambiar la duración según lo necesites

    // Mostrar el certificado
    document.getElementById('certificate').style.display = 'block';
}

function downloadCertificate() {
    const certificate = document.getElementById('certificate');

    // Utiliza html2canvas para capturar el certificado
    html2canvas(certificate, { scale: 2 }).then(canvas => {
        // Crea un PDF usando jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");
        
        // Convierte el canvas a imagen
        const imgData = canvas.toDataURL("image/png");
        
        // Ajusta la imagen al tamaño de una hoja A4
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        // Agrega la imagen al PDF
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        
        // Descarga el PDF
        pdf.save("certificado.pdf");
    });
}


