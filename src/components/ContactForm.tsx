"use client";

import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  privacy: boolean;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Wiadomość wysłana! Skontaktujemy się wkrótce.");
  };

  return (
    <div>
      <Eyebrow>Formularz kontaktowy</Eyebrow>
      <h3 className="font-display text-[32px] font-semibold text-navy mb-8 leading-[1.2]">
        Skontaktuj się z nami
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-[6px]">
          <label className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            placeholder="Jan Kowalski"
            {...register("name", { required: true })}
            className={`font-body text-[15px] text-text-dark bg-offwhite border-[1.5px] rounded-sm px-4 py-3 outline-none transition-all duration-200 w-full
              ${errors.name ? "border-red-400" : "border-border"}
              focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)]`}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy">
            Telefon
          </label>
          <input
            type="tel"
            placeholder="+48 000 000 000"
            {...register("phone")}
            className="font-body text-[15px] text-text-dark bg-offwhite border-[1.5px] border-border rounded-sm px-4 py-3 outline-none transition-all duration-200 w-full focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)]"
          />
        </div>
        <div className="flex flex-col gap-[6px] col-span-1 sm:col-span-2">
          <label className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy">
            Adres email *
          </label>
          <input
            type="email"
            placeholder="jan@firma.pl"
            {...register("email", { required: true })}
            className={`font-body text-[15px] text-text-dark bg-offwhite border-[1.5px] rounded-sm px-4 py-3 outline-none transition-all duration-200 w-full
              ${errors.email ? "border-red-400" : "border-border"}
              focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)]`}
          />
        </div>
        <div className="flex flex-col gap-[6px] col-span-1 sm:col-span-2">
          <label className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy">
            Wiadomość *
          </label>
          <textarea
            placeholder="Opisz krótko swoją sprawę..."
            {...register("message", { required: true })}
            className={`font-body text-[15px] text-text-dark bg-offwhite border-[1.5px] rounded-sm px-4 py-3 outline-none transition-all duration-200 w-full resize-y min-h-[110px]
              ${errors.message ? "border-red-400" : "border-border"}
              focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)]`}
          />
        </div>
        <div className="flex items-start gap-[10px] text-[13px] text-text-light col-span-1 sm:col-span-2 mt-1">
          <input
            type="checkbox"
            {...register("privacy", { required: true })}
            className="accent-gold mt-[2px] flex-shrink-0"
          />
          <label>
            Akceptuję{" "}
            <a href="/polityka-prywatnosci" className="text-gold">
              politykę prywatności
            </a>{" "}
            serwisu.
          </label>
        </div>
        <div className="col-span-1 sm:col-span-2 mt-2">
          <Button type="submit" variant="primary" fullWidth showArrow>
            Wyślij wiadomość
          </Button>
        </div>
      </form>
    </div>
  );
}
