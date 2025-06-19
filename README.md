# Tandem Creative Dev Website

This repository contains the source for the Tandem Creative Dev marketing site. It is built with **Next.js 15** and **TypeScript** and uses the App Router. The site showcases services, recent work and testimonials, and includes a contact form powered by Nodemailer.

## Key Features

- **TypeScript & React 19** – modern React with strict typing.
- **Tailwind CSS** – styling via Tailwind (see `tailwind.config.ts`).
- **Custom Fonts** – locally hosted fonts configured in `src/fonts` and applied via `next/font`.
- **Data Driven** – navigation, services, projects and form fields are defined in JSON files under `src/data`.
- **Geolocation Time Display** – the header/footer show your local time using the `Time` component and `geolocation-db.com`.
- **Contact Form** – posts to `/api/contact` and sends confirmation emails through Nodemailer.
- **Accessibility Considerations** – responsive layout with animated components that respect "prefers-reduced-motion".
- **Commit Hooks** – Husky and Commitlint enforce commit message style.

## Getting Started

Install dependencies and create a `.env.local` with mail credentials used by Nodemailer:

```bash
EMAIL_HOST=your.smtp.host
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=username@example.com
EMAIL_PASSWORD=yourpassword
```

Then run the development server:

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Useful Scripts

- `npm run build` – build for production.
- `npm run start` – start the compiled app.
- `npm run lint` – run ESLint (`next/core-web-vitals`).

## Project Structure

- `src/app` – Next.js routes including the main page and privacy policy.
- `src/components` – UI and layout components.
- `src/data` – JSON content used throughout the site.
- `src/utils` – helper utilities (Nodemailer setup, timezone functions).
- `public` – static assets such as images used in the portfolio.

## License

All content &copy; Tandem Creative Dev. See individual source files for license details.
