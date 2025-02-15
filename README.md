

```markdown
# Enatega Food Delivery

Enatega Food Delivery is a location-based restaurant finder web application built with Next.js, Tailwind CSS, and PrimeReact. Users can search for nearby restaurants by either entering a delivery address or using their current geolocation. The app queries a GraphQL server to fetch restaurants and displays them in a grid format.

## Features

- **Get Current User Location**: Automatically fetches the user's current geolocation.
- **Location Display**: Shows the user's location both in a text field and a dropdown.
- **Find Restaurants**: Using the current geolocation or user-input address, the app queries the backend to find restaurants.
- **Restaurant Grid**: Displays restaurants in a visually appealing grid format.
- **End-to-End Testing**: Automated tests using Cypress to ensure functionality is working.

## Getting Started


### 1. Clone the repository

First, clone the project to your local machine:

```bash
git clone https://github.com/meerhaasham1/Enatega-Food-delievery.git
cd Enatega-Food-delievery
```

### 2. Install dependencies

Run the following command to install the necessary packages:

```bash
npm install
```

### 3. Start the development server

To start the local development server, use:

```bash
npm run dev
```

Now, open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Functionalities

### 1. **Getting Current Location of the User**
   - The app uses the browser’s geolocation API to fetch the user’s current location (latitude and longitude).

### 2. **Displaying User Location**
   - The location is displayed in a text area and is used to populate a dropdown for users to select their location.

### 3. **Find Restaurants**
   - Users can click the **"Find Restaurants"** button to query the GraphQL server with the latitude and longitude of their location, and display a list of nearby restaurants.

### 4. **Display Restaurants in Grid Format**
   - The results are displayed in a grid format, showing details such as restaurant name, cuisine, and address.

---

## Technologies Used

This project is built using the following technologies:

- **[Next.js](https://nextjs.org)** (v14.x) with the **App Router**: React-based framework for building server-side rendered apps.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework to design modern user interfaces quickly.
- **[PrimeReact](https://www.primereact.org/)**: A collection of UI components for React, used for styling form elements and other UI parts.
- **[Cypress](https://www.cypress.io/)**: End-to-end testing framework to ensure the app works as expected.
- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript for improved code quality and scalability.
- **[Apollo Client](https://www.apollographql.com/docs/react/)**: GraphQL client for fetching data from the GraphQL server.
- **[GraphQL](https://graphql.org/)**: A query language for APIs to interact with the backend.

---



```
/restaurant-finder
├── /app
│   ├── /components       # All React components (e.g., Main, Restaurant, Footer)
│   ├── /graphql         # GraphQL queries and mutations
│   ├── /layout.tsx      # Main layout file
│   ├── /page.tsx        # Homepage layout and logic
├── /public
│   └── /assets          # Static assets like images and fonts
├── /styles
│   └── globals.css      # Global styling for the app
├── /tests
│   └── /e2e             # Cypress end-to-end tests
├── /utils
│   └── interfaces.ts    # TypeScript interfaces
├── .gitignore           # Git ignore file to exclude unwanted files
├── next.config.js       # Next.js configuration
├── package.json         # Project metadata and dependencies
└── README.md            # This README file
```

---

## End-to-End Testing

This project uses **Cypress** for end-to-end testing.

To run the tests, you can use the following command:

```bash
npx cypress open
```

This will open the Cypress UI, where you can run the tests interactively.

---

## Contributing

We welcome contributions to improve the project! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your fork and create a pull request.

---

## License

This project is licensed under the MIT License.

```

### How to Add this to Your Project:
1. Create a `README.md` file at the root of your project directory.
2. Paste the above content into the `README.md` file.
3. Save the file.

