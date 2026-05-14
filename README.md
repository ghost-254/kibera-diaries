# Kibera Diaries

Modern rebuild of the Kibera Diaries website using:

- Next.js 16 App Router
- TypeScript
- React 19
- Tailwind CSS 4
- Framer Motion
- React Three Fiber / Three.js
- Firebase Auth and Firestore
- Nodemailer email delivery

## Local Setup

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in real values.

Firebase is used for:

- Admin authentication
- Booking storage
- Contact message storage

Nodemailer is used for:

- Admin booking notifications
- Guest booking confirmations
- Admin contact notifications
- Guest contact confirmations

## Firebase Setup

1. Create a Firebase project.
2. Enable Email/Password sign-in under Authentication.
3. Create at least one admin user.
4. Create a Firestore database.
5. Add the client web app keys as `NEXT_PUBLIC_FIREBASE_*`.
6. Create a Firebase service account and add `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY` for server-side writes.

## Deploy To Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add all environment variables from `.env.example`.
4. Deploy.

If the GitHub repo root contains a parent folder, set Vercel's Root Directory to `kibera-diaries`.

## Notes

The old PHP/MySQL implementation has been replaced. SQL is no longer required for runtime data.
