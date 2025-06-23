This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🚀 ERP Management System (Frontend)

A modern ERP dashboard application built with **Next.js 15**, **Tailwind CSS**, **Material UI**, **React Icons**, and **TypeScript**. It features JWT-based authentication using **HTTP-only cookies**.

---

## 📦 Tech Stack

- ⚡ **Next.js 15** (App Router)
- 🎨 **Tailwind CSS** – utility-first styling
- 🧱 **Material UI (MUI)** – for tables, modals, buttons
- 🔤 **TypeScript** – type-safe development
- 🔐 **JWT Authentication** – managed via HTTP-only cookies
- 🍪 **Cookies** – secure session storage
- ⚙️ **React Icons** – for UI icons and actions

---

## 🔐 Authentication & Middleware

- Upon login, a JWT token is stored securely in an HTTP-only cookie.
- Middleware (`middleware.ts`) ensures protected routes like `/dashboard` are only accessible with a valid token.
- Authenticated users are redirected away from `/login` and `/register`.

## Features
 Login / Register pages

 JWT session management with cookies

 CRUD for roles, departments, employees

 MUI-powered tables and dialogs

 Responsive and accessible UI with Tailwind

 Modal-based form components

 Type-safe API interactions

## Notes
Backend is powered by a .NET Web API.

## Screenshoots
![image](https://github.com/user-attachments/assets/234740c6-5586-479e-918b-e092af06af1c)
![image](https://github.com/user-attachments/assets/c01094ef-e6f3-44df-bf35-68c492c85cc2)
![image](https://github.com/user-attachments/assets/843a9968-d9a9-4ad6-bbca-bda68bc6b6b6)
![image](https://github.com/user-attachments/assets/5c41aabc-ac5e-4254-ade0-db1beb1dd7d1)
![image](https://github.com/user-attachments/assets/2b07cea1-15d8-4d76-8c88-ac3d980fec0f)
![image](https://github.com/user-attachments/assets/a2134c9d-d7fe-4a36-8633-b9a8a5e830fe)

![image](https://github.com/user-attachments/assets/01066591-c0f1-4d2e-9715-79c6fafbaf27)

