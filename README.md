# 📝 Mini Blog — Express.js REST API

A lightweight blog/posts application built with **Node.js**, **Express**, and **EJS** templating. Supports full **CRUD** operations (Create, Read, Update, Delete) for posts — all stored in-memory.

---

## 🚀 Features

- View all posts
- Create a new post
- View a single post
- Edit/update post content
- Delete a post
- UUID-based unique post IDs
- EJS templating for server-side rendering
- `method-override` support for PATCH & DELETE via HTML forms

---

## 🛠️ Tech Stack

| Technology        | Purpose                         |
|-------------------|---------------------------------|
| Node.js           | Runtime environment             |
| Express.js        | Web framework                   |
| EJS               | Server-side HTML templating     |
| UUID (v4)         | Unique ID generation for posts  |
| method-override   | PATCH/DELETE via HTML forms     |

---

## 📁 Project Structure

```
project/
├── views/
│   ├── index.ejs       # All posts listing
│   ├── show.ejs        # Single post detail
│   ├── new.ejs         # Create new post form
│   └── edit.ejs        # Edit existing post form
├── public/             # Static assets (CSS, JS, images)
├── index.js            # Main server file
└── package.json
```

---

## ⚙️ Installation & Setup

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd <project-folder>
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the server**
```bash
node index.js
```

**4. Open in browser**
```
http://localhost:8080/posts
```

---

## 📦 Dependencies

```bash
npm install express ejs uuid method-override
```

---

## 🔗 API Routes

| Method   | Route              | Description              |
|----------|--------------------|--------------------------|
| `GET`    | `/posts`           | Get all posts            |
| `GET`    | `/posts/new`       | Show create post form    |
| `POST`   | `/posts`           | Create a new post        |
| `GET`    | `/posts/:id`       | Get a single post        |
| `GET`    | `/posts/:id/edit`  | Show edit post form      |
| `PATCH`  | `/posts/:id`       | Update a post's content  |
| `DELETE` | `/posts/:id`       | Delete a post            |

---

## 📋 Sample Post Object

```json
{
  "id": "a3f1c2d4-...",
  "username": "anshu",
  "content": "Builds Things From Nothing - that's a superpower"
}
```

---

## ⚠️ Limitations

- **No database** — all posts are stored in memory and will reset on every server restart
- **No authentication** — any user can create, edit, or delete any post
- **No input validation** — empty posts can be submitted

---



## 👨‍💻 Author

Made with ANSHU using Node.js & Express
