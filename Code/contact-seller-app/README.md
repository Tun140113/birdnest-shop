# Contact Seller App

This project is a simple web application that allows users to contact a seller through a button that triggers an animation and opens Facebook in a new tab.

## Features

- **Contact Button**: A button that initiates an animation and opens Facebook when clicked.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Custom Hook**: Utilizes a custom hook for managing animation states.

## Project Structure

```
contact-seller-app
├── src
│   ├── components
│   │   └── ContactButton
│   │       ├── ContactButton.tsx
│   │       └── ContactButton.module.css
│   ├── pages
│   │   └── Home.tsx
│   ├── hooks
│   │   └── useAnimation.ts
│   ├── utils
│   │   └── openExternal.ts
│   ├── App.tsx
│   └── main.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd contact-seller-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm run dev
```
This will start the development server and you can view the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.