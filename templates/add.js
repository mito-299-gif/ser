document.getElementById("userForm").addEventListener("submit", function (event) {


    let name = document.getElementById("name").value;
    let name_2 = document.getElementById("name_2").value;
    let phop = document.getElementById("phop").value;

    fetch("http://127.0.0.1:5000/api/add_user", {  // ໃຊ້ URL ຂອງ Flask API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            name_2: name_2,
            phop: phop
        })
    })
        .then(response => response.json())
        .then(data => alert(data.message || data.error))
        .catch(error => console.error("Error:", error));
});