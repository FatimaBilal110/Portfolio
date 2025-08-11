# 💼 Personal Portfolio

A modern and responsive developer portfolio built with **Next.js** and **Tailwind CSS** — featuring a working **contact form** that stores messages in **MongoDB Atlas**.

## ✨ Features

- ⚡ Built with **Next.js App Router**
- 🎨 Styled using **Tailwind CSS**
- 📩 Fully functional **Contact Form**
- 🌐 Messages are stored securely in **MongoDB Atlas**
- 📱 Fully responsive design for all devices
- 💡 Clean, minimal, and customizable

---

## 🛠️ Tech Stack

- [Next.js]
- [Tailwind CSS]
- [MongoDB Atlas]

---

## 📂 Folder Structure

```
portfolio/
├── src/app/
│   |    ├── api/
│   |        └── contact/
│   |               └── route.js 
│   ├── layout.jsx             
│   ├── page.jsx             
│   |
|   └── components/
│          ├── ContactSection.jsx      
│          ├── Navbar.jsx     
│          ├── HeroSection.jsx        
│          ├── SkillsSection.jsx           
│          ├── ServicesSection.jsx           
│          └── AboutSection.jsx       
├── public/
│     └── Images/   
│
├── .env.local                 
├── tailwind.config.js  
├── postcss.config.js        
├── next.config.js           
├── package.json
```
    
----

📨 Contact Form Functionality

The contact form sends form data to an API route (`/api/contact`) which:

1. Accepts a `POST` request.
2. Parses the request body.
3. Connects to **MongoDB Atlas**.
4. Saves the message (`name`, `email`, `message`, `createdAt`) in the `contacts` collection.
5. Returns a JSON response with success or error.

> 💡 All messages are saved securely in the MongoDB Atlas database you configure in `.env.local`.

---

## 🧪 Test the Contact Form
1. Fill out and submit the contact form on the site.

2. The form data will be saved in your MongoDB Atlas contacts collection.

3. You’ll see a success message on the frontend.
