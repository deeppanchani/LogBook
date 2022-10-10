# LogBook

## Index
- [Introduction](#introduction)
- [Purpose of LogBook](#purpose-of-logbook)
- [LogBook Attributes](#logbook-attributes)
- [Benefits of LogBook](#benefits-of-logbook)
- [Guide](#guide)
    - [How to Test an App](#how-to-test-an-app)
- [Screenshots](#screenshots)
- [Contact Us](#contact-us)


## Introduction
LogBook is made to manage staff members in an organisation and to give a quick overview of their daily duties. The administrator may use this information to add or delete employees from their organisation and to monitor their productivity. Employees can add their daily activities to the LogBook and view their performance data as pie and bar charts on the dashboard. An employee can, however, also edit his or her profile. LogBook essentially gives you the ability to manage your staff whenever you want. Employee time monitoring is one of LogBook's key features. This helps you save time and money.

## Purpose of LogBook
Employees at businesses and technical institutes set aside a significant amount of time, either in the workplace or at home, to prepare their daily, weekly, and other records. Using LogBook, employees and management may quickly create records since they have access to the information at their fingertips.

## LogBook Attributes
- This provides a foundation for the management system.
- Make sure the management method is economical.
- Additionally, it helps managers and employees communicate.
- It provides a sense of security for employees.

## Benefits of LogBook
- This approach will make managing employees less complicated.
- We can simply keep all of the personnel records by using this system.
- It will speed up the search process.
- A person with a basic understanding of computers may manage it with ease because it offers a user-friendly environment.
- Its hardware and software setup don't cost a lot of money.
- Admin can easily track and analyse work done by the employees.

## Guide
You can directly go on to the website https://managementofemployee.herokuapp.com , which hosts our app, and test it out with the credentials given in the next section of guide.

            OR     YOU      CAN     TEST    LOCALLY     BY
            
Our app comprises of two processes, namely
- Frontend (React)
- Backend (Nodejs, Express, Mongodb)

So both the processes need to be running concurrently for the proper functioning of the app. We do so by following the following steps :
1. Download the folder on your local machine to whatever location you feel comfortable with as a zip and unzip it.
2. Create a new file in the folder just parallel to index.js named as “.env”  and paste the following line on that file ``   URI = "mongodb+srv://prasoonraj:prasoontan1@cluster0.psjnyyn.mongodb.net/?retryWrites=true&w=majority"    ’’ 
3. Open two concurrent terminals for two separate processes as discussed above, and move to the project folder on both terminals.
4. Run npm  install on one of the terminals, and then after that process, run npm start on it, which will run our backend Server.
5. On second terminal do “cd Frontend”  to move to our frontend server and type “npm install” after that is done type “npm start” to start our frontend server.
6. Move to any web Browser and go to “localhost:3000” you should be good to go.

### How to Test an App
Here are some credentials to use our app without any hassle.
- Admin Access Mail: admin@gmail.com       			Password: asdf
- Employee Access Mail: test@gmail.com					Password: test

## Screenshots
### Login Page
![Login Page](./README%20Images/loginpage.png)

### Admin Dashboard
![Admin Dashboard](./README%20Images/admindashboard.png)

### Add Employee Modal
![Add Employee Modal](./README%20Images/addemployeemodal.png)

### Employee Delete
![Employee Delete](./README%20Images/employeedelete.png)

### Employee’s Task
![Employee’s Task](./README%20Images/employeestask-1.png)

![Employee’s Task](./README%20Images/employeestask-2.png)

### Employee Dashboard
![Employee Dashboard](./README%20Images/employeedashboard-1.png)

![Employee Dashboard](./README%20Images/employeedashboard-2.png)

### Edit Profile Modal
![Edit Profile Modal](./README%20Images/editprofilemodal.png)

### Add Task
![Add Task](./README%20Images/addtask.png)


## Contact Us
As this project is open source, feel free to get in touch with us and give new perspectives and helpful recommendations.

### Emails
- prasoonrajpoot038@gmail.com
- dlplearning00@gmail.com
- yuvrajsinhkamaliya@gmail.com
- patilkrushna1208@gmail.com
