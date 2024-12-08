# Contacts Application

This is a simple, responsive React application that displays a list of contacts fetched from the [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/users). The app allows users to browse the contacts and expand cards to display more information.

## Features

-   Fetches contacts from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
-   Expand individual contact cards to reveal additional details when clicked.
-   Fully responsive.

## How to Run the Application

1.  Clone or download this repository to your local machine.
2.  Open the project folder (contacts-app) in your IDE or text editor.
3.  On terminal run **npm install**
4.  Then run **npm run dev**
5.  Open your browser and navigate to the local development server:
    -   [http://localhost:5173](http://localhost:5173/)

## Note on External Dependencies

This project uses axios for API requests. While there were no specific instructions on whether external dependencies were allowed, I chose to use axios due to its ease of use, better error handling, and promise-based syntax. However, the app can be easily adapted to use the native fetch API if required.

## Technologies Used

-   **React**: For building the UI.
-   **Axios**: For making HTTP requests.
-   **Vite**: As the build tool and development server.
-   **CSS**: For styling the components.
