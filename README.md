<div align="center">
  <a href="https://github.com/Code2With-Pratik/BuddyCalorieTracker">
    <img src="https://github.com/Code2With-Pratik/BuddyCalorieTracker/blob/main/public/images/BuddyLogo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Calorie Tracker Buddy</h1>

  <p align="center">
    <strong>Burn That Fat Daily! 🏃‍♂️🥗</strong><br />
    A playful, motivated, and responsive health tracking landing page built with React & Tailwind CSS.
    <br />
    <br />
    <a href="https://buddycalorietracker.vercel.app/">View Demo</a>
    .
    <a href="https://github.com/Code2With-Pratik/BuddyCalorieTracker//issues">Report Bug</a>
    ·
    <a href="https://github.com/Code2With-Pratik/BuddyCalorieTracker//issues">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
</div>

<br />

<div align="center">
  <img src="https://github.com/Code2With-Pratik/BuddyCalorieTracker/blob/main/src/assets/landing-page.png" alt="Landing Page Screenshot" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" />
</div>

<br />

---

## 📖 About The Project

**Calorie Tracker Buddy** is a modern, responsive landing page designed to promote a health and fitness application. The goal was to create a warm, inviting, and energetic user interface that steps away from clinical designs and embraces a fun, gamified aesthetic.

This project showcases complex CSS positioning, responsive grid layouts, and custom Tailwind configurations to achieve a pixel-perfect match with the design specifications.

### ✨ Key Features

* **🎨 Custom UI Design:** Features a "Goal Getter" floating CTA, playful mascots, and a rich color palette (Brand Orange & Brown).
* **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop views.
* **⚡ High Performance:** Built with Vite for lightning-fast HMR and build times.
* **🧩 Component Based:** Modular architecture using React Functional Components.
* **💅 Tailwind CSS:** Utilizes custom fonts (`Poetsen One`), animations, and utility classes for rapid styling.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **React (v18)** | UI Library |
| **TypeScript** | Type Safety & Logic |
| **Tailwind CSS** | Styling Framework |
| **React Icons** | Iconography |
| **Vite** | Build Tool |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/Code2With-Pratik/BuddyCalorieTracker.git](https://github.com/Code2With-Pratik/BuddyCalorieTracker.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd calorie-tracker-buddy
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Start the development server**
    ```sh
    npm run dev
    ```

---

## 📂 Project Structure

```text
src/
├── assets/               # Static assets (images, icons, etc.)
├── components/           # UI Components
│   ├── layout/           # Global layout components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── sections/         # Individual sections of the landing page
│       ├── FAQ.tsx
│       ├── Features.tsx
│       ├── Glimpse.tsx
│       ├── Hero.tsx
│       ├── MeetBuddy.tsx
│       ├── Powers.tsx
│       ├── Process.tsx
│       └── Testimonial.tsx
├── pages/                # Page views
│   └── LandingPage.tsx   # Main landing page composition
├── App.tsx               # Main application component
├── index.css             # Global styles and Tailwind setup
└── main.tsx              # Application entry point