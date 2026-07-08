"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/company";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone number."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please share a few details about the plumbing issue.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "focus-ring w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-navy-900 shadow-sm outline-none transition placeholder:text-slate-400";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "" }
  });

  function onSubmit(data: ContactFormValues) {
    const message = [
      "Hi RS Plumbing Services, I need plumbing help.",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Message: ${data.message}`
    ].join("\n");

    window.open(whatsappUrl(message), "_self", "noopener,noreferrer");
    reset();
  }

  return (
    <form className="rounded-lg border border-navy-100 bg-white p-6 shadow-soft" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-navy-900">Name</span>
          <input className={`${inputClass} mt-2`} autoComplete="name" {...register("name")} />
          {errors.name ? <span className="mt-1 block text-sm text-red-600">{errors.name.message}</span> : null}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy-900">Email</span>
          <input className={`${inputClass} mt-2`} type="email" autoComplete="email" {...register("email")} />
          {errors.email ? <span className="mt-1 block text-sm text-red-600">{errors.email.message}</span> : null}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy-900">Phone</span>
          <input className={`${inputClass} mt-2`} autoComplete="tel" {...register("phone")} />
          {errors.phone ? <span className="mt-1 block text-sm text-red-600">{errors.phone.message}</span> : null}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy-900">Service</span>
          <select className={`${inputClass} mt-2`} {...register("service")}>
            <option value="">Select a service</option>
            <option>Leak Repair</option>
            <option>Bathroom Plumbing</option>
            <option>Kitchen Plumbing</option>
            <option>Drain Cleaning</option>
            <option>Commercial Plumbing</option>
          </select>
          {errors.service ? <span className="mt-1 block text-sm text-red-600">{errors.service.message}</span> : null}
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-navy-900">Message</span>
        <textarea className={`${inputClass} mt-2 min-h-36 resize-y`} {...register("message")} />
        {errors.message ? <span className="mt-1 block text-sm text-red-600">{errors.message.message}</span> : null}
      </label>
      <Button className="mt-6 gap-2" type="submit">
        <Send aria-hidden className="h-4 w-4" />
        Send Request
      </Button>
      {isSubmitSuccessful ? <p className="mt-4 text-sm font-semibold text-green-700">Thanks. This demo form validated successfully.</p> : null}
    </form>
  );
}
