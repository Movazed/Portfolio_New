/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { codeforces, leetcode, linkedin, resume, github, phone, email } from "../assets"; // Assuming phone and email logos are imported

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_pu0pr7i",
        "template_6yhkkd4",
        {
          from_name: form.name,
          to_name: "Arya Putatunda",
          from_email: form.email,
          to_email: "arya6v9000@gmail.com",
          message: form.message,
        },
        "xp1n18LdddoCdC1Dy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleProfileClick = (url) => {
    window.open(url, "_blank");
  };

  const handleResumeDownload = () => {
    const resumeLink = "/resume%20default.pdf";
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Arya_Putatunda_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="flex justify-center gap-4 mt-4">
          <motion.img
            src={codeforces}
            alt="Codeforces"
            className="w-6 h-6 cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={() =>
              handleProfileClick("https://codeforces.com/profile/Movazed")
            }
          />

          <motion.img
            src={leetcode}
            alt="Leetcode"
            className="w-6 h-6 cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={() =>
              handleProfileClick("https://leetcode.com/u/arya6v9000/")}
          />

          <motion.img
            src={linkedin}
            alt="LinkedIn"
            className="w-6 h-6 cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={() =>
              handleProfileClick(
                "https://www.linkedin.com/in/arya-putatunda-002b40261/"
              )
            }
          />

          <motion.img
            src={github}
            alt="GitHub"
            className="w-6 h-6 cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={() =>
              handleProfileClick("https://github.com/Movazed")
            }
          />

          <motion.img
            src={resume}
            alt="Resume"
            className="w-6 h-6 cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
            onClick={handleResumeDownload}
          />

          {/* Phone Icon beside other icons */}
          <motion.a
            href="tel:+918981938824"
            className="flex items-center gap-2"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img src={phone} alt="Phone" className="w-6 h-6" />
          </motion.a>

          {/* Email Icon beside other icons */}
          <motion.a
            href="mailto:arya6v9000@gmail.com"
            className="flex items-center gap-2"
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img src={email} alt="Email" className="w-6 h-6" />
          </motion.a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
