import React from "react";
import ContactForm, { ContactFormProps } from "./form";
import ContactInfo from "./contact-infos";
import clsx from "clsx";

function ContactUsForm({
  className,
  onSubmit,
  isLoading,
  lang,
}: {
  className?: string;
  onSubmit: (value: ContactFormProps) => void;
  isLoading?: boolean;
  lang: "ar" | "en";
}) {
  return (
    <section
      className={clsx(
        "bg-white  contact-shadow mt-[80px] pb-[100px] md:pb-0 flex flex-col sm:flex-row justify-between items-start w-full rounded-[10px]",
        className
      )}
    >
      <ContactInfo lang={lang} />
      <div className="sm:w-[55%] w-full lg:pt-12 pt-4 sm:pt-0">
        <ContactForm isLoading={isLoading} />
      </div>
    </section>
  );
}

export default ContactUsForm;
