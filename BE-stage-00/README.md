# Stage 0: Getting Started - Basic API

## Task Description

A basic API built with Express and TypeScript.

## Implementation

The implementation involves setting up an Express server with TypeScript and using Vite for the build and development process. The project structure is organized as follows:

1. **Configuration**: The `vite.config.ts` file is used to configure Vite with the `vite-plugin-node` plugin to work with Express. This setup allows for a fast and optimized build process.

2. **Utilities**: A utility function `getCurrentDateTime` is defined in `src/utils/datetime.ts` to get the current date and time in ISO format.

3. **API Routes**: The API routes are defined in `src/routes/api.ts`. The main route `/api` returns an object containing the email, current date and time, and the GitHub URL of the project's codebase.

4. **Server Setup**: The Express server is set up in `src/index.ts`. It includes middleware for CORS and JSON parsing, and defines the root route and the `/api` route.

5. **Deployment**: The application can be built for production using Vite and started using the compiled JavaScript files. The deployment instructions are provided in the README.

## Setup and Running

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Start production server:

   ```bash
   npm start
   ```

## Available Scripts

- `start`: Start the production server
- `build`: Compile TypeScript to JavaScript
- `dev`: Start the development server with nodemon
- `test`: Run tests with Jest
- `lint`: Run ESLint
- `prettier`: Run Prettier

## API Documentation

- `GET /api`: Returns my email, current date and time in ISO format, and GitHub URL of the project's codebase.

## Technologies Used

- Node.js
- TypeScript
- Express
- Jest for testing
- Vite for build and development
- [Other technologies]

## Deployment

To deploy the application, follow these steps:

1. Build the application for production:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Ensure your server is configured to serve the built files from the `dist` directory.

## Screenshots/Demo

[Add screenshots or demo links if required]
