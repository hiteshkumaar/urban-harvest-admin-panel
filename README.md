# Urban Harvest Admin Panel

Hey there! Welcome to the Urban Harvest Admin Panel. 

This is a modern frontend admin dashboard built for a fictional food delivery and agriculture platform. It's designed to give store admins or managers a quick overview of what's happening with their orders, revenue, and product inventory.

We built this mainly to showcase a clean, responsive UI with a solid frontend architecture. It uses dummy JSON data right now, so there's no backend to worry about—it just works out of the box!

## What's inside?

- **React + Vite:** Super fast development server and build tool.
- **Redux Toolkit:** For handling global state like the dark mode theme, sidebar toggle, and dummy data.
- **Tailwind CSS v4:** For all the styling. It's clean, responsive, and easy to tweak.
- **Framer Motion:** Adds those nice, smooth little animations when you hover over cards or change pages.
- **Recharts:** Used for the revenue area chart on the dashboard.
- **Lucide React:** Clean and simple SVG icons.

## Features

- **Auth Screen:** A nice-looking login page with simple form validation. (Use `admin@urbanharvest.com` and `password123` to get in).
- **Dark/Light Mode:** Toggleable theme that saves to Redux state.
- **Dashboard Overview:** Stat cards showing total orders, revenue, active users, and a chart for monthly revenue.
- **Product Management:** A page to view your products. You can switch between a grid layout (cards) and a list layout (table).
- **Responsive Layout:** Works great on desktop, and collapses down to a nice drawer menu on mobile devices.

## How to set it up

Getting this running locally is super easy since there's no database to connect. 

### 1. Install dependencies
Make sure you have Node.js installed. Open your terminal in this project folder and run:
```bash
npm install
```

### 2. Start the dev server
Once the packages are installed, start up Vite:
```bash
npm run dev
```

### 3. Open it up
The terminal will give you a local URL (usually `http://localhost:5173`). Open that in your browser!

### Login Info
Since it's using mock data, just use these credentials to get past the login screen:
- **Email:** `admin@urbanharvest.com`
- **Password:** `password123`

## Folder Structure Quick Guide

If you want to dig into the code, here's how it's laid out:
- `src/components/`: Reusable pieces. Split into `common` (buttons, inputs), `layout` (sidebar, header), and feature-specific folders.
- `src/pages/`: The main views (Dashboard, Login, Products).
- `src/redux/`: Where the Redux store and slices (auth, theme, dashboard) live.
- `src/data/`: Contains `mockData.js` which holds the dummy JSON used across the app.

Feel free to poke around and change things up!
