document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fileInput = document.getElementById('resume');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type. Please upload a PDF.');
        fileInput.value = '';
        return false;
    } else {
        // Proceed with form submission or file upload
        console.log('Form submitted or file uploaded');
    }
});
