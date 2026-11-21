import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Function to create a fresh SMTP transporter for each send
// This prevents Microsoft 365 idle socket disconnects (ECONNRESET)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000
  });
};

// Verify SMTP connection on startup
createTransporter().verify((error, success) => {
  if (error) {
    console.warn('⚠️ SMTP Configuration Warning: Transporter failed to verify.');
    console.warn('Please check your SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env file:');
    console.warn(error.message);
  } else {
    console.log('✅ SMTP Server is ready to send emails');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Demo booking email endpoint
app.post('/api/send-demo', async (req, res) => {
  try {
    const { user_name, user_email, phone_number, company, address, subject, message } = req.body;

    // Validation
    if (!user_name || !user_email || !phone_number || !company || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Phone, Company, Subject, Message).'
      });
    }

    const recipient = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;
    if (!recipient) {
      return res.status(500).json({
        success: false,
        message: 'Receiver email is not configured on the server.'
      });
    }

    // HTML Email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #2563eb, #4f46e5); color: #ffffff; padding: 28px 32px; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 32px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 500; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #f1f5f9; }
          .message-box { font-size: 15px; color: #0f172a; line-height: 1.6; background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #f1f5f9; white-space: pre-wrap; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Demo Request - VGHIMS</h1>
            <p>A new potential client has requested a product demonstration.</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${user_name}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${user_email}" style="color: #2563eb; text-decoration: none;">${user_email}</a></div>
            </div>
            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone_number}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Company / Organization</div>
              <div class="field-value">${company}</div>
            </div>
            ${address ? `
            <div class="field-group">
              <div class="field-label">Address</div>
              <div class="field-value">${address}</div>
            </div>` : ''}
            <div class="field-group">
              <div class="field-label">Subject</div>
              <div class="field-value">${subject}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Message / Requirements</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Received from VGHIMS Website Demo Booking Form &bull; ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text alternative
    const textContent = `
New Demo Request - VGHIMS
----------------------------------------
Name: ${user_name}
Email: ${user_email}
Phone: ${phone_number}
Company: ${company}
${address ? `Address: ${address}\n` : ''}Subject: ${subject}
Message:
${message}
----------------------------------------
Submitted at: ${new Date().toLocaleString()}
    `;

    const mailOptions = {
      from: `"VGHIMS Demo" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: `"${user_name}" <${user_email}>`,
      subject: `[VGHIMS Demo Request] ${subject} - ${company}`,
      text: textContent,
      html: htmlContent
    };

    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    //console.log('✅ Demo email sent successfully: MessageId %s', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Demo request sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('❌ Error sending demo email:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to submit your demo request at this moment. Please try again or contact us directly at info@voicegateindia.com.'
    });
  }
});

// Contact Us form email endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

    // Validation
    if (!user_name || !user_email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Subject, Message).'
      });
    }

    const recipient = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;
    if (!recipient) {
      return res.status(500).json({
        success: false,
        message: 'Receiver email is not configured on the server.'
      });
    }

    // HTML Email template for Contact Us
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #2563eb, #4f46e5); color: #ffffff; padding: 28px 32px; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 32px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 500; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #f1f5f9; }
          .message-box { font-size: 15px; color: #0f172a; line-height: 1.6; background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #f1f5f9; white-space: pre-wrap; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Message - VGHIMS</h1>
            <p>A new inquiry was submitted from the Contact Us page.</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${user_name}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${user_email}" style="color: #2563eb; text-decoration: none;">${user_email}</a></div>
            </div>
            <div class="field-group">
              <div class="field-label">Subject</div>
              <div class="field-value">${subject}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Received from VGHIMS Website Contact Page &bull; ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text alternative
    const textContent = `
New Contact Message - VGHIMS
----------------------------------------
Name: ${user_name}
Email: ${user_email}
Subject: ${subject}
Message:
${message}
----------------------------------------
Submitted at: ${new Date().toLocaleString()}
    `;

    const mailOptions = {
      from: `"VGHIMS Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: `"${user_name}" <${user_email}>`,
      subject: `[VGHIMS Contact Inquiry] ${subject}`,
      text: textContent,
      html: htmlContent
    };

    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent successfully: MessageId %s', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message at this moment. Please try again or contact us directly at info@voicegateindia.com.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

