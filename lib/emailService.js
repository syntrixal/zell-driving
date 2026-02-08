import emailjs from "@emailjs/browser";

/**
 * Send an email using EmailJS.
 *
 * IMPORTANT:
 * - Go to https://dashboard.emailjs.com and create:
 *   - a Service
 *   - an Email Template
 *   - a Public Key
 * - Then paste the values into your .env.local file as:
 *   - NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * This utility is frontend-only and safe to use in client components.
 *
 * @param {Record<string, any>} params - Template parameters to send to EmailJS.
 */
export async function sendEmail(params) {
  const serviceId = service_cywxd9b;
  const templateId = template_wkj080q;
  const publicKey = _hygygw0J6fGigoSu;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "[emailService] EmailJS environment variables are not configured. " +
        "Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local.",
    );
    throw new Error("Email service is not configured");
  }

  // Returns a Promise from the EmailJS SDK.
  return emailjs.send(serviceId, templateId, params, publicKey);
}

