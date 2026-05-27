# UnitFlip — Unit Converter

A clean, lightweight unit converter web app built with vanilla HTML, CSS, and JavaScript. UnitFlip handles real-world conversions across length, volume, and mass — using exact base definitions instead of rounded approximations, so every result is as precise as your browser allows.

---

## Table of contents

-   [Demo](#demo)
    -   [Gif Demo](#gifdemo)
    -   [Live Demo](#livedemo)
-   [Features](#features)
-   [Conversions Supported](#conversionssupported)
-   [Conversion Precision](#conversionprecision)
-   [How It Works](#howitworks)
-   [Local Storage](#localstorage)
-   [Project Structure](#projectstructure)
-   [Tech Stack](#techstack)
-   [Getting Started](#gettingstarted)
-   [Planned Improvements](#plannedimprovements)
-   [Author](#author)
-   [Contributing](#contributing)
-   [Support](#support)
-   [License](#license)

---


## Demo

### Gif Demo

### Live Demo

👉 [View Live Project](https://unitflip.netlify.app/)

---

## Features

- **Precise conversions** — uses exact internationally defined base constants, not rounded approximation factors
- **Persistent input** — last entered value is saved to localStorage and restored on page refresh
- **Blank on load** — result space stays empty until the user triggers a conversion
- **Bidirectional conversions** — every unit pair works in both directions
- **Zero dependencies** — pure vanilla JS, no libraries or frameworks

---

## Conversions Supported

| Category | Units |
|----------|-------|
| Length   | Meters ↔ Feet |
| Volume   | Gallons ↔ Liters |
| Mass     | Kilograms ↔ Pounds |

---

## Conversion Precision

Most converters multiply by rounded reciprocals (e.g. `× 3.281` for meters to feet), which introduces approximation error. Shiftr uses the exact base definitions:

| Conversion | Base Constant Used |
|---|---|
| Meters ↔ Feet | `1 ft = 0.3048 m` (exact) |
| Gallons ↔ Liters | `1 US gal = 3.785411784 L` (exact) |
| Kilograms ↔ Pounds | `1 lb = 0.45359237 kg` (exact) |

---

## How It Works

1. Enter a numeric value in the input field
2. Click **Convert**
3. All relevant conversions for that value display instantly
4. Refresh the page — your input is still there, results restored automatically

---

## Local Storage

UnitFlip uses the browser's `localStorage` API to persist the user's last input value across sessions. No accounts, no backend, no data leaves your device.

```
On convert click  →  localStorage.setItem("lastInput", value)
On page load      →  localStorage.getItem("lastInput") → restore + reconvert
```

---

## Project Structure

```
unitflip/
├── index.html
├── style.css
└── script.js
```

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Web Storage API (localStorage)

---

## Getting Started

No installation needed. Just clone and open in a browser.

```bash
git clone https://github.com/AkaninyeneEssien/UnitFlip
cd unitflip
open index.html
```

---

## Planned Improvements

- [ ] Temperature conversion (Celsius ↔ Fahrenheit ↔ Kelvin)
- [ ] Speed conversion (km/h ↔ mph)
- [x] Dark / light mode toggle
- [ ] Conversion history log (stored in localStorage)
- [ ] UI Modifications

---

## Author
**Akaninyene Monday Essien**
- [GitHub Profile](https://github.com/AkaninyeneEssien)
- [LinkedIn](https://www.linkedin.com/in/akaninyene/)

---

## Contributing

Contributions, issues, and feature requests are welcome.
Feel free to fork this repo and submit a pull request.

## ⭐ Support

If you found this project helpful, please give it a ⭐
It helps others discover it!

## License

This project is open source and available under the [MIT License](LICENSE).
