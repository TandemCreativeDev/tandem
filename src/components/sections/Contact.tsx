"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

import TextInput from "../ui/TextInput";
import Checkbox from "../ui/Checkbox";

import contact_form from "@/data/contact_form.json";
import nav_items from "@/data/nav_items.json";
import Button from "../ui/Button";

export default function ContactSection() {
  const contactForm = contact_form.reduce<{ [key: string]: string }>(
    (acc, field) => {
      acc[field.id] = "";
      return acc;
    },
    {},
  );

  const [formData, setFormData] = useState(contactForm);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData();
    for (const key in formData) {
      fd.append(key, formData[key]);
    }
    const toastId = toast.loading("Sending message...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      toast.dismiss(toastId);
      if (response.ok) {
        toast.success(
          `Thanks ${
            formData.name.trim().split(" ")[0]
          }, we’ll be in touch soon!`,
        );
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
      id={nav_items[6]}
      className="m-auto flex w-10/12 grid-cols-12 flex-col gap-10  bg-white py-20 md:grid md:w-screen md:gap-0 md:py-28"
    >
      <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase">
        ■ {nav_items[6]}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="col-span-5 col-start-7 mx-auto max-w-xl"
      >
        <fieldset className="grid gap-x-8 gap-y-6">
          <legend className="text-pretty pb-6 font-tandem-condensed-medium text-4xl uppercase text-gray-500">
            <span className="text-black">Send us a message,</span> we&apos;d
            love to hear from you.
          </legend>
          {contact_form.map((field) => (
            <TextInput
              key={field.id}
              label={field.label}
              id={field.id}
              name={field.name}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              required={field.required}
              long={field.long}
              className={field.className}
            />
          ))}
          <Checkbox
            id={"privacyPolicy"}
            name={"privacyPolicy"}
            label={"Agree to our "}
            url={"/privacy-policy"}
            urlText={"privacy policy"}
            required
          />
        </fieldset>
        <Button
          type="submit"
          rel="noopener noreferrer"
          label="Let's talk"
          aria-label="Submit message"
          role="button"
        />
      </form>
    </section>
  );
}
