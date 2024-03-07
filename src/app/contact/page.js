"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "@/components/Footer";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SetInputvalue = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const SubmitContact = async(e) => {
    e.preventDefault();
    
    setLoading(true);
    let response = await fetch("/api/contact/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let data = await response.json();

    if (data.success == false) {
      ShowError(data.message);
      setLoading(false);
      return;
    }

    ShowSuccess(
      "Submited successfully, our team will contact you very soon via email !"
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setLoading(false);

  };

  const ShowError = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const ShowSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="contact_us_container">
        <div className="contact_us_content">
          <div className="contact_us_title">
            <div className="title">
              <h1>Contact us</h1>
            </div>
            <div className="contact_us_img">
              <img src="/images/final_logo_icon.png" />
            </div>
          </div>
          <div className="contact_us_body">
            <div className="contact_us_details">
              <div className="informations">
                <div className="section">
                  <div className="section_title">Address</div>
                  <div className="section_body">
                    <p>
                      40,VrajBhumi Row House, <br /> Motavrachha, <br /> Surat{" "}
                      <br /> Gujarat <br /> 394101 .
                    </p>
                  </div>
                </div>
                <div className="section">
                  <div className="section_title">Contact Information</div>
                  <div className="section_body">
                    <a href="tel:+917623919269" className="link">
                      +91 9099785787
                    </a>
                    <a href="mailto:balardarshan40@gmail.com" className="link">
                      shivaycreation13@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_us_form">
              <div className="title">
                <h1>Raise A Ticket</h1>
              </div>

              <form name="contact_form" onSubmit={(e) => SubmitContact(e)}>
                <div className="input">
                  <p>Name</p>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={1}
                    onChange={(e) => SetInputvalue(e)}
                    value={formData.name}
                  />
                </div>
                <div className="input">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => SetInputvalue(e)}
                    value={formData.email}
                  />
                </div>
                <div className="input">
                  <p>Subject</p>
                  <input
                    type="text"
                    name="subject"
                    required
                    onChange={(e) => SetInputvalue(e)}
                    value={formData.subject}
                  />
                </div>
                <div className="input">
                  <p>Message</p>
                  <textarea
                    name="message"
                    placeholder="Start Writing..."
                    rows={10}
                    required
                    minLength={20}
                    onChange={(e) => SetInputvalue(e)}
                    value={formData.message}
                  ></textarea>
                </div>
                <button className="button">
                  {loading ? (
                    <span className="buttonloader"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Contact;
