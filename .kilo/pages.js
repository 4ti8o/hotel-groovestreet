/**
 * pages.js — inner <main> content for each secondary page.
 * Preserves the Uganda-context copy written during the content pass.
 */

const { banner, cta } = require("./shared");

module.exports = [
  // ---------------------------------------------------------------- about
  {
    slug: "about-us.html",
    title: "About Us — Hotel GrooveStreet Uganda",
    description:
      "Founded in 2010, Hotel GrooveStreet is a landmark of Ugandan hospitality, combining contemporary elegance with warm, personalised service in the heart of Kampala.",
    main: `${banner(
      "About Us",
      "Discover our story of excellence in hospitality in the Pearl of Africa",
      "img/bg-img/2.jpg"
    )}

        ${require("./content-about").about}`,
  },

  // --------------------------------------------------------------- rooms
  {
    slug: "rooms.html",
    title: "Rooms & Suites — Hotel GrooveStreet Uganda",
    description:
      "Explore our rooms and suites at Hotel GrooveStreet Uganda, with breathtaking views of the Rwenzori Mountains and Lake Victoria.",
    main: `${banner(
      "Our Rooms",
      "Luxury accommodations with views of the Rwenzori Mountains and Lake Victoria",
      "img/bg-img/3.jpg"
    )}

        ${require("./content-rooms").rooms}`,
  },

  // ------------------------------------------------------------ services
  {
    slug: "services.html",
    title: "Services — Hotel GrooveStreet Uganda",
    description:
      "Discover the luxury services at Hotel GrooveStreet Uganda: dining with local flavours, spa and wellness, concierge and gorilla trekking experiences.",
    main: `${banner(
      "Our Services",
      "Premium services that define Hotel GrooveStreet Uganda",
      "img/bg-img/4.png"
    )}

        ${require("./content-services").services}`,
  },

  // ---------------------------------------------------------------- blog
  {
    slug: "blog.html",
    title: "News — Hotel GrooveStreet Uganda",
    description:
      "The latest news, events and travel guides from Hotel GrooveStreet Uganda and the Pearl of Africa.",
    main: `${banner(
      "Our Blog",
      "News, events and travel guides from the Pearl of Africa",
      "img/bg-img/5.jpg"
    )}

        ${require("./content-blog").blog}`,
  },

  // ------------------------------------------------------------- contact
  {
    slug: "contact.html",
    title: "Contact — Hotel GrooveStreet Uganda",
    description:
      "Contact Hotel GrooveStreet in Kampala, Uganda. Plot 12, Buganda Road. Our reservations team is available 24/7 to assist with your stay.",
    main: `${banner(
      "Contact Us",
      "Our team in Kampala is available 24/7 to assist with your stay",
      "img/bg-img/6.jpg"
    )}

        ${require("./content-contact").contact}`,
  },

  // ------------------------------------------------------------ elements
  {
    slug: "elements.html",
    title: "Elements — Hotel GrooveStreet Uganda",
    description:
      "A sample page demonstrating the typography, buttons, forms and components used across the Hotel GrooveStreet Uganda website.",
    main: `${banner(
      "Elements",
      "A sample page demonstrating the building blocks of this website",
      "img/bg-img/bg-9.jpg"
    )}

        ${require("./content-elements").elements}`,
  },
];




