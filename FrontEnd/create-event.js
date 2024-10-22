document.getElementById("create-event-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const eventTitle = document.getElementById("event-title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const ticketPrice = parseFloat(document.getElementById("ticket-price").value);
    const eventImageUrl = document.getElementById("eventImageUrl").value;
    const organizerId = sessionStorage.getItem("userId");

    const eventData = {
        title: eventTitle,
        description: description,
        date: date,
        time: time,
        location: location,
        ticketPrice: ticketPrice,
        imageUrl: eventImageUrl,
        organizer: {
            id: organizerId
        }
    };

    try {
        const response = await fetch("http://localhost:8080/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
        });

        if (response.ok) {
            alert("Event created successfully!");
            window.location.href = "dashboard.html";
        } else {
            alert("Failed to create event. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while creating the event.");
    }
});
