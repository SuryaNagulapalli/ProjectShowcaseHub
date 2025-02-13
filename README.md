# Projects Showcase

This is a React application that showcases a list of projects with filtering options based on categories. The project fetches data from an API and dynamically displays the projects.

## Features

- Fetches project data from an API and displays it dynamically.
- Allows users to filter projects based on categories.
- Displays a loading indicator while fetching data.
- Handles API failures gracefully with an error message and retry option.
- Fully responsive design for desktop, laptop, tablet, and mobile screens.

## API Requests & Responses

### Projects API
- **Endpoint:** `https://apis.ccbp.in/ps/projects`
- **Method:** `GET`
- **Query Parameter:** `category`
- **Example Request:**
  ```
  https://apis.ccbp.in/ps/projects?category=ALL
  ```
- **Response:**
  ```json
  {
    "projects": [
      {
        "id": "1",
        "name": "Project Name",
        "image_url": "https://example.com/image.png"
      }
    ]
  }
  ```

## Functionality

### Initial Load
1. When the app is opened, it makes an HTTP GET request to fetch all projects (`category=ALL`).
2. A loading spinner is displayed while fetching data.
3. After successfully fetching data, the projects are displayed.

### Category Selection
1. When a category is selected, a GET request is made with the selected category ID.
2. A loading spinner is displayed while fetching data.
3. Projects matching the selected category are displayed.

## Tech Stack
- React.js
- HTML, CSS
- Fetch API for data fetching

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Live Demo
Check out the live demo: [Live Project URL](https://your-live-demo-url.com)

## Project Screenshot
![Project Screenshot](https://github.com/user-attachments/assets/cb65a390-4ce4-4f16-95b7-132456550439)

## Contribution
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---
Developed with ❤️ by [Your Name]


