<template>
    <div>
        <div class="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center animate__animated animate__zoomIn">
        <!-- Mascot -->
            <img src="/public/landingPageManPointingDown.webp" class="w-96 relative z-50 mb-72" />
            <!-- Landing Page: Card -->
                <a-card :bordered="false" style="width: 475px;" class="text-center px-5 mx-5 mt-52 absolute card">
                   <p class="fw-bold text-4xl py-20">Forgot Password</p>
                </a-card>
        </div>
    </div>
    </div>
</template>

<script setup>
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'josean@gmail.com',
    pass: 'msmc utaw ggeu ifne'
  }
});

// Function to send an email
const sendEmail = async (to, subject, text, html) => {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'joseantoniorogelsantos@gmail.com',
      to: 'santosjoseantoniorogel@gmail.com',
      subject: 'Nuxt Test',
      text: 'Test',
      html
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = {
  sendEmail
};



</script>

<style>

</style>