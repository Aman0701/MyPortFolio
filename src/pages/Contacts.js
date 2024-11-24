import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  db  from "../firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import { showToast } from "../Component/toast";

export const Contacts = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "contacts"), formData); // Save data to Firestore
           showToast("Form data submitted successfully!")
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <div className="contactsPage">
            <h1>Contacts</h1>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>

                <div className="contact-details">
                    <h3>Contact Info</h3>
                    <p><strong>Email:</strong> agraaman0701@gmail.com</p>
                    <p><strong>Phone:</strong> +91 774 205 3177</p>
                    <p><strong>Location:</strong> Mohania, Bihar, India</p>
                    <h3>Follow Me</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/aman-agrawal-081541113/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Aman0701" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.facebook.com/Thebossreturns" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
