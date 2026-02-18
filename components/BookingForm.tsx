"use client";

import * as React from "react";
import { sendEmail } from "@/lib/emailService";

// ─── WhatsApp Business API Config ─────────────────────────────────────────
// Replace these with your real values from Meta Business Manager
const WHATSAPP_PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID"; // e.g. "123456789012345"
const WHATSAPP_ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // e.g. "EAABx..."
const WHATSAPP_TO_NUMBER = "447585726191"; // Your WhatsApp Business number (UK format)

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

function buildWhatsAppMessage(state: FormState): string {
  return [
    `📋 *New Booking Request — ${state.type}*`,
    ``,
    `👤 *Name:* ${state.firstName} ${state.lastName}`,
    `📧 *Email:* ${state.email}`,
    `📞 *Tel:* ${state.telephone}`,
    `📍 *Postcode:* ${state.postcode || "N/A"}`,
    `🚗 *Type:* ${state.type}`,
  ].join("\n");
}

// ─── Types ─────────────────────────────────────────────────────────────────

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  postcode: string;
  type:
    | "Driving Lessons"
    | "Automatic Driving Lessons"
    | "Intensive Course"
    | "Instructor Training";
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  postcode: "",
  type: "Driving Lessons",
};

// ─── Component ─────────────────────────────────────────────────────────────

export function BookingForm() {
  const [state, setState] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setStatusMessage(null);

    try {
      // Send email
      await sendEmail({
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        telephone: state.telephone,
        postcode: state.postcode,
        enquiry_type: state.type,
      });

      // Send WhatsApp message
      await sendWhatsAppMessage(buildWhatsAppMessage(state));

      setStatus("success");
      setStatusMessage(
        "Thank you. Your booking request has been sent successfully.",
      );
      setState(initialState);
    } catch (err) {
      console.error("[BookingForm] Failed to send", err);
      setStatus("error");
      setStatusMessage(
        "Sorry, something went wrong while sending your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <input
            value={state.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            required
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[var(--primary)] transition-colors"
            placeholder="First Name"
          />
        </label>

        <label className="grid gap-2">
          <input
            value={state.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            required
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[var(--primary)] transition-colors"
            placeholder="Last Name"
          />
        </label>

        <label className="grid gap-2">
          <input
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            type="email"
            required
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[var(--primary)] transition-colors"
            placeholder="Email"
          />
        </label>

        <label className="grid gap-2">
          <input
            value={state.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            required
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[var(--primary)] transition-colors"
            placeholder="Telephone"
          />
        </label>

        <label className="grid gap-2">
          <input
            value={state.postcode}
            onChange={(e) => update("postcode", e.target.value)}
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[var(--primary)] transition-colors"
            placeholder="Postcode"
          />
        </label>

        <label className="grid gap-2">
          <select
            value={state.type}
            onChange={(e) =>
              update("type", e.target.value as FormState["type"])
            }
            className="h-12 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-800 outline-none focus:border-[var(--primary)] transition-colors"
          >
            <option>Driving Lessons</option>
            <option>Automatic Driving Lessons</option>
          </select>
        </label>

        <div className="sm:col-span-2 mt-4 flex flex-col items-center justify-center gap-3">
          <button
            type="submit"
            className="btn-primary w-40 justify-center"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Get Started"}
          </button>
          {status !== "idle" && statusMessage && (
            <p
              className={`text-xs ${status === "success" ? "text-green-700" : "text-red-700"}`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
