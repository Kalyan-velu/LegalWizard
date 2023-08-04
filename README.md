# Legal Wizard ([visit](https://legalwizard-a.netlify.com))

This repository contains a simple React project built using Vite and TypeScript. It provides a quick and easy setup for starting a new React project with modern development tools.

## Requirements

Before proceeding with the setup, make sure you have the following software installed on your machine:

- Node.js (v16 or higher)
- npm (Node Package Manager) or yarn or pnpm (I am using pnpm)

## Getting Started

To get started with this project locally, follow these steps:

1. **Clone the repository**

   Use Git to clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/LegalWizard.git
   cd LegalWizard
   ```

2. **Install Dependencies**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   #or
   yarn install
   #or
   pnpm install
   ```

3. **Run the Development Server**

   Start the development server by running:

   ```bash
   npm run dev
   #or
   yarn dev
   #or
   pnpm dev
   ```

   This will start the development server and open the app in your default web browser. By default, the development server runs at `http://localhost:3000`.

4. **Development**

   You can now start making changes to the project. The project is set up with hot module replacement, so any changes you make to the source files will be 
   automatically reflected in the browser without the need to manually refresh the page.

5. **Building for Production**

   When you are ready to build the project for production, you can use the following command:

   ```bash
   npm run build
   ```

   This will create an optimized build of the project in the `dist` directory.

## Folder Structure

The folder structure of this project is as follows:

```
LegalWizard/
  ├── src/
  |   ├── components/
  |   ├── styles/
  |   ├── App.tsx
  |   └── main.tsx
  ├── public/
  |   ├── assests/
  |   └── Logo.png
  ├── tailwind.config.js
  ├── index.html
  ├── tsconfig.json
  ├── vite.config.ts
  └── package.json
```

- `src`: Contains the source code of the React components and application entry points.
- `public`: Contains the public assets.
- `tailwind.config.js`: Tailwind Css config files.
- `tsconfig.json`: TypeScript configuration file.
- `prettier.config.js`: Prettier configuartion files.
- `index.html`:the `index.html` file used as the entry point for the application.
- `vite.config.ts`: Vite configuration file.
- `package.json`: NPM package configuration file containing dependencies, scripts, and other project details.

## Customization

Feel free to customize this project to fit your needs. You can modify the `src` directory to add your React components, styles, and other assets. Additionally, you can update the `public` folder to include your own favicon and other static assets.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was bootstrapped with [Vite](https://vitejs.dev/) and [Create React App](https://create-react-app.dev/).

If you encounter any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

Happy coding! 🚀

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
