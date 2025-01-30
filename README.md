<h1 align="center">CONNECT Patient</h1><br><br>

<p align="center">
<a href="https://github.com/akashdeep-singh-multani/ConsultPatient"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"></a>
</p>

<br>

<p align="center">A React-based web application designed to help healthcare providers manage patient interactions, such as consultations and appointment reminders.</p>

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Example Dashboard](#example-dashboard)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

<br>

## Live Demo

Click the button below to open the project demo.

<a href="https://your-live-demo-link.com" target="_blank">
  <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Live Demo">
</a>

<br>

## Features

- Dashboard for managing patient requests and appointments.
- Interactive tabs and cards to streamline the user interface.
- Responsive design using Bootstrap for a clean, professional look.
- Support for appointment reminders and consult requests.
- Built with React and TypeScript for a modern and scalable architecture.

<br>

## Technology Stack

- **Frontend**: React, React Router, Bootstrap, Sass
- **Build Tools**: Vite, TypeScript, ESLint, Prettier
- **Testing**: Jest, Vitest, Testing Library
- **Version Control**: Git, GitHub

<br>

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
   This will start the application on http://localhost:3000.
5. Husky Setup: The project is set up with Husky to enforce pre-commit and pre-push hooks for linting and code formatting. Husky will automatically be prepared when you run the pnpm install command. If Husky is not installed, run:

bash
Copy
pnpm prepare

<br>

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the app for production.
- `pnpm preview`: Previews the production build.
- `pnpm lint`: Lints the project using ESLint.
- `pnpm prepare`: Prepares the project for Husky hooks.

<br>

## Usage

Once the server is running, open your browser and go to [http://localhost:3000](http://localhost:3000). You'll land on the Dashboard page, which provides an overview of the key actions that can be taken, such as requesting a consult or setting up appointment reminders.

### Example Dashboard

<p align="center">
  <img alt="Screenshot of CONNECT Patient Dashboard" src="https://your-image-link.com/screenshot.png">
</p>

The dashboard contains:

- A **Welcome Card** that introduces the user and prompts for a consult request.
- A **Services Card** that enables users to set up reminders for their appointments.

<br>

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
   git commit -am 'Add new feature'
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature
   ```
6. Open a pull request.

<br>

## License

This project is licensed under the MIT License.

<br>

## Acknowledgements

- **Bootstrap** for the responsive UI components.
- **React** for the modern front-end architecture.
- **Vite** for fast and optimized builds.
- **TypeScript** for static typing and enhanced developer experience.
