// emailService.ts
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email-username',
    pass: 'your-email-password'
  }
});

function generateResetToken(): string {
  return crypto.randomBytes(20).toString('hex');
}


export async function sendVerificationCodeEmail(email: string, verificationCode: number) {
  const resetToken = generateResetToken();

  const mailOptions = {
    from: 'your-email-username',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return { message: 'Verification code sent successfully' };
  } catch (error) {
    return { message: 'Error sending email' };
  }
}

