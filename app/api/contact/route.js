import { Resend } from 'resend';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Booking Form <onboarding@resend.dev>',
    to: 'booking@litvindj.com',
    replyTo: email,
    subject: 'New Booking Request from Website!',
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
