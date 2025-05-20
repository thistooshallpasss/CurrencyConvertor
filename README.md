# 💱 Currency_Converter

A simple web-based currency converter that allows users to convert between different currencies using real-time exchange rates.

## 🌐 Live Demo

<img width="1405" alt="Screenshot 2025-05-20 at 16 46 58" src="https://github.com/user-attachments/assets/b85ae20b-5d73-4010-a83b-3b43a2b026c6" />


## 🚀 Features

- Real-time currency exchange rates using [ExchangeRate-API](https://www.exchangerate-api.com/)
- Supports multiple currencies
- Flags displayed for selected countries
- Swap currencies instantly with one click
- Responsive and clean UI

## 📦 Files Included

- `index.html` – Main HTML file
- `style.css` – Basic styling for the UI
- `codes.js` – Contains mapping of currency codes to country codes (used for flags)
- `script.js` – Handles exchange rate fetching, DOM interaction, and logic

## 🔑 Setup

1. Clone or download this repository.
2. Get your **free API key** from [ExchangeRate-API](https://app.exchangerate-api.com/sign-in).
3. In `script.js`, replace the API key:
   ```javascript
   const API_KEY = "your-api-key-here";
   ```
