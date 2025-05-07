# 📦 Blogs Backend

This is the **Express.js** backend for the blog application. It provides RESTful APIs to manage blog posts using MongoDB.
This frontend is deployed on vercelplatform here is the link for that:-https://blog-platform-frontend-git-main-paras-projects-fc26fd1a.vercel.app/

## 🔧 Setup Instructions

### 1. Navigate to the backend folder:
```bash
cd Blogs-Backend
2. Install dependencies:
bash
Copy
Edit
npm install
3. Configure Environment Variables:
Create a .env file in the root of the project:

ini
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogsDB
⚠️ If deploying on Render, update your .env file with your Render-provided MongoDB URI if applicable.

4. Start the server locally:
bash
Copy
Edit
npm start
The server will run at: http://localhost:5000

🚀 Deployment
This backend is hosted on Render. Use your deployed Render URL to access the API (e.g. https://your-backend-service.onrender.com).

📡 API Routes
Method	Route	Description
GET	/api/all	Get all blogs
GET	/api/all/:id	Get single blog
POST	/api/add	Create blog
PUT	/api/edit/:id	Update blog
DELETE	/api/:id	Delete blog

yaml
Copy
Edit

---

### ✅ **Updated: `Blogs-Frontend-README.md`**

```markdown
# 🌐 Blogs Frontend

This is the **React.js** frontend for the blog application. It communicates with the backend APIs to display and manage blog posts.

## 🔧 Setup Instructions

### 1. Navigate to the frontend folder:
```bash
cd Blogs-Frontend
2. Install dependencies:
bash
Copy
Edit
npm install
3. Configure Environment Variables:
Create a .env file in the root of your project:

ini
Copy
Edit
REACT_APP_BACKEND_URL=https://your-backend-service.onrender.com
Replace the value with your actual deployed Render backend URL.

4. Start the frontend server locally:
bash
Copy
Edit
npm start
Frontend will run on: http://localhost:3000

Features
View list of all blogs

Create a new blog

Edit existing blogs

Delete blogs

View individual blog details

Professional UI with Tailwind CSS

 Environment-based API Usage
In your React code, use:

js
Copy
Edit
axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/all`);
This allows easy switching between local and deployed environments.

yaml
Copy
Edit

---
