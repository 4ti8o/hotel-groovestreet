/**
 * build-pages.js
 * Generates the inner pages from index.html's shared shell (header/footer),
 * substituting page-specific <main> content, titles and active nav states.
 * Run: node .kilo/build-pages.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const INDEX = path.join(ROOT, "index.html");

const shell = fs.readFileSync(INDEX, "utf8");
const MAIN_START = shell.indexOf('<main id="main">');
const MAIN_END = shell.indexOf("</main>") + "</main>".length;

if (MAIN_START < 0 || MAIN_END <= MAIN_START) {
  throw new Error(
    "index.html is missing its <main id=\"main\"> ... </main> block; cannot build pages."
  );
}

// Keep the <main id="main"> … </main> wrapper so every page shares it.
const head = shell.slice(0, MAIN_START) + '<main id="main">';
const tail = "</main>" + shell.slice(MAIN_END);

/** Page definitions — `main` is injected between the shared header and footer. */
const pages = require("./pages");

for (const page of pages) {
  let html = head + page.main + tail;

  // Title + meta description
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${page.title}</title>`
  );
  html = html.replace(
    /<meta name="description"\s+content="[\s\S]*?">/,
    `<meta name="description" content="${page.description}">`
  );

  // Active nav link in the desktop bar
  html = html.replace(
    /<a href="([^"]+)" class="nav-link is-active">[^<]*<\/a>/,
    `<a href="$1" class="nav-link">__</a>`
  );
  if (page.slug) {
    html = html.replace(
      new RegExp(`(<a href="${page.slug}" class="nav-link")>`),
      `$1 is-active>`
    );
  } else {
    html = html.replace(
      /(<a href="index\.html" class="nav-link)>/,
      `$1 is-active>`
    );
  }

  fs.writeFileSync(path.join(ROOT, page.slug), html, "utf8");
  console.log("wrote", page.slug);
}
