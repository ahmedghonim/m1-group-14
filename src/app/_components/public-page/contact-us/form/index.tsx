"use client";
import React from "react";
import { useTranslation } from "@/i18n/client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@/app/_ui";

interface ContactInputProps {
  placeHolder: string;
  name: string;
  label: string;
  type?: string;
}

// single input component
const ContactInput = ({
  placeHolder,
  name,
  label,
  type = "",
}: ContactInputProps) => {
  return (
    <div className="w-full bg-light-300 !rounded-[4px]">
      <Input
        name={name}
        placeholder={placeHolder}
        type={type}
        isForm
        label={label}
        className="!text-primary-100"
        labelStyle="!text-primary-100 font-normal"
      />
    </div>
  );
};

export type ContactFormProps = Yup.InferType<typeof validationSchema>;
const validationSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  mail: Yup.string().required(),
  phone: Yup.string().required(),
  subject: Yup.string().required(),
  message: Yup.string().max(300).required(),
});
function ContactForm({ isLoading }: { isLoading?: boolean }) {
  const { t } = useTranslation("common");
  const initialValues = {
    first_name: "",
    last_name: "",
    mail: "",
    phone: "",
    subject: "",
    message: "",
  };
  function onSubmit(values: ContactFormProps) {
    console.log("values >>>> ", values);
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col lg:gap-6 gap-6 sm:gap-3 lg:ltr:pr-[51px] sm:ltr:pr-[15px] lg:rtl:pl-[51px] sm:rtl:pl-[15px]">
        <div className="grid md:grid-cols-2 md:gap-8 gap-4">
          <ContactInput
            name="first_name"
            placeHolder={t("first_name")}
            label={t("first_name")}
          />
          <ContactInput
            name="last_name"
            placeHolder={t("last_name")}
            label={t("last_name")}
          />
          <ContactInput
            name="mail"
            placeHolder={t("email")}
            type="email"
            label={t("email")}
          />
          <ContactInput
            name="phone"
            placeHolder={t("phone_number")}
            label={t("phone_number")}
          />
          <ContactInput
            name="subject"
            placeHolder={t("subject")}
            label={t("subject")}
          />
        </div>
        <div className="bg-light-300 !rounded-[4px]">
          <ContactInput
            name="message"
            placeHolder={t("message")}
            label={t("message")}
          />
        </div>
        <div className="flex justify-end">
          <Button
            isLoading={isLoading}
            type="submit"
            style="secondary"
            className="sm:!w-fit w-full ml-auto py-[15px] !px-[48px] !rounded !text-[16px] "
            font="mid"
          >
            {t("send_message")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
export default ContactForm;
