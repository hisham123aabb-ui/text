function generateCertificate() {
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    if (name === "" || course === "") {
        alert("Please fill in all fields");
        return;
    }

    document.getElementById("certName").innerText = name;
    document.getElementById("certCourse").innerText = course;
    document.getElementById("certificate").style.display = "block";
}
