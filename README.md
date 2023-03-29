# Next.js TypeScript Testing Kit with Chakra UI

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)

This is a starter kit for Next.js projects using TypeScript and Chakra UI, with built-in support for testing using Jest and React Testing Library.

## Getting started

To use this starter kit, you'll need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed on your machine. To create a new Next.js project using this starter kit as a template, run the following command:

```bash
npx create-next-app <YOUR_PROJECT_NAME> -e https://github.com/RickBr0wn/next-typescript-testing-kit-with-chakra-ui
```

This will create a new Next.js project in the `<YOUR_PROJECT_NAME>` directory, using this starter kit as a template. After the project is created, you can navigate to the project directory and start the development server with the following commands:

```bash
cd <YOUR_PROJECT_NAME>
pnpm run dev
```

This will start the development server at <http://localhost:3000>.

## Setting up a GitHub repository

To set up a new GitHub repository for your project, follow these steps:

1. Create a new repository on GitHub. You can do this by clicking the "New" button on your GitHub dashboard, or by navigating to <https://github.com/new>.

2. Give your repository a name and a description.

3. Initialize your local project as a Git repository. Run the following commands in your project directory:

```bash
git init
git add .
git commit -m "Initial commit"
```

4. Add the GitHub repository as a remote. Replace `USERNAME` with your GitHub username and `REPOSITORY_NAME` with the name of your repository:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
```

5. Push your code to the remote repository:

```bash
git push -u origin main
```

This will push your code to the `main` branch of the remote repository.

## Testing

This starter kit includes Jest and React Testing Library for testing. To run the tests, use the following command:

```bash
pnpm test
```

This will run all the test files in the `__tests__` directory.

## Building for production

To build the project for production, use the following command:

```bash
pnpm build
```

This will create an optimized production build in the `~/dist` directory.

## Deploying to Vercel

This starter kit is designed to work seamlessly with [Vercel](https://vercel.com/), a cloud platform for static and serverless websites. To deploy your project to Vercel, simply sign up for a Vercel account and connect your GitHub repository. Vercel will automatically build and deploy your project whenever you push changes to the repository.

## Built With

- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React](https://reactjs.org) - A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- [ESLint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.
- [Chakra UI](https://chakra-ui.com/) - Simple, Modular & Accessible UI Components for your React Applications.
- [React Icons](https://react-icons.github.io/react-icons) - A collection of popular icon sets.
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities that encourage good testing practices.
- [Jest-DOM](https://github.com/testing-library/jest-dom#readme) - Custom jest matchers to test the state of the DOM.

## Contributing

[CONTRIBUTING.md](https://gist.github.com/RickBr0wn/0b4a139f833e0d0bafddb0d043644b20)

## Author(s)

- **Rick Brown** - _Initial work_ - [RickBr0wn](https://github.com/RickBr0wn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/RickBr0wn/5f95ee6118bb32034e2b94acbd88a99d) file for details.
