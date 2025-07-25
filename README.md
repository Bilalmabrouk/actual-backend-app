# PerfumeApp Mobile Application

This repository contains a simple React Native mobile application supporting **Arabic** and **French** languages. The UI follows a minimal dark theme and provides three main screens:

- **Home** – welcome banner, brand slogan and featured product carousel.
- **Market** – list of perfumes and accessories with filter and add-to-cart button.
- **News** – latest articles or promotions.

A language switcher in the top right corner toggles between Arabic (RTL) and French (LTR).

## Structure

```
mobile-app/
  package.json      # project dependencies
  index.js          # entry point
  App.js            # navigation and language initialization
  src/
    i18n/           # translations and i18n configuration
      ar.json
      fr.json
      index.js
    components/     # reusable UI pieces
    screens/        # Home, Market and News implementations
```

## Running the app

Install dependencies and start with Expo:

```bash
npm install
yarn start
```

This requires a working React Native / Expo environment.
