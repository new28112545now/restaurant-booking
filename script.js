const SUPABASE_URL = "https://qbdptsvcklttdsnttbxh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = sb_publishable_bdQTf_Fa8OrGXs3JxuiAkQ_5d9RlzIr
"ใส่_PUBLISHABLE_KEY_ของคุณตรงนี้"
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

document.getElementById("bookingForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const booking_date = document.getElementById("date").value;
    const booking_time = document.getElementById("time").value;
    const people = Number(document.getElementById("people").value);
    const note = document.getElementById("note").value;

    const { error } = await supabaseClient
        .from("bookings")
        .insert([
            {
                name: name,
                phone: phone,
                booking_date: booking_date,
                booking_time: booking_time,
                people: people,
                note: note
            }
        ]);

    if (error) {

        console.error(error);

        document.getElementById("result").innerHTML =
            "❌ จองไม่สำเร็จ กรุณาลองใหม่";

        return;
    }

    document.getElementById("result").innerHTML =
        "✅ จองโต๊ะสำเร็จ! ขอบคุณคุณ " + name;

    document.getElementById("bookingForm").reset();

    
});
