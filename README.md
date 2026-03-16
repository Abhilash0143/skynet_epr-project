# Skynet Aeronautics EPR System

An AI-powered **Employee Performance Review (EPR) Management System** designed for **Skynet Aeronautics Training Division**.
The platform allows administrators and instructors to evaluate trainee performance and generate **AI-based performance summaries**.

---

## 🚀 Features

* Role-based login system
* Admin dashboard for managing users
* Instructor evaluation system (EPR submission)
* Student performance tracking
* AI-generated performance summaries
* PostgreSQL database integration
* Clean React-based UI

---

## 🧑‍💻 Tech Stack

**Frontend**

* React
* TypeScript
* Tailwind CSS

**Backend**

* Node.js
* Express.js
* TypeORM

**Database**

* PostgreSQL

**AI Integration**

* Groq AI (Llama model)

---

## 📁 Project Structure

```
skynet-epr-system
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── entity
│   ├── config
│   └── app.ts
│
├── Frontend
│   ├── components
│   ├── pages
│   ├── api
│   └── main.tsx
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/skynet-epr-system.git
cd skynet-epr-system
```

---

# 🖥 Backend Setup

Navigate to backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
GROQ_API_KEY=your_groq_api_key
```

Start the backend server:

```bash
npx ts-node-dev src/app.ts
```

Backend runs on:

```
http://localhost:4000
```

---

# 🌐 Frontend Setup

Open a new terminal.

Navigate to frontend:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Login Credentials

Use the following names to log in with different roles:

| Role       | Name         |
| ---------- | ------------ |
| Admin      | **Admin**    |
| Instructor | **Kumar**    |
| Student    | **Abhilash** |

Enter the **name and role** on the login screen.

Example:

Admin Login

```
Name: Admin
Role: Admin
```

Instructor Login

```
Name: Kumar
Role: Instructor
```

Student Login

```
Name: Abhilash
Role: Student
```

---

# 📊 AI Performance Summary

The system generates an **AI-powered evaluation summary** based on EPR records.

The summary analyzes:

* Technical skills
* Instructor feedback
* Performance trends
* Training improvement areas

Each summary is limited to **50 words** and tailored for **Skynet Aeronautics training evaluation**.

---

# 🧪 Example Workflow

1. Login as **Admin**
2. Add users (Students / Instructors)
3. Login as **Instructor**
4. Select a student
5. Submit an **EPR evaluation**
6. Click **Generate AI Performance Summary**
7. View the trainee's performance analysis

---

# 📌 Future Improvements

* Instructor performance leaderboard
* Advanced AI skill gap detection
* Deployment (Frontend + Backend)
* Authentication system with JWT
* Dashboard analytics

---

# 👨‍💻 Author

**Abhilash Gowda**

---

# ⭐ If you found this project useful

Please consider giving it a **star ⭐ on GitHub**.
