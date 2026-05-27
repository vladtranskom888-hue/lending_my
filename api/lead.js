const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, contact, task } = req.body || {};

  if (!name || !contact || !task) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>',
      to: process.env.LEAD_EMAIL_TO,
      subject: 'Новая заявка с формы contact',
      text: [
        'Новая заявка:',
        `Имя: ${name}`,
        `Контакт для связи: ${contact}`,
        `Краткое описание задачи: ${task}`,
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Lead send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
