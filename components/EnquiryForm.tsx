"use client";

import * as React from "react";
import { sendEmail } from "@/lib/emailService";

// ─── WhatsApp Business API Config ─────────────────────────────────────────
// Replace these with your real values from Meta Business Manager
const WHATSAPP_PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID"; // e.g. "123456789012345"
const WHATSAPP_ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // e.g. "EAABx..."
const WHATSAPP_TO_NUMBER = "7585726191"; // Your WhatsApp Business number

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
  const lines: string[] = [
    `📋 *New Enquiry — ${state.enquiryType}*`,
    ``,
    `👤 *Name:* ${state.firstName} ${state.surname}`,
    `📧 *Email:* ${state.email}`,
    `📞 *Tel:* ${state.telephone}`,
    `📍 *Postcode:* ${state.postcode || "N/A"}`,
  ];

  if (state.enquiryType === "Lessons") {
    lines.push(`🎓 *Previous Lessons:* ${state.previousLessons || "N/A"}`);
    lines.push(`🚗 *Transmission:* ${state.transmissionType || "N/A"}`);
  }

  if (state.enquiryType === "Intensives") {
    lines.push(`🎓 *Previous Lessons:* ${state.previousLessons || "N/A"}`);
    lines.push(`📚 *Course Interest:* ${state.courseInterest || "Not sure"}`);
    lines.push(`🚗 *Transmission:* ${state.transmissionType || "N/A"}`);
  }

  if (state.enquiryType === "ADI Training") {
    lines.push(`🪪 *PDI or ADI:* ${state.pdiOrAdi?.toUpperCase() || "N/A"}`);
    lines.push(`🎓 *Previous Training:* ${state.previousTraining || "N/A"}`);
    lines.push(`🏢 *Current Franchise:* ${state.currentFranchise || "N/A"}`);
  }

  if (state.enquiryType === "Franchise") {
    lines.push(`🪪 *PDI or ADI:* ${state.pdiOrAdi?.toUpperCase() || "N/A"}`);
    lines.push(`🏢 *Current Franchise:* ${state.currentFranchise || "N/A"}`);
  }

  if (state.enquiryType === "Instructor Application") {
    lines.push(`🪪 *Licence Type:* ${state.licenceType || "N/A"}`);
    lines.push(`📝 *Experience:* ${state.experience || "N/A"}`);
  }

  if (state.message) {
    lines.push(``, `💬 *Message:* ${state.message}`);
  }

  return lines.join("\n");
}

// ─── Types ─────────────────────────────────────────────────────────────────

type EnquiryType =
  | "Lessons"
  | "Intensives"
  | "ADI Training"
  | "Franchise"
  | "Instructor Application";
type PreviousLessons = "yes" | "no" | "";
type TransmissionType = "automatic" | "manual" | "";
type PDIorADI = "pdi" | "adi" | "";
type CurrentFranchise = "yes" | "no" | "";
type CourseInterest =
  | ""
  | "10 Hour"
  | "15 Hour"
  | "20 Hour"
  | "25 Hour"
  | "30 Hour"
  | "35 Hour"
  | "40 Hour"
  | "45 Hour"
  | "50 Hour"
  | "Not sure";
type PreviousTraining = "yes" | "no" | "";
type LicenceType = "Manual" | "Automatic" | "Both" | "";

type FormState = {
  enquiryType: EnquiryType;
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  previousLessons: PreviousLessons;
  transmissionType: TransmissionType;
  postcode: string;
  message: string;
  courseInterest: CourseInterest;
  pdiOrAdi: PDIorADI;
  previousTraining: PreviousTraining;
  currentFranchise: CurrentFranchise;
  licenceType: LicenceType;
  experience: string;
};

const initialState: FormState = {
  enquiryType: "Lessons",
  firstName: "",
  surname: "",
  email: "",
  telephone: "",
  previousLessons: "",
  transmissionType: "",
  postcode: "",
  message: "",
  courseInterest: "",
  pdiOrAdi: "",
  previousTraining: "",
  currentFranchise: "",
  licenceType: "",
  experience: "",
};

// ─── Component ─────────────────────────────────────────────────────────────

type Props = {
  allowedTabs?: EnquiryType[];
};

export function EnquiryForm({ allowedTabs }: Props = {}) {
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
        last_name: state.surname,
        email: state.email,
        telephone: state.telephone,
        postcode: state.postcode,
        enquiry_type: state.enquiryType,
        previous_lessons: state.previousLessons,
        transmission_type: state.transmissionType,
        message: state.message,
        course_interest: state.courseInterest,
        pdi_or_adi: state.pdiOrAdi,
        previous_training: state.previousTraining,
        current_franchise: state.currentFranchise,
        licence_type: state.licenceType,
        experience: state.experience,
      } as any);

      // Send WhatsApp message
      await sendWhatsAppMessage(buildWhatsAppMessage(state));

      setStatus("success");
      setStatusMessage(
        state.enquiryType === "Instructor Application"
          ? "Thank you. Your application has been submitted successfully."
          : "Thank you. Your enquiry has been sent successfully. We'll get back to you as soon as possible.",
      );
      setState(initialState);
    } catch (err) {
      console.error("[EnquiryForm] Failed to send", err);
      setStatus("error");
      setStatusMessage(
        "Sorry, something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const allTabs: { id: EnquiryType; label: string }[] = [
    { id: "Lessons", label: "Lessons" },
    // { id: "Intensives", label: "Intensives" },
    // { id: "ADI Training", label: "ADI Training" },
    // { id: "Franchise", label: "Franchise" },
    { id: "Instructor Application", label: "Instructor Application" },
  ];

  const tabs = allowedTabs
    ? allTabs.filter((t) => allowedTabs.includes(t.id))
    : allTabs;

  // Auto-select the first visible tab on mount if needed
  React.useEffect(() => {
    if (tabs.length > 0 && !tabs.find((t) => t.id === state.enquiryType)) {
      update("enquiryType", tabs[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputClass =
    "w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition-all";

  const selectClass =
    "w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition-all";

  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <section className="w-full">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Tab Navigation */}
        <div className="flex flex-wrap bg-white border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => update("enquiryType", tab.id)}
              className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-semibold transition-all duration-200 ${
                state.enquiryType === tab.id
                  ? "bg-[#c41e3a] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={onSubmit} className="p-6 sm:p-8 space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                value={state.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                required
                placeholder={
                  state.enquiryType === "ADI Training" ? "Name" : "First Name"
                }
                className={inputClass}
              />
            </div>
            <div>
              <input
                type="text"
                value={state.surname}
                onChange={(e) => update("surname", e.target.value)}
                required
                placeholder="Surname"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              value={state.email}
              onChange={(e) => update("email", e.target.value)}
              required
              placeholder="Email"
              className={inputClass}
            />
          </div>

          {/* Telephone */}
          <div>
            <input
              type="tel"
              value={state.telephone}
              onChange={(e) => update("telephone", e.target.value)}
              required
              placeholder="Tel"
              className={inputClass}
            />
          </div>

          {/* ── Lessons ── */}
          {state.enquiryType === "Lessons" && (
            <>
              <div>
                <label className={labelClass}>
                  Have you had any previous lessons?
                </label>
                <select
                  value={state.previousLessons}
                  onChange={(e) =>
                    update("previousLessons", e.target.value as PreviousLessons)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- PLEASE SELECT --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Do you want auto or manual? Please note, Manual lessons
                  available in Atherton, Bolton &amp; Oldham ONLY
                </label>
                <select
                  value={state.transmissionType}
                  onChange={(e) =>
                    update(
                      "transmissionType",
                      e.target.value as TransmissionType,
                    )
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- PLEASE SELECT --</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </>
          )}

          {/* ── Intensives ── */}
          {state.enquiryType === "Intensives" && (
            <>
              <div>
                <label className={labelClass}>
                  Have you had any previous lessons?
                </label>
                <select
                  value={state.previousLessons}
                  onChange={(e) =>
                    update("previousLessons", e.target.value as PreviousLessons)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- PLEASE SELECT --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  What course are you interested in?
                </label>
                <select
                  value={state.courseInterest}
                  onChange={(e) =>
                    update("courseInterest", e.target.value as CourseInterest)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">Not sure</option>
                  <option value="10 Hour">10 Hour</option>
                  <option value="15 Hour">15 Hour</option>
                  <option value="20 Hour">20 Hour</option>
                  <option value="25 Hour">25 Hour</option>
                  <option value="30 Hour">30 Hour</option>
                  <option value="35 Hour">35 Hour</option>
                  <option value="40 Hour">40 Hour</option>
                  <option value="45 Hour">45 Hour</option>
                  <option value="50 Hour">50 Hour</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Auto or manual?</label>
                <select
                  value={state.transmissionType}
                  onChange={(e) =>
                    update(
                      "transmissionType",
                      e.target.value as TransmissionType,
                    )
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- PLEASE SELECT --</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </>
          )}

          {/* ── ADI Training ── */}
          {/* {state.enquiryType === "ADI Training" && (
            <>
              <div>
                <label className={labelClass}>Are you a PDI or an ADI?</label>
                <select
                  value={state.pdiOrAdi}
                  onChange={(e) =>
                    update("pdiOrAdi", e.target.value as PDIorADI)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- Please select --</option>
                  <option value="pdi">PDI</option>
                  <option value="adi">ADI</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Have you already had any training?
                </label>
                <select
                  value={state.previousTraining}
                  onChange={(e) =>
                    update(
                      "previousTraining",
                      e.target.value as PreviousTraining,
                    )
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- Please select --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Are you currently with a franchise?
                </label>
                <select
                  value={state.currentFranchise}
                  onChange={(e) =>
                    update(
                      "currentFranchise",
                      e.target.value as CurrentFranchise,
                    )
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- Please select --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </>
          )} */}

          {/* ── Franchise ── */}
          {/* {state.enquiryType === "Franchise" && (
            <>
              <div>
                <label className={labelClass}>Are you a PDI or an ADI?</label>
                <select
                  value={state.pdiOrAdi}
                  onChange={(e) =>
                    update("pdiOrAdi", e.target.value as PDIorADI)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- Please select --</option>
                  <option value="pdi">PDI</option>
                  <option value="adi">ADI</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Are you currently with a franchise?
                </label>
                <select
                  value={state.currentFranchise}
                  onChange={(e) =>
                    update(
                      "currentFranchise",
                      e.target.value as CurrentFranchise,
                    )
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- Please select --</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </>
          )} */}

          {/* ── Instructor Application ── */}
          {state.enquiryType === "Instructor Application" && (
            <>
              <div>
                <label className={labelClass}>Licence Type</label>
                <select
                  value={state.licenceType}
                  onChange={(e) =>
                    update("licenceType", e.target.value as LicenceType)
                  }
                  required
                  className={selectClass}
                >
                  <option value="">-- PLEASE SELECT --</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={state.experience}
                  onChange={(e) => update("experience", e.target.value)}
                  placeholder="Experience / Qualifications (e.g. ADI Part 1 passed)"
                  className={inputClass}
                />
              </div>
            </>
          )}

          {/* Postcode */}
          <div>
            <input
              type="text"
              value={state.postcode}
              onChange={(e) => update("postcode", e.target.value)}
              placeholder="Postcode"
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              value={state.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : state.enquiryType === "Instructor Application" ? (
                "APPLY NOW"
              ) : (
                `${state.enquiryType.toUpperCase()} ENQUIRY`
              )}
            </button>
          </div>

          {/* Status Message */}
          {status !== "idle" && statusMessage && (
            <div
              className={`p-4 rounded-lg text-sm text-center ${status === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
            >
              <p className="font-medium">{statusMessage}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
