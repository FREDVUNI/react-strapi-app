# React Vite App with Strapi Backend

This responsive web application is built using React with Vite as the build tool and Strapi as the backend CMS (Content Management System). The application is designed to be mobile-friendly and adapt to various screen sizes.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Setting Up Strapi](#setting-up-strapi)
- [Screenshot](#screenshot)
- [Contributing](#contributing)

## Features

- Modern and responsive UI design.
- Integration with Strapi CMS for content management.
- Easy to use and customizable.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Strapi backend set up and running. You can find Strapi's documentation [here](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html).
- Basic knowledge of React, Vite, and Strapi.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/FREDVUNI/react-strapi-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-vite-strapi-app
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Configure environment variables:

   - Create a `.env` file and specify any required environment variables. For example, provide the API URL if you need to connect to the Strapi backend.

5. Start the development server:

   ```bash
   yarn run dev
   ```

6. Open your browser and access the application at `http://localhost:5173/`.

## Setting Up Strapi

To set up your Strapi backend:

1. Create a new folder for your Strapi project, for example:

   ```bash
   mkdir api
   cd api
   ```

2. Initialize a new Strapi project:

   ```bash
   npx create-strapi-app .
   ```

   Follow the prompts to set up your Strapi backend. Make sure to create content types as needed and define your API endpoints.

3. Start the Strapi development server:

   ```bash
   yarn develop
   ```

   Your Strapi backend should now be running on `http://localhost:1337`.

4. Configure your React app to make API requests to your Strapi backend. You can use libraries like Axios or the built-in `fetch` API to do this.

## Screenshot

![image](https://github.com/FREDVUNI/react-strapi-app/assets/41730664/29e2fe0c-45e4-4dd0-8aaf-f3819e4a7c94)

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Create a pull request to the `main` branch of this repository.
