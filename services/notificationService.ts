export async function handleSendNotification(topic: string, title: string, body: string) {

    const url = "https://survival-guide-notification-backend.onrender.com/sendTopicNotification";

    const requestData = {
        topic,
        title,
        body,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (response.status === 200) {
            // Handle success
            console.log("Notification sent successfully");
        } else {
            // Handle error
            console.log("Error sending the notification");
        }
    } catch (error) {
        console.error("There was a problem sending the notification", error);
    }
}
