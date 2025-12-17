/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ROSLIB from "roslib";
let activeTopics = [];
import { createContext, useContext, useEffect, useState } from "react";

const ConnectionContext = createContext(null);

function ConnectionProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [ros, setRos] = useState(null);
  useEffect(() => {
    const newRos = new ROSLIB.Ros({ url: "ws://192.168.2.1:9090" });

    try {
      newRos.connect("ws://192.168.2.1:9090");

      setRos(newRos);
    } catch (error) {
      console.error("Initial connection error:", error);
    }
    const handleConnection = () => {
      setIsConnected(true);
      console.log("Connected to ROS");
    };

    const handleClose = () => {
      setIsConnected(false);
      console.log("Disconnected from ROS");
      reconnect();
    };

    newRos.on("connection", handleConnection);
    newRos.on("close", handleClose);
    newRos.on("error", handleClose);

    const reconnect = () => {
      setTimeout(() => {
        try {
          newRos.connect("ws://192.168.2.1:9090");
          console.log("reConnected to ROS");
        } catch (error) {
          console.error("Reconnection error:", error);
        }
      }, 3000);
    };
  }, []);

  ///look like POST REQ in REST API

  const publishTopic = (topicName, messageType, message) => {
    if (!ros) return;
    const topic = new ROSLIB.Topic({
      ros,
      name: topicName,
      messageType,
    });

    topic.publish(new ROSLIB.Message(message));
  };

  ///look like GET REQ in REST API
  const subscribeTopic = (topicName, messageType, callback) => {
    // if (!isConnected) {
    //   console.log("Not connected to ROS server. Cannot subscribe to topic.");
    //   return;
    // }
    if (!ros) return;
    if (activeTopics.some((t) => t.name === topicName)) {
      console.log(`Already subscribed to ${topicName}`);
      return;
    }
    const topic = new ROSLIB.Topic({
      ros: ros,
      name: topicName,
      messageType: messageType,
    });
    activeTopics.push(topic);

    console.log(`Subscribed to topic: ${topicName}`);

    topic.subscribe((message) => {
      callback(message);
    });
    // setInterval(() => {
    //   unsubscribe(topic);
    // }, 5000);
  };

  // Function to clean up all active topics (useEffect return) on unmount
  const unsubscribeAllTopics = () => {
    activeTopics.forEach((topic) => {
      topic.unsubscribe();
      console.log(`Force unsubscribed from topic: ${topic.name}`);
    });
    activeTopics.length = 0;
  };

  return (
    <ConnectionContext.Provider
      value={{
        publishTopic,
        subscribeTopic,
        unsubscribeAllTopics,
        isConnected,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}
function useRosConnection() {
  const context = useContext(ConnectionContext);
  if (context === undefined)
    throw new Error("ConnectionContext was used outside of ConnectionProvider");
  return context;
}

export { useRosConnection, ConnectionProvider };
