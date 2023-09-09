
//This doesn't work in the code. You have to use node.js, Use 'node api/token.js' on the terminal 
// const getToken = require('./token');
// const token = getToken();

import { FIREBASE_API } from "../services/supabaseClients";

export async function sendNotification(notificationData: any) {
    
    try {
      const accessToken = `Bearer ${FIREBASE_API}`;
      
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
