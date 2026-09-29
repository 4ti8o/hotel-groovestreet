# Hotel GrooveStreet Uganda Website

Welcome to the official website of Hotel GrooveStreet Uganda - a luxury destination for discerning travelers seeking exceptional hospitality and comfort in the heart of Kampala, Uganda. Experience the Pearl of Africa with world-class amenities and services.

## Overview

Hotel GrooveStreet Uganda is a premier luxury hotel that combines contemporary elegance with warm, personalized service. Our website showcases our beautiful accommodations with views of the Rwenzori Mountains and Lake Victoria, premium amenities, and exceptional services designed to make every guest's stay unforgettable. From gorilla trekking packages to cultural experiences, we offer unique Ugandan hospitality.

## Features

- Responsive design optimized for all devices using Tailwind CSS
- Modern, elegant aesthetic reflecting hotel's luxury positioning
- Easy navigation to key sections: rooms, services, dining, and more
- Online reservation system
- Gallery showcasing hotel amenities and Ugandan landscapes
- Contact information and location details in Kampala, Uganda
- Blog section for hotel news and Ugandan travel updates

## Pages

- **Home**: Welcome page highlighting hotel's key features and special offers in Uganda
- **About Us**: Learn about our history, mission, and commitment to African hospitality
- **Rooms**: Detailed information about our various room types and suites with views of Uganda's natural beauty
- **Services**: Overview of amenities including spa, dining with local flavors, and concierge services for exploring Uganda
- **Contact**: Location in Kampala, Uganda, contact information, and inquiry form
- **Blog**: Latest news, events, and articles from Hotel GrooveStreet Uganda
- **Elements**: Sample page demonstrating website elements

## Technologies Used

- HTML5 (semantic, accessible markup)
- Tailwind CSS v3 (compiled to `style.css`)
- Vanilla JavaScript (`js/main.js`) — no jQuery, no Bootstrap, no plugins
- Google Fonts: Cormorant Garamond (display) + Jost (sans)

## Project Structure

```
index.html            Home page (source of truth for the shared shell)
about-us.html         Generated from the shared shell
rooms.html            Generated
services.html         Generated
blog.html             Generated
contact.html          Generated
elements.html         Generated

src/input.css         Tailwind source (design tokens + components)
tailwind.config.js    Theme: colours, fonts, animations
style.css             Compiled output — do not edit by hand
js/main.js            All site behaviour
img/                  Images
.kilo/                Page build script + verification script
```

### How pages are built

`index.html` owns the shared header, footer and `<main>` wrapper. The other six
pages are generated from it so the navigation and footer never drift apart:

```bash
npm run build:pages   # regenerate the six secondary pages
npm run build:css     # recompile style.css
npm run build         # both
npm test              # structural + Palatin-residue + image checks
```

If you change the header or footer, edit `index.html` then run
`npm run build:pages`. Edit `src/input.css` (not `style.css`) for styling.

## Installation

To run this website locally:

1. Clone or download this repository to your local machine
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Serve: `npm start` (or `npm run dev` for live reload)
6. Open `http://localhost:3000`

## Customization

- **Colours and fonts** — `tailwind.config.js` (the `gold` and `ink` scales)
- **Reusable styles** — `src/input.css` under `@layer components`
- **Behaviour** — `js/main.js`; each feature is an independent module that
  no-ops when its markup is absent
- **Content** — page text lives in the templates under `.kilo/content-*.js`

### Notes

- The reservation, contact and newsletter forms are front-end demonstrations;
  they validate and confirm inline but submit nowhere. Wire them to a backend
  when one exists.
- The contact map lazy-loads the Google Maps JavaScript API and shows the
  address as a fallback if it cannot load.

## Contributing

We welcome contributions to improve the Hotel GrooveStreet website. Please feel free to submit pull requests with enhancements or report issues.

## License

This template is provided as-is for educational purposes.

## Support

For support with this website template, please open an issue in the repository or contact our development team.