# Contact Form Setup Instructions

## Overview
Your contact form is now set up to send emails using Resend, which is perfect for Vercel deployments.

## Setup Steps

### 1. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

#### For Local Development:
1. Open `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

#### For Vercel Deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add a new environment variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environment: Production (and Preview if needed)

### 3. Domain Verification (Optional but Recommended)
For production use, you should verify your domain with Resend:
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Follow the DNS verification steps
4. Once verified, update the API route to use your domain instead of `onboarding@resend.dev`

### 4. Test the Contact Form
1. Fill out the contact form on your website
2. Check your email (anindyachakladar9@gmail.com) for the message
3. Verify that the reply-to address is set to the sender's email

## Features Implemented

✅ **Form Validation**: Client-side validation using Zod schema
✅ **Email Sending**: Server-side email sending via Resend API
✅ **User Feedback**: Toast notifications for success/error states
✅ **Loading States**: Button shows "Sending..." during submission
✅ **Error Handling**: Proper error messages for various scenarios
✅ **Responsive Design**: Works on all device sizes
✅ **Reply-To Setup**: You can reply directly to the sender's email
✅ **Professional Email Template**: Clean HTML email format

## Email Template Features
- Professional styling with your accent color
- Clear contact information display
- Formatted message content
- Reply-to functionality
- Sender identification

## Security Notes
- API key is stored in environment variables (not in code)
- Form validation prevents malicious input
- Rate limiting can be added if needed
- CORS is handled by Next.js API routes

## Troubleshooting
- If emails aren't sending, check the Vercel function logs
- Ensure the API key is correctly set in environment variables
- Check Resend dashboard for delivery status
- Verify that the sender email domain is allowed by Resend