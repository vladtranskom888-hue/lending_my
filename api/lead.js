import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { RESEND_API_KEY, LEAD_EMAIL_TO } = process.env;

  if (!RESEND_API_KEY || !LEAD_EMAIL_TO) {
    console.error('Отсутствуют обязательные переменные окружения', {
      hasResendKey: Boolean(RESEND_API_KEY),
      hasLeadEmailTo: Boolean(LEAD_EMAIL_TO),
    });

    return res.status(500).json({
      error:
        'Server misconfiguration: set RESEND_API_KEY and LEAD_EMAIL_TO environment variables.',
    });
  }

  const { name, contact, message } = req.body ?? {};

  if (!name || !contact || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, contact, message.',
    });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>',
      to: LEAD_EMAIL_TO,
      subject: 'Новая заявка с лендинга',
      text: `Имя: ${name}\nКонтакт: ${contact}\nСообщение: ${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Ошибка отправки письма через Resend:', error);
    return res.status(500).json({
      error: 'Failed to send lead. Please try again later.',
    });
  }
}
