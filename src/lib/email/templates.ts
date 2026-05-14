type BookingTemplateInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tourTitle: string;
  numberOfPeople: number;
  tourDate: string;
  totalAmount: number;
  specialRequests?: string;
};

type ContactTemplateInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const styles = {
  shell:
    "margin:0;background:#f7f3ec;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#17130f;",
  card:
    "max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e7e0d4;border-radius:12px;overflow:hidden;",
  header: "background:#102f2b;color:#ffffff;padding:28px 32px;",
  body: "padding:30px 32px;",
  label: "font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#66756c;margin:0 0 6px;",
  value: "font-size:16px;line-height:1.6;margin:0 0 18px;",
  footer: "border-top:1px solid #eee5d8;padding:20px 32px;color:#6b6258;font-size:13px;",
};

function baseTemplate(title: string, preview: string, body: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="${styles.shell}">
    <div style="display:none;max-height:0;overflow:hidden;">${preview}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td>
          <div style="${styles.card}">
            <div style="${styles.header}">
              <p style="margin:0 0 8px;color:#fbbf24;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;">Kibera Diaries</p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;">${title}</h1>
            </div>
            <div style="${styles.body}">
              ${body}
            </div>
            <div style="${styles.footer}">
              Kibera Diaries will never ask for sensitive payment details by email. Please contact us directly if anything looks unusual.
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function bookingAdminTemplate(input: BookingTemplateInput) {
  return baseTemplate(
    "New Booking Request",
    `${input.firstName} requested ${input.tourTitle}`,
    `
      <p style="${styles.label}">Guest</p>
      <p style="${styles.value}">${input.firstName} ${input.lastName}<br />${input.email}<br />${input.phone}</p>
      <p style="${styles.label}">Tour</p>
      <p style="${styles.value}">${input.tourTitle}<br />${input.numberOfPeople} guest(s)<br />${input.tourDate}</p>
      <p style="${styles.label}">Estimated Total</p>
      <p style="${styles.value}">$${input.totalAmount.toFixed(2)}</p>
      <p style="${styles.label}">Special Requests</p>
      <p style="${styles.value}">${input.specialRequests || "None provided"}</p>
    `,
  );
}

export function bookingGuestTemplate(input: BookingTemplateInput) {
  return baseTemplate(
    "We Received Your Booking",
    "Your Kibera Diaries booking request is in.",
    `
      <p style="${styles.value}">Hi ${input.firstName},</p>
      <p style="${styles.value}">Thank you for booking <strong>${input.tourTitle}</strong>. We received your request for ${input.numberOfPeople} guest(s) on ${input.tourDate}.</p>
      <p style="${styles.value}">Estimated total: <strong>$${input.totalAmount.toFixed(2)}</strong>.</p>
      <p style="${styles.value}">Our team will confirm guide availability and payment details shortly.</p>
    `,
  );
}

export function contactAdminTemplate(input: ContactTemplateInput) {
  return baseTemplate(
    "New Contact Message",
    `${input.name} sent a message through the site.`,
    `
      <p style="${styles.label}">From</p>
      <p style="${styles.value}">${input.name}<br />${input.email}</p>
      <p style="${styles.label}">Subject</p>
      <p style="${styles.value}">${input.subject}</p>
      <p style="${styles.label}">Message</p>
      <p style="${styles.value}">${input.message.replace(/\n/g, "<br />")}</p>
    `,
  );
}

export function contactGuestTemplate(input: ContactTemplateInput) {
  return baseTemplate(
    "Message Received",
    "Kibera Diaries received your message.",
    `
      <p style="${styles.value}">Hi ${input.name},</p>
      <p style="${styles.value}">Thanks for contacting Kibera Diaries. We received your message about <strong>${input.subject}</strong> and will respond as soon as possible.</p>
      <p style="${styles.value}">Your message:</p>
      <p style="${styles.value}">${input.message.replace(/\n/g, "<br />")}</p>
    `,
  );
}
