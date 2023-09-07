export async function sendNotification(notificationData: any) {

    const FirebaseKey = process.env.FIREBASE_API;
    const FirebasePixelkey = process.env.FIREBASE_TOKEN_PIXEL;

    try {
      const accessToken = `Bearer ${FirebaseKey}`;
      const response = await fetch('https://fcm.googleapis.com/v1/projects/survivalguide-407e0/messages:send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken,
        },
        body: JSON.stringify(notificationData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Notification sent successfully:', responseData);
      } else {
        console.error('Error sending notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
