import React, { useState } from "react";
import "./Enquiry.css"; // External CSS for styling

const Enquiry = () => {
  const [formData, setFormData] = useState({
    CompanyName: "",
    Name: "",
    Mobile: "",
    Email: "",
    Service: "",
    OtherService: "",
    Message: "",
  });
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error handling state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "Service" && value === "Others") {
      setShowOtherInput(true);
    } else if (name === "Service") {
      setShowOtherInput(false);
      setFormData((prevData) => ({
        ...prevData,
        OtherService: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error message before submission

    // Prepare form data object
    const formDataObj = new FormData();
    formDataObj.append("CompanyName", formData.CompanyName);
    formDataObj.append("Name", formData.Name);
    formDataObj.append("Mobile", formData.Mobile);
    formDataObj.append("Email", formData.Email);
    formDataObj.append("Service", formData.Service);
    formDataObj.append("OtherService", showOtherInput ? formData.OtherService : "");
    formDataObj.append("Message", formData.Message);

    // Send data to Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbx_yraxRSLjsGNIYdIQR15f3Jh2QdkJxaQEAY6ML8HNlA-tJgmYoR-7Y3No3pgqGzsHEg/exec", // Replace with your Google Apps Script URL
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setFormSubmitted(true);
          setIsLoading(false);

          // Reset form fields after successful submission
          setFormData({
            CompanyName: "",
            Name: "",
            Mobile: "",
            Email: "",
            Service: "",
            OtherService: "",
            Message: "",
          });
          setShowOtherInput(false); // Hide the "OtherService" field after submission

          // Hide success message after 3 seconds
          setTimeout(() => {
            setFormSubmitted(false);
          }, 3000);
        } else {
          throw new Error("Submission failed. Server returned an error.");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage("Failed to submit the enquiry. Please try again later.");
        console.error("Error:", error);
      });
  };

  return (
    <>
      {formSubmitted && (
        <div className="full-screen-success-message">
          Your enquiry has been successfully saved!
        </div>
      )}

      <div className="inquiry-section">
        <img src="/enq.png" alt="Inquiry" className="inquiry-image" />
        <div className="right-content">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="inquiry-content">
            <h2 className="inquiry-title">Request A Quote</h2>
            <p className="inquiry-description">
              Need A Free Quote? Please Feel Free to Contact Us
            </p>
            <div className="support-info">
              <div className="phone-support">
                <span className="phone-icon">📞</span>
                <a href="tel:080-29918517">080-29918517</a>
              </div>
              <div className="support-detail">
                <span className="support-icon">📞</span> 24 hrs telephone support
              </div>
            </div>
            <p className="inquiry-info">
              Once we receive your request, our representative will contact you to schedule a meeting. We will dive deeper into your requirements and customize a solution for you.
            </p>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="input-field"
              value={formData.Name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="CompanyName"
              placeholder="Company Name"
              className="input-field"
              value={formData.CompanyName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="Mobile"
              placeholder="Your Mobile"
              className="input-field"
              value={formData.Mobile}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="input-field"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <select
              name="Service"
              className="input-field select-field"
              value={formData.Service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Business Process Outsourcing(BPO)">
                Business Process Outsourcing(BPO)
              </option>
              <option value="Title & Settlement Services">
                Title & Settlement Services
              </option>
              <option value="Mortgage Services">Mortgage Services</option>
              <option value="Training and Consultancy">
                Training and Consultancy
              </option>
              <option value="Knowledge Process Outsourcing(KPO)">
                Knowledge Process Outsourcing(KPO)
              </option>
              <option value="Others">Others</option>
            </select>
            {showOtherInput && (
              <input
                type="text"
                name="OtherService"
                placeholder="Specify your required services"
                className="input-field"
                value={formData.OtherService}
                onChange={handleChange}
                required
              />
            )}
            <textarea
              name="Message"
              placeholder="Message"
              className="input-field textarea-field"
              value={formData.Message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enquiry;