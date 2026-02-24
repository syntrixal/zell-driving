"use client";

import * as React from "react";

const WHATSAPP_NUMBER = "447440344154";

function buildWhatsAppMessage(state: FormState): string {
  return [
    "Hello Zell Driving School, I would like to book automatic driving lessons in Liverpool.",
    "",
    `Name: ${state.firstName} ${state.lastName}`,
    `Email: ${state.email}`,
    `Phone: ${state.telephone}`,
    `Postcode: ${state.postcode || "Not specified"}`,
    `Enquiry Type: ${state.type}`,
  ].join("\n");
}

// ─── Types ─────────────────────────────────────────────────

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

// ─── Component ─────────────────────────────────────────────

export function BookingForm() {
  const [state, setState] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const message = buildWhatsAppMessage(state);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    setSubmitting(false);
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
            {submitting ? "Opening WhatsApp..." : "Get Started"}
          </button>
        </div>
      </form>
    </section>
  );
}
