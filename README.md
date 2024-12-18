# Expense Tracker - Full Stack Project with React, Node.js, MongoDB, and GraphQL

## Overview

Welcome to the **Expense Tracker** application! This project is a full-stack web application built with React for the frontend, Node.js (with Express) for the backend, MongoDB as the database, and GraphQL as the API layer. The goal of this project is to track expenses, categorize them, and visualize the data through an intuitive and easy-to-use interface.

### Key Features:
- **Track Expenses**: Add, edit, and delete your expenses.
- **Category-wise Expense Breakdown**: Categorize your expenses (e.g., Savings, Expenses, Investments) and see how much you spend in each category.
- **Expense Visualization**: View your expenses through a dynamic Doughnut chart using `react-chartjs-2` to help you better understand your spending habits.
- **User Authentication**: Secure login and registration system.
- **GraphQL API**: A GraphQL API is used to interact with the data, replacing traditional RESTful APIs.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **API Layer**: GraphQL
- **Authentication**: Passport.js
- **Charting**: react-chartjs-2 (for visualizing expenses)

---

## How GraphQL Helps in This Project

One of the key features of this project is the use of **GraphQL** as the API layer. GraphQL provides a more efficient, flexible, and powerful way to interact with the backend compared to traditional REST APIs. Below are some of the benefits GraphQL offers in this expense tracker project:

### Benefits of Using GraphQL

1. **Single Endpoint**: 
   - Unlike REST APIs, where you need to make separate requests for different resources (e.g., `/users`, `/expenses`, `/transactions`), GraphQL uses a single endpoint. This makes the process simpler and easier to maintain.

2. **Fetch Only What You Need**:
   - With GraphQL, you can request exactly the data you need. For instance, when querying for expenses, you can request specific fields such as `amount`, `category`, and `date`. In contrast, REST APIs typically return entire objects, even if you don’t need all the data.
   - This helps reduce the amount of data transferred between the client and server.

3. **Relationships between Data**:
   - GraphQL is designed to work with complex data relationships, which makes it an ideal choice for projects like this one, where we have users, expenses, categories, and transactions.
   - For example, we can query for a list of expenses **within a specific category**, or fetch the **total amount spent** in each category. These queries can be combined in a single request, reducing the need for multiple round trips.

4. **No Over-fetching or Under-fetching**:
   - With REST APIs, the structure of the response is fixed, and you might end up over-fetching (getting more data than needed) or under-fetching (missing data). GraphQL ensures that you only retrieve the data you request, helping to avoid both problems.

5. **Real-time Data**:
   - GraphQL allows subscriptions (using GraphQL Subscriptions) to listen for real-time data changes. This can be useful in applications like this one, where you want to immediately see your updated spending after adding a new expense.

---

