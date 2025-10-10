# Learn&Protect App - Initial Prototype
This repository contains the initial functional prototype for the Learn&Protect mobile application, developed with React Native and Expo. The purpose of this prototype is to bring the client's initial design sketches to life, demonstrating the core navigation structure and the look and feel of the user interface.

This prototype was built to be reviewed for code quality, project structure, and adherence to the initial design concepts.

# Tech Stack

Framework: React Native
Platform: Expo SDK 51
Navigation: Expo Router (File-based routing)
Styling: React Native StyleSheet
Icons: @expo/vector-icons (Ionicons)

# Prerequisites

Before you begin, ensure you have the following installed on your system:
Node.js (LTS version recommended)
npm (comes with Node.js) or yarn
Expo Go App on your iOS or Android device.


# Getting Started

To get the prototype running on your local machine and view it on your mobile device, follow these steps:

1. Clone the Repository

``` git clone https://github.com/Sakib-05/learn-protectApp.git ```
```cd learn-protectapp ```

2. Install Dependencies
This project uses npm. Run the following command to install all the necessary packages defined in package.json.

``` npm install ```

3. Start the Development Server
Run the start script. This will launch the Expo development server and display a QR code in your terminal.

``` npx expo start```

4. View on Your Device

Open the Expo Go app on your iOS or Android phone.
Scan the QR code displayed in the terminal.
The app will begin to build and load onto your device.

# Project Structure Explained

This project uses Expo Router, a modern file-based routing system. The navigation and screen structure are determined by the files and folders inside the app/ directory.

app/_layout.jsx: This is the root layout of the app. It's currently not used but is required for more complex stack navigation.

app/index.jsx: This is the entry point. It simply redirects the user to the default home screen.

app/(_tabs)/: This is a "route group". The parentheses () mean that _tabs is used for organization and won't be part of the URL path. It contains all the screens that are part of our main tab navigation.

app/(_tabs)/_layout.jsx: This is the layout for the tab group. It defines the Tabs navigator, configures the appearance of the tab bar, sets the icons, and specifies which screens are included.

app/(_tabs)/[screen].jsx: Each file within this folder (e.g., home.jsx, learn.jsx) automatically becomes a screen in the tab navigator.

# Implemented Prototype Features

Tab-based Navigation: A fully functional bottom tab bar allowing navigation between the four main sections: Home, Learn, Protect, and My Practice.

Home Screen: Includes placeholder buttons that successfully navigate the user to the Learn and Protect tabs.

Learn & Protect Screen: UI built to match the client's design, with placeholder components for the Video Library and Starter Course.

Protect Screen: UI built to match the client's design, with placeholder buttons for all safety features.

My Practice Screen: A placeholder screen ready for future development.