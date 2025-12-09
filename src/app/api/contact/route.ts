import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = (await req.json()) as Body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || process.env.CONTACT_RECIPIENT || user;

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please set SMTP and CONTACT env variables.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

  const company = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Oazan Technologies';
    const mailSubject = subject && subject.trim() ? subject.trim() : `New contact form message — ${company}`;

    await transporter.sendMail({
      from: `${company} Contact <${user}>`,
      to,
      replyTo: email,
      subject: mailSubject,
      text: `From: ${name} <${email}>
Subject: ${mailSubject}

${message}
`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${mailSubject}</p>
          <hr/>
          <p>${(message || '').replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
