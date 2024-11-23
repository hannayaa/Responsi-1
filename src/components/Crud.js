import React, { useState } from "react";

const MessageMe = () => {
  const [messages, setMessages] = useState([]); // Store messages
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // Form data
  const [editIndex, setEditIndex] = useState(null); // Track editing index

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or update a message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing message
      const updatedMessages = [...messages];
      updatedMessages[editIndex] = formData;
      setMessages(updatedMessages);
      setEditIndex(null);
    } else {
      // Add new message
      setMessages([...messages, { ...formData, sent: false }]);
    }
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  // Delete a message
  const handleDelete = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  // Edit a message
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(messages[index]);
  };

  // Mark a message as sent
  const handleSend = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].sent = true;
    setMessages(updatedMessages);
  };

  return (
    <section id="message-me" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Message Me</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control form-control-lg" // Added form-control-lg for better width
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Enter your message"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "Update Message" : "Add Message"}
          </button>
        </form>

        <h3 className="text-center mb-4">Messages</h3>
        {messages.length === 0 ? (
          <p className="text-center">No messages yet.</p>
        ) : (
          <ul className="list-group">
            {messages.map((msg, index) => (
              <li
                className={`list-group-item d-flex justify-content-between align-items-start ${
                  msg.sent ? "list-group-item-success" : ""
                }`}
                key={index}
              >
                <div>
                  <h5>{msg.name}</h5>
                  <p className="mb-1">{msg.email}</p>
                  <p>{msg.message}</p>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <button
                    className="btn btn-sm btn-warning mb-1"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger mb-1"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  {!msg.sent && (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleSend(index)}
                    >
                      Send
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MessageMe;
