document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const note = document.getElementById("note").value;

    const booking = {
        name: name,
        phone: phone,
        date: date,
        time: time,
        people: people,
        note: note
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    document.getElementById("result").innerHTML =
        "✅ จองโต๊ะสำเร็จ! ขอบคุณคุณ " + name;

    document.getElementById("bookingForm").reset();
});
