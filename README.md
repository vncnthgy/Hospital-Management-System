# **Building a Content Management for E-commerce Platform with Vue and Laravel API**

## Table of Contents

- [Background](#background)
- [Objective](#objective)
- [Requirement](#requirement)
- [Solution](#solution)
- [Setup](#setup)

## **Background:**

You are a software engineer working for a company that upgrade the BetaMart to add content management functionality. The upgrade will consist of a front-end application built with React and a back-end API developed with Laravel to handle content management.

## **Objective:**

The objective of this project is to create a functional content management platform where business owners can add products, edit products, view products, delete products and manages user. 

## **Requirement:**

1. **Front-End Application (Vue):**

    -   Implement a user-friendly interface using Vue to allow users to interact with the content management platform.
    -   Display a list of available products fetched from the Laravel API.
    -   Allow users to add, edit, delete items, and manage user.

2. **Back-End API (Laravel):**

    -   Develop a RESTful API using Laravel to handle requests from the front-end application.
    -   Implement endpoints to fetch product data from the database and send it to the front end.
    -   Create endpoints to manage the view products, including adding product, removing products, updating products, and manage user.

## **Solution:**

1. **Front-End Development (React):**

    -   Create Vue components for different sections of the content management platform, such as view product, edit product, delete products, and add products.
    -   Use Vue Router to handle navigation between different pages of the application.
    -   Use Fetch API to make HTTP requests to the Laravel API and fetch data.
    -   Design the user interface to be responsive and accessible across various devices and screen sizes.

2. **Back-End Development (Laravel):**

    -   Set up a Laravel project with appropriate database configurations.
    -   Define models and migrations to represent products in the database.
    -   Implement controllers to handle incoming requests from the front end and perform necessary operations, such as fetching product data and CRUD operations.
    -   Use Laravel's validation features to validate incoming requests and ensure data integrity.


## Setup

**Clone the project repository:**

```
    git clone https://github.com/vncnthgy/BetaMart.git
```

**Go to project directory:**

```
    cd BetaMart
```

**Install the project dependencies:**

```
    npm install
```

**Run the project:**

```
    npm run serve
```
