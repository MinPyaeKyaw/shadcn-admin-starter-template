# React.js Admin Portal Starter Template Documentation

## Overview

This starter template is designed for building a modern React.js dashboard application. It includes essential features like authentication, data fetching, table display, charting, localization, and more. It’s fully responsive and supports both light and dark themes. Below are detailed descriptions of the features and their integrations.

## Features

### 1. API Integration using Axios and TanStack Query

- **Axios** is used for making HTTP requests to interact with external APIs, providing robust error handling and request/response transformations.
- **TanStack Query** (React Query) is used for data fetching, caching, synchronization, and background updates. This ensures that the app stays in sync with server data without redundant re-fetching.

### 2. Data Table using TanStack Table

- A highly customizable and performant data table is integrated using **TanStack Table**.
- Features include pagination, sorting, filtering, and flexible layouts to accommodate various types of data.

### 3. Form Integration and Validation using React Hook Form and Zod

- Form handling is managed by **React Hook Form**, which offers seamless validation, error handling, and state management for form inputs.
- **Zod** is used for form validation schemas, ensuring the form data adheres to strict types and structures.
- Together, they provide a robust solution for managing form state and ensuring the correctness of user input.

### 4. Modal and Toast Notifications

- **Modal** windows are used for displaying overlays, confirmations, or additional information without leaving the current page.
- **Toast notifications** provide feedback to users for actions like form submission success or API errors, ensuring a better user experience.

### 5. Charts

- The template supports visual data representation using charts. **Chart.js** or a similar charting library is used to display data in various formats (bar charts, line charts, etc.), making the dashboard informative and engaging.

### 6. Localization (i18n)

- The template includes localization support for translating the app into multiple languages.
- **react-i18next** or similar libraries are used for internationalization, allowing easy switching between different languages based on user preferences.

### 7. Idle State Detection

- The template incorporates idle state detection, monitoring user activity and determining periods of inactivity.
- Using event listeners for mouse movements, keyboard inputs, and touch events, it efficiently tracks user presence, enabling actions like session timeouts or notifications after extended idle periods.

### 8. Dark Mode and Light Mode

- Users can toggle between light and dark themes.
- **CSS variables** or **Styled Components** are used to manage theming, ensuring that the UI adapts dynamically without requiring page reloads.

### 9. UI for Error Pages

- The app includes custom-designed **error pages** (e.g., 404 Not Found, 500 Internal Server Error).
- These error pages guide users back to the main app and provide useful context, improving the user experience even in failure scenarios.

### 10. Responsive Design

- The template is fully responsive, ensuring an optimal user experience across devices, from desktops to mobile phones.
- **CSS Grid** and **Flexbox** are employed to ensure the layout adjusts seamlessly for different screen sizes.

### 11. Sidebar and Header for Dashboard Layout

- A sidebar navigation component is integrated to allow quick access to various sections of the dashboard.
- The **header** includes essential user interactions like profile access, notifications, theme toggles, and logout options.
- Both sidebar and header are responsive and adjust according to the screen size and user preferences.

## Technology Stack

- **React.js**: Front-end framework
- **Schadcnui**: React UI Library
- **Zustand**: Global state container
- **Axios**: API requests and HTTP client
- **TanStack Query (React Query)**: Data fetching and caching
- **TanStack Table**: Data table for handling large datasets
- **React Hook Form**: Form state management and validation
- **Zod**: Form validation schema for strict type checking
- **Chart.js**: Charting library for visual data representation
- **react-i18next**: Localization and multi-language support
- **Toast**: Notifications and user feedback
- **Modal**: UI overlays for additional user actions

## Project Structure

- **src/apis/**: Axios instances, interceptors, services and tanstack queries.
- **src/assets/**: Lottie files, translation files and images.
- **src/components/**: Reusable components such as form inputs, buttons, modals, etc.
- **src/configs/**: Routes, app menu and vars.
- **src/helpers/**: Helper functions.
- **src/hooks/**: Custom hooks for handling API requests, form submissions, and more.
- **src/layouts/**: App layouts such as root, auth and dashboard layouts.
- **src/pages/**: Pages like Login, Dashboard, and Error pages.
- **src/stores/**: State containers.

---

This template is built to be scalable and maintainable, making it ideal for both small-scale and large-scale applications.
