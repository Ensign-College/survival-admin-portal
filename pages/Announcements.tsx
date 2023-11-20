import React, { useState } from "react";
import {
  handleSendNotification,
  handleSendImageNotification,
} from "../services/notificationService";
import Navbar from "../components/navbar";

const Announcements: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCallNotifications = async () => {
    try {
      // Call the notification function with the input values
      if (imageUrl) {
        // If imageUrl is not empty, call the handleSendImageNotification function
        await handleSendImageNotification(
          topic || "all",
          title,
          body,
          imageUrl
        );
      } else {
        // If imageUrl is empty, call the handleSendNotification function
        await handleSendNotification(topic || "all", title, body);
      }
      // Optionally, you can clear the input fields here
      setTopic("");
      setTitle("");
      setBody("");
      setImageUrl("");
    } catch (error) {
      // Handle any errors here
      console.error("Error sending notification:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center">
        <div className="w-full lg:w-1/2  p-4 flex flex-col ">
          <p className="text-2xl font-semibold">Announcements</p>
          <label htmlFor="topic">Topic:</label>
          <input
            className="bg-white shadow-md rounded px-8 pt-3 mt-3 pb-3 mb-4"
            type="text"
            id="topic"
            name="topic"
            placeholder="Notification topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <label htmlFor="title">Title:</label>
          <input
            className="bg-white shadow-md rounded px-8 pt-3 mt-3 pb-3 mb-4"
            type="text"
            id="title"
            name="title"
            placeholder="Notification title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="body">Text:</label>
          <input
            className="bg-white shadow-md rounded px-8 pt-3 mt-3 pb-20 mb-4"
            type="text"
            id="body"
            name="body"
            placeholder="Enter text here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            className="bg-white shadow-md rounded px-8 pt-3 pb-20 mt-3 mb-4"
            type="text"
            id="imageUrl"
            name="notificationImage"
            placeholder="Image URL"
            autoComplete="off"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button
            type="button" // Use type="button" to prevent form submission
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover-bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={handleCallNotifications} // Call the function when the button is clicked
          >
            Send Notification
          </button>
        </div>
      </div>
    </>
  );
};

export default Announcements;
