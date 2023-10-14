/**
 * Sends a notification to a specified topic.
 *
 * @param {string} topic - The topic to send the notification to.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body of the notification.
 * @return {Promise<void>} - A promise that resolves when the notification is sent successfully.
 */
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
/**
 * Sends an image notification to a specific topic.
 *
 * @param {string} topic - The topic of the notification.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body of the notification.
 * @param {string} imageUrl - The URL of the image to be included in the notification.
 * @return {Promise<void>} A promise that resolves when the notification is sent successfully.
 */
export async function handleSendImageNotification(topic: string, title: string, body: string, imageUrl: string) {
    const url = "https://survival-guide-notification-backend.onrender.com/sendTopicImageNotification";
    console.log(imageUrl);
    const requestData = {
        topic,
        title,
        body,
        imageUrl, // include the image URL in the request data
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
            console.log("Image notification sent successfully with URL:", imageUrl);
        } else {
            // Handle error
            console.log("Error sending the image notification");
        }
    } catch (error) {
        console.error("There was a problem sending the image notification", error);
    }
}
