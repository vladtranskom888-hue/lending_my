import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const { name, contact, message, page } = req.body || {};

  if (!name || !contact || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, contact, message.' });
  }

  const { RESEND_API_KEY, LEAD_EMAIL_TO } = process.env;

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration: RESEND_API_KEY is not set.' });
  }

  if (!LEAD_EMAIL_TO) {
    return res.status(500).json({ error: 'Server misconfiguration: LEAD_EMAIL_TO is not set.' });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>',
      to: LEAD_EMAIL_TO,
      subject: 'Новая заявка с формы contact',
      text: [
        'Новая заявка:',
        `Имя: ${name}`,
        `Контакт для связи: ${contact}`,
        `Краткое описание задачи: ${message}`,
        `Страница: ${page || 'not provided'}`,
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Lead send error details:', {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
      response: error?.response,
      statusCode: error?.statusCode,
    });

    return res.status(500).json({ error: 'Failed to send email via Resend.' });
  }
}
