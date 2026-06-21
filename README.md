# ReWear Style - Backend & Frontend Setup

This project uses a standard Java Servlet backend running on Embedded Tomcat with MySQL for the database, and a static HTML/JS frontend.

## Prerequisites
- **Java 11** or higher
- **Maven**
- **MySQL** installed locally
- **Node.js** (optional, recommended for serving the frontend)

## 1. Database Setup
1. Create a MySQL database and user. You can use the provided script in `database/rewear_schema.sql` if available, or create it manually:
   ```sql
   CREATE DATABASE rewear;
   ```
2. Make sure your tables (`users`, `products`, `orders`, etc.) are created.

## 2. Running the Backend
The backend runs using Embedded Tomcat, so you do not need to install a standalone Tomcat server.

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Set the necessary environment variables for your MySQL connection.
   **On Windows (Command Prompt):**
   ```cmd
   set DB_URL=jdbc:mysql://localhost:3306/rewear
   set DB_USER=root
   set DB_PASSWORD=your_mysql_password
   ```
   **On Windows (PowerShell):**
   ```powershell
   $env:DB_URL="jdbc:mysql://localhost:3306/rewear"
   $env:DB_USER="root"
   $env:DB_PASSWORD="your_mysql_password"
   ```
   *(Note: Replace `your_mysql_password` with your actual MySQL password)*

3. Compile and run the backend using Maven:
   ```bash
   mvn clean compile exec:java
   ```
4. The backend should now be running on `http://localhost:8080`.

## 3. Running the Frontend
You can serve the frontend using any basic HTTP server to avoid CORS/file protocol issues.

**Using Python:**
1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Start a simple server:
   ```bash
   python -m http.server 3000
   ```
3. Open your browser to `http://localhost:3000/index.html`.

**Using Node.js (npx):**
1. Navigate to the `frontend` folder.
2. Run `npx serve .`
3. Open your browser to the local address provided.

Now your frontend should successfully communicate with the Java backend!
