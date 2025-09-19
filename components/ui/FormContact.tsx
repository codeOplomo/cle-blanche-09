"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Ajustement du sélecteur d'indicatif pour react-phone-input-2
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .react-tel-input .selected-flag {
      height: 80%;
    }
    @media (max-width: 640px) {
      .react-tel-input .selected-flag {
        padding: 0 8px 0 8px;
      }
      .react-tel-input .country-list {
        width: 300px;
        max-width: 90vw;
      }
    }
  `;
  document.head.appendChild(style);
}
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";

const FormContact = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Le nom est requis"),
      prenom: Yup.string().required("Le prénom est requis"),
      phone: Yup.string().required("Le téléphone est requis"),
      email: Yup.string()
        .email("L'e-mail est requis et doit être valide")
        .required("L'e-mail est requis et doit être valide"),
      message: Yup.string().required("Le message est requis"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSuccess(true);
      resetForm();

      try {
        await axios.post("/leads", { ...values });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="pb-12" id="form-contact">
      <div className="container mx-auto items-center lg:px-5 px-4">
        {success ? (
          <div className="text-black backdrop-blur-3xl p-5 py-12 rounded-2xl border border-main flex flex-col gap-5 items-center text-lg text-center mt-2">
            <Image
              src={"/icons/coche.png"}
              alt="Coche"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            Merci ! Votre message a bien été envoyé. Nous vous répondrons dans
            les plus brefs délais.
          </div>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="backdrop-blur-3xl p-5 rounded-2xl border border-second flex flex-col gap-5 text-black"
          >
            {/* Nom Field */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="nom" className="text-black text-sm sm:text-base">
                Nom
              </Label>
              <Input
                id="nom"
                name="nom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nom}
                className="border-second h-10 sm:h-12 rounded-2xl text-sm sm:text-base"
              />
              {formik.touched.nom && formik.errors.nom && (
                <div className="text-red-500 text-xs sm:text-sm">{formik.errors.nom}</div>
              )}
            </div>

            {/* Prénom Field */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="prenom" className="text-black text-sm sm:text-base">
                Prénom
              </Label>
              <Input
                id="prenom"
                name="prenom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prenom}
                className="border-second h-10 sm:h-12 rounded-2xl text-sm sm:text-base"
              />
              {formik.touched.prenom && formik.errors.prenom && (
                <div className="text-red-500 text-xs sm:text-sm">{formik.errors.prenom}</div>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="phone" className="text-black text-sm sm:text-base">
                Téléphone
              </Label>
              <div className="relative w-full">
                <PhoneInput
                  country={"ma"}
                  preferredCountries={["ma", "fr"]}
                  value={formik.values.phone || ""}
                  onChange={(phone) => formik.setFieldValue("phone", phone)}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    required: true,
                    autoFocus: false,
                    className:
                      "pl-12 sm:pl-14 h-10 sm:h-12 w-full rounded-2xl border border-second text-black bg-white focus:outline-none text-sm sm:text-base",
                  }}
                  buttonClass="!border-none !bg-transparent !outline-none !left-2 sm:!left-3 !top-1.5 sm:!top-2"
                  containerClass="w-full"
                  enableSearch={true}
                  searchPlaceholder="Recherche"
                  disableDropdown={false}
                  masks={{ ma: "..-..-..-..-..", fr: "..-..-..-..-.." }}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-xs sm:text-sm">{formik.errors.phone}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="email" className="text-black text-sm sm:text-base">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border-second h-10 sm:h-12 rounded-2xl text-sm sm:text-base"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs sm:text-sm">{formik.errors.email}</div>
              )}
            </div>

            {/* Message Field - Enhanced with Textarea */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="message" className="text-black text-sm sm:text-base">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Écrivez votre message ici..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows={5}
                className="border-second rounded-2xl text-sm sm:text-base resize-none min-h-[120px] sm:min-h-[140px]"
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-xs sm:text-sm">{formik.errors.message}</div>
              )}
            </div>

            <Button
              type="submit"
              className="bg-second border border-second/40 rounded-2xl h-10 sm:h-12 hover:bg-transparent hover:text-second text-sm sm:text-base"
            >
              Envoyer
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormContact;