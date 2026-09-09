'use server';

import nodemailer from 'nodemailer';

export interface ConsultationFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitConsultationAction(
  prevState: ConsultationFormState | null,
  formData: FormData
): Promise<ConsultationFormState> {
  const firstName = (formData.get('firstName') as string)?.trim() || '';
  const lastName = (formData.get('lastName') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const phone = (formData.get('phone') as string)?.trim() || '';
  const service = (formData.get('service') as string)?.trim() || '';
  const destination = (formData.get('destination') as string)?.trim() || '';
  const message = (formData.get('message') as string)?.trim() || '';

  // Validation
  const errors: Record<string, string> = {};

  if (!firstName) errors.firstName = 'First name is required.';
  if (!lastName) errors.lastName = 'Last name is required.';
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!phone) errors.phone = 'Phone number is required.';
  if (!service) errors.service = 'Please select a service of interest.';
  if (!destination) errors.destination = 'Please select a target destination.';

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please complete all required fields correctly.',
      errors,
    };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error(
      '[Nodemailer] Gmail credentials missing: Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local'
    );
    return {
      success: false,
      message:
        'Email service configuration is pending. Please verify GMAIL_USER and GMAIL_APP_PASSWORD in your environment file.',
    };
  }

  const fullName = `${firstName} ${lastName}`;
  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Surya Overseas Consultations" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: `"${fullName}" <${email}>`,
      subject: `New Consultation Request: ${fullName} — ${service} (${destination})`,
      text: `
SURYA OVERSEAS - NEW CONSULTATION REQUEST
-----------------------------------------
Received: ${submissionDate} (IST)

CLIENT DETAILS:
- Full Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Service: ${service}
- Destination: ${destination}

CLIENT'S GOALS / MESSAGE:
${message || 'No additional notes provided.'}

-----------------------------------------
Note: You can directly reply to this email to contact ${fullName} (${email}).
      `.trim(),
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Consultation Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #F8F7F4;
      color: #2D3748;
    }
    .wrapper {
      width: 100%;
      background-color: #F8F7F4;
      padding: 40px 15px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 1px solid #E2D9CC;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
      padding: 36px 30px;
      text-align: center;
      border-bottom: 3px solid #D4AF37;
    }
    .header h1 {
      color: #FFFFFF;
      font-size: 22px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin: 0 0 8px 0;
      font-weight: 700;
    }
    .header p {
      color: #D4AF37;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0;
      font-weight: 600;
    }
    .content {
      padding: 32px 30px;
    }
    .badge {
      display: inline-block;
      background-color: #F5EFE6;
      color: #B38F24;
      padding: 6px 12px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 2px;
      margin-bottom: 24px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
    }
    .data-table th {
      text-align: left;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #718096;
      padding: 10px 0;
      width: 35%;
      border-bottom: 1px solid #EDF2F7;
      vertical-align: top;
    }
    .data-table td {
      font-size: 14px;
      color: #0A192F;
      font-weight: 500;
      padding: 10px 0;
      border-bottom: 1px solid #EDF2F7;
      vertical-align: top;
    }
    .data-table a {
      color: #0A192F;
      text-decoration: underline;
    }
    .message-box {
      background-color: #FAF8F5;
      border-left: 4px solid #D4AF37;
      padding: 18px 20px;
      border-radius: 0 4px 4px 0;
      margin-bottom: 28px;
    }
    .message-box h3 {
      margin: 0 0 10px 0;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #0A192F;
    }
    .message-box p {
      margin: 0;
      font-size: 13px;
      line-height: 1.6;
      color: #4A5568;
      white-space: pre-wrap;
    }
    .button-wrap {
      text-align: center;
      margin: 32px 0 10px 0;
    }
    .button {
      display: inline-block;
      background-color: #0A192F;
      color: #FFFFFF !important;
      padding: 14px 28px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
    }
    .footer {
      background-color: #F8F7F4;
      border-top: 1px solid #E2D9CC;
      padding: 20px;
      text-align: center;
      font-size: 11px;
      color: #718096;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>Surya Overseas</h1>
        <p>New Consultation Request</p>
      </div>
      <div class="content">
        <span class="badge">Received: ${submissionDate}</span>
        
        <table class="data-table">
          <tr>
            <th>Client Name</th>
            <td><strong>${fullName}</strong></td>
          </tr>
          <tr>
            <th>Email Address</th>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <th>Service</th>
            <td><strong>${service}</strong></td>
          </tr>
          <tr>
            <th>Target Destination</th>
            <td><strong>${destination}</strong></td>
          </tr>
        </table>

        <div class="message-box">
          <h3>Client Goals / Notes:</h3>
          <p>${message ? message : '<em>No additional goals specified.</em>'}</p>
        </div>

        <div class="button-wrap">
          <a href="mailto:${email}?subject=Regarding%20Your%20Consultation%20with%20Surya%20Overseas" class="button">Reply to Client</a>
        </div>
      </div>
      <div class="footer">
        This notification was delivered automatically from the Surya Overseas consultation portal.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message:
        'Thank you! Your consultation request has been submitted successfully. Our advisory team will reach out to you shortly.',
    };
  } catch (error: any) {
    console.error('[Nodemailer Error]:', error);
    return {
      success: false,
      message:
        error?.message ||
        'Failed to send consultation request. Please check your Gmail configuration or try again later.',
    };
  }
}
