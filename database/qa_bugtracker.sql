-- Create database
CREATE DATABASE IF NOT EXISTS qa_bugtracker;

USE qa_bugtracker;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('QA','Developer','Admin') NOT NULL
);

-- Bugs table
CREATE TABLE IF NOT EXISTS bugs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  severity ENUM('Critical','High','Medium','Low') NOT NULL,
  priority ENUM('High','Medium','Low') NOT NULL,
  status ENUM('New','Assigned','In Progress','Fixed','Retest','Closed','Reopened') DEFAULT 'New',
  assigned_to INT,
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (assigned_to) REFERENCES users(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bug_id INT NOT NULL,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bug_id) REFERENCES bugs(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Sample QA user
INSERT INTO users (name, email, password, role)
VALUES ('Namal Ekanayake', 'namal@example.com', 'test123', 'QA');