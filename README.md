# AWS EC2 Static Website Hosting with IAM Access Control

## 🌐 Live Deployed Link
http://52.66.160.132

## 📸 EC2 Instance Screenshot (AWS Console)
![EC2 Console](Screenshots/root.png)

## 👤 User 1 - No Access
![User 1 Login](Screenshots/noAccess.png)

## 👤 User 2 - EC2 Access
![User 2 Login](Screenshots/Access.png)

## 🌐 Website Running
![Website](Screenshots/Website.png)

## ⚠️ Challenges Faced
- EC2 instance was accidentally terminated, had to relaunch from scratch
- React/Vite app required Node.js installation and npm build step before Apache could serve it
- Elastic IP had to be reallocated and reassociated after relaunching the instance
- Security group had to be configured manually to allow HTTP traffic on port 80
