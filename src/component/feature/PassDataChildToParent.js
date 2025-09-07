import React, { useState } from 'react';

// Child component
export const ChildComponent = ({ sendDataToParent }) => {
    const handleSend = () => {
        const childData = {
            name: "Child Name",
            message: "Hello from Child!"
        };
        sendDataToParent(childData); // Send data to parent
    };

    return (
        <div style={{
            background: "#f0f0f0",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "20px auto",
            maxWidth: "300px"
        }}>
            <button 
                style={{
                    background: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
                onClick={handleSend}
            >
                Send Data to Parent
            </button>
        </div>
    );
};

// Parent component
const PassDataChildToParent = () => {
    const [receivedData, setReceivedData] = useState(null);

    // Callback to receive data from child
    const handleChildData = (data) => {
        setReceivedData(data);
    };

    return (
        <div style={{ textAlign: "center", background: "#e3e3e3", minHeight: "100vh", padding: "40px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Parent Component</h2>
            <ChildComponent sendDataToParent={handleChildData} />
            {receivedData && (
                <div style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "#d4edda",
                    borderRadius: "6px",
                    display: "inline-block"
                }}>
                    <p><strong>Received from Child:</strong></p>
                    <p>Name: {receivedData.name}</p>
                    <p>Message: {receivedData.message}</p>
                </div>
            )}
        </div>
    );
};

export default PassDataChildToParent;
