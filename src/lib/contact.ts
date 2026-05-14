export const CONTACT_PHONE_DISPLAY = "+254 725 399 680";
export const CONTACT_PHONE_TEL = "+254725399680";
export const WHATSAPP_PHONE = "254725399680";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
