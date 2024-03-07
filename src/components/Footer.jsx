"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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

  const SubmitSubscribe = async (e) => {
    e.preventDefault();

    setLoading(true);

    let response = await fetch("/api/subscribe/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });

    let data = await response.json();

    if (data.success == false) {
      ShowError(data.message);
      setLoading(false);
      return;
    }

    ShowSuccess(`${email} successfully subscribe to our news letter `);
    setEmail("");
    setLoading(false);
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <footer>
        <div className="footer_container">
          <div className="footer_content">
            <div className="top_content">
              <div className="company_info">
                <div className="title">
                  <h3>THEINFOIMPACT</h3>
                </div>
                <div className="subtitle">
                  <p>
                    We provides short news that save time of user and read in
                    short period of time and read in short period of time and
                    read in short period of time
                  </p>
                </div>
              </div>
              <div className="share_info">
                <div className="social_icons">
                  <nav className="social_icons">
                    <a
                      href="https://www.instagram.com/shivay_sarees/?hl=en"
                      target="_blank"
                    >
                      <i>
                        <img
                          src="/images/social_icons/insta.svg"
                          alt="instagram profile"
                          title="instgram icon"
                        />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <img
                          src="/images/social_icons/linkdin.svg"
                          alt="linkdin profile"
                          title="linkdin icon"
                        />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <img
                          src="/images/social_icons/facebook.svg"
                          alt="facebook profile"
                          title="facebook icon"
                        />
                      </i>
                    </a>
                    <a href="https://wa.me/+919099785787" target="_blank">
                      <i>
                        <img
                          src="/images/social_icons/whatsapp.svg"
                          alt="whatsapp profile"
                          title="whatsapp icon"
                        />
                      </i>
                    </a>
                  </nav>
                </div>
                <div className="subscribe">
                  <form
                    name="subscribe_form"
                    id="subscribe_form"
                    onSubmit={(e) => SubmitSubscribe(e)}
                  >
                    <div className="input">
                      <input
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                  <button
                    className="button subscribe_button"
                    form="subscribe_form"
                  >
                    {loading ? (
                      <span className="buttonloader"></span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_content">
            <div className="content">
              <div className="all_rights">@All Rights Are Reserved</div>
              <div className="links">
                <nav>
                  <a href="#">Terms & Services</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Contact Us</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
