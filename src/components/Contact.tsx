"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

import TextInput from "./ui/TextInput";
import Checkbox from "./ui/Checkbox";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("company", formData.company);
    fd.append("email", formData.email);
    fd.append("phoneNumber", formData.phoneNumber);
    fd.append("message", formData.message);
    const toastId = toast.loading("Sending message...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      toast.dismiss(toastId);
      if (response.ok) {
        toast.success(`Thanks ${formData.firstName}, we’ll be in touch soon!`);
      } else {
        toast.error(`Something went wrong: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error("Failed to send message. Please try again later.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-white w-10/12 m-auto gap-10 md:gap-0 md:w-screen py-20 md:py-36 flex flex-col md:grid grid-cols-12"
    >
      <h2 className="uppercase font-tandem-mono-medium text-xs col-start-3 col-span-1">
        ■ Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl col-span-5 col-start-7"
      >
        <fieldset className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <legend className="text-gray-500 pb-6 text-4xl font-tandem-condensed-medium uppercase">
            <span className="text-black">Send us a message</span> we&apos;d love
            to hear from you!
          </legend>
          <TextInput
            label={"First Name"}
            id={"firstName"}
            name={"firstName"}
            type={"text"}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextInput
            label={"Last Name"}
            id={"lastName"}
            name={"lastName"}
            type={"text"}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextInput
            label={"Company"}
            id={"company"}
            name={"company"}
            type={"text"}
            value={formData.company}
            onChange={handleChange}
            className="sm:col-span-2"
          />
          <TextInput
            label={"Email"}
            id={"email"}
            name={"email"}
            type={"email"}
            value={formData.email}
            onChange={handleChange}
            className="sm:col-span-2"
            required
          />
          <TextInput
            label={"Phone Number"}
            id={"phoneNumber"}
            name={"phoneNumber"}
            type={"tel"}
            value={formData.phoneNumber}
            onChange={handleChange}
            className="sm:col-span-2"
          />
          <TextInput
            label={"Message"}
            id={"message"}
            name={"message"}
            type={"text"}
            value={formData.message}
            onChange={handleChange}
            className="sm:col-span-2"
            required
            long
          />
          <Checkbox
            id={"privacyPolicy"}
            name={"privacyPolicy"}
            label={"Agree to our "}
            url={"/privacy-policy"}
            urlText={"privacy policy"}
            required
          />
        </fieldset>
        <button
          type="submit"
          className="font-tandem-mono-regular uppercase bg-black block text-white w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
        >
          Let&apos;s talk
        </button>
      </form>
    </section>
  );
}
