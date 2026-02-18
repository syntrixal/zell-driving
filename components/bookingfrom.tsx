"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";

// ─── WhatsApp Business API Config ─────────────────────────────────────────
const WHATSAPP_PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID";
const WHATSAPP_ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";
const WHATSAPP_TO_NUMBER = "447585726191";

async function sendWhatsAppMessage(message: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: WHATSAPP_TO_NUMBER,
        type: "text",
        text: { body: message },
      }),
    },
  );
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || "WhatsApp API error");
  }
  return response.json();
}

// ─── Component ─────────────────────────────────────────────────────────────

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  courseType: string;
  date: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  postcode: "",
  courseType: "",
  date: "",
};

export function HomeBookingForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function update(key: keyof FormState, value: string) {
    setState((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setStatusMessage(null);

    const message = [
      `📋 *New Lesson Booking — Home Page*`,
      ``,
      `👤 *Name:* ${state.fullName}`,
      `📧 *Email:* ${state.email}`,
      `📞 *Phone:* ${state.phone}`,
      `📍 *Postcode:* ${state.postcode || "N/A"}`,
      `🚗 *Course Type:* ${state.courseType || "Not specified"}`,
      `📅 *Preferred Date:* ${state.date || "Not specified"}`,
    ].join("\n");

    try {
      await sendWhatsAppMessage(message);
      setStatus("success");
      setStatusMessage(
        "Thank you! Your booking request has been sent. We'll be in touch shortly.",
      );
      setState(initialState);
    } catch (err) {
      console.error("[HomeBookingForm] Failed to send WhatsApp message", err);
      setStatus("error");
      setStatusMessage(
        "Sorry, something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border-2 border-gray-200 px-5 py-4 font-medium transition focus:border-[#c41e3a] focus:outline-none";

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10 lg:p-14">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-2xl font-black sm:text-3xl">
          Book Your First Lesson
        </h2>
        <p className="text-base text-gray-600">
          Choose your preferred time and get started today
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Full Name"
            value={state.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div className="mb-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Postal Code"
            value={state.postcode}
            onChange={(e) => update("postcode", e.target.value)}
            className={inputClass}
          />
          <select
            value={state.courseType}
            onChange={(e) => update("courseType", e.target.value)}
            className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 font-medium transition focus:border-[#c41e3a] focus:outline-none"
          >
            <option value="">Select Course Type</option>
            <option value="Automatic Lessons">Automatic Lessons</option>
            <option value="Manual Lessons">Manual Lessons</option>
            <option value="Intensive Course">Intensive Course</option>
            <option value="Instructor Training">Instructor Training</option>
          </select>
          <input
            type="date"
            value={state.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Calendar className="h-5 w-5" />
            {submitting ? "Sending..." : "Book Your Lesson Now"}
          </button>

          {status !== "idle" && statusMessage && (
            <p
              className={`text-sm font-medium text-center ${status === "success" ? "text-green-700" : "text-red-700"}`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
