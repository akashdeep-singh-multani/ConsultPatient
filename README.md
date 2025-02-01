<h1 align="center">CONNECT Patient</h1>

<p align="center">
  <a href="https://github.com/akashdeep-singh-multani/ConsultPatient">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs">
  </a>
</p>

<p align="center">
  A React-based web application designed to help healthcare providers manage patient interactions, such as consultations and appointment reminders.
</p>

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Testing](#testing)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Example Dashboard](#example-dashboard)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Live Demo

Click the button below to open the project demo:

[Live Demo](https://connect-patient-72xo4dc6m-akashs-projects-931526f1.vercel.app)

---

## Features

- Dashboard for managing patient requests and appointments.
- Interactive tabs and cards to streamline the user interface.
- Responsive design using Bootstrap for a clean, professional look.
- Support for appointment reminders and consult requests.
- Built with React and TypeScript for a modern and scalable architecture.

---

## Testing

The project includes unit tests written using **Jest** to ensure the reliability of components and services.

- **Component Tests**: Located in `src/components/__tests__`, covering key UI components.
- **Dashboard Page Tests**: Found in `src/pages/Dashboard.test.tsx`, verifying the behavior of the Dashboard page.
- **Service API Tests**: Implemented in `src/services/api.test.ts`, testing API-related functionalities.

To run the tests, use the following command:

```bash
pnpm test
```

---

## Technology Stack

- **Frontend**: React, React Router, Bootstrap, Sass
- **Build Tools**: Vite, TypeScript, ESLint, Prettier
- **Testing**: Jest, Vitest, Testing Library
- **Version Control**: Git, GitHub

---

## Installation

### Prerequisites

Make sure you have the following tools installed:

- **Node.js** (v16 or higher)
- **pnpm** (recommended package manager)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/akashdeep-singh-multani/ConsultPatient.git
   ```

2. Navigate to the project directory:

   ```bash
   cd connect_patient
   ```

3. Install the dependencies using pnpm:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

   This will start the application on [http://localhost:3000](http://localhost:3000).

5. Husky Setup: The project is set up with Husky to enforce pre-commit and pre-push hooks for linting and code formatting. Husky will automatically be prepared when you run `pnpm install`. If Husky is not installed, run:
   ```bash
   pnpm prepare
   ```

---

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the app for production.
- `pnpm preview`: Previews the production build.
- `pnpm lint`: Lints the project using ESLint.
- `pnpm prepare`: Prepares the project for Husky hooks.

---

## Usage

Once the server is running, open your browser and go to [http://localhost:3000](http://localhost:3000). You'll land on the Dashboard page, which provides an overview of the key actions that can be taken, such as requesting a consult or setting up appointment reminders.

### Example Dashboard

<img width="929" alt="ConnectPatient-Prod1" src="https://github.com/user-attachments/assets/6c2f8eca-1573-4d1e-a0ca-b13de0534e0e" />

<img width="930" alt="ConnectPatient-Prod2" src="https://github.com/user-attachments/assets/4acef612-c63f-48e8-82ff-f18feedc3fe6" />

<img width="938" alt="ConnectPatient-Prod3" src="https://github.com/user-attachments/assets/82dd10fe-5465-4498-bfef-af7537a9c52b" />


The dashboard contains:

- A **Welcome Card** that introduces the user and prompts for a consult request.
- A **Services Card** that enables users to set up reminders for their appointments.

---

## Contributing

We welcome contributions to CONNECT Patient! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature
   ```
6. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- **Bootstrap** for the responsive UI components.
- **React** for the modern front-end architecture.
- **Vite** for fast and optimized builds.
- **TypeScript** for static typing and enhanced developer experience.

---

## Explanation of Approach

In this project, I followed a modular approach to component design by creating reusable components for different parts of the application, such as dashboard cards, tabs, and buttons. These components were designed to handle specific tasks (like rendering patient data, handling actions, and interacting with APIs) while ensuring ease of maintenance.

The app is built with React, TypeScript, and Bootstrap, which allows for a clean and scalable architecture while ensuring a responsive design. Additionally, I integrated Jest and React Testing Library to create test cases for key components to ensure stability and quality of the application.

### Assumptions Made

- The project uses a `mockData.json` file to provide data when needed instead of fetching data from an API. This was done to simplify development and testing without requiring a backend server.
- The necessary configuration for tools like Husky, ESLint, and Prettier was already set up to ensure consistent code formatting and quality across the project.
- A basic understanding of React, TypeScript, and modern web development practices was assumed for contributors to the project.
