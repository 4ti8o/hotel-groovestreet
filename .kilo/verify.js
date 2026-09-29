/**
 * verify.js — validates the generated site.
 * Run: node .kilo/verify.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PAGES = [
  "index.html",
  "about-us.html",
  "contact.html",
  "rooms.html",
  "services.html",
  "blog.html",
  "elements.html",
];

const PALATIN = [
  "palatin",
  "classy",
  "classynav",
  "cssload",
  "owl-carousel",
  "colorlib",
  "icon-cocktail",
  "nice-select",
  "magnific",
  "jarallax",
  "font-awesome",
  "jquery",
  "bootstrap",
  "travel-icon",
  "hero-slides",
  "megamenu",
  "breadcumb",
  "testimonial-thumb",
  "single-rooms-area",
  "footer-widget-area",
  "widget-title",
  "preloader",
  "section-padding-100",
  "mt-50",
  "d-block",
  "fa fa-",
];

// Matched only as a whole class token, to avoid false hits such as
// "rounded-l", "inline-grid", "items-center" and "underline".
const WHOLE_CLASS = /(?:^|["\s])(?:line-|d-block|mt-50)(?:["\s]|$)/;

const count = (s, re) => (s.match(re) || []).length;
let failures = 0;
const fail = (page, msg) => {
  console.log("  FAIL " + page + " -> " + msg);
  failures++;
};

for (const page of PAGES) {
  const file = path.join(ROOT, page);
  if (!fs.existsSync(file)) {
    fail(page, "missing file");
    continue;
  }
  const t = fs.readFileSync(file, "utf8");

  const checks = {
    doctype: /^<!DOCTYPE html>/i.test(t),
    htmlTag: count(t, /<html[\s>]/g) === 1,
    headTag: count(t, /<head>/g) === 1,
    bodyTag: count(t, /<body[\s>]/g) === 1,
    mainOpen: count(t, /<main id="main">/g) === 1,
    mainClose: count(t, /<\/main>/g) === 1,
    footerTag: count(t, /<footer[\s>]/g) === 1,
    closesHtml: t.trimEnd().endsWith("</html>"),
    hasStylesheet: t.includes('href="style.css"'),
    hasScript: t.includes("js/main.js"),
    hasTitle: /<title>[^<]+<\/title>/.test(t),
    hasViewport: t.includes("width=device-width"),
    hasLang: /<html lang="en"/.test(t),
    noMarkers: !/__[A-Z_]+__/.test(t),
    noTemplateLeak: !/\$require/.test(t),
    noMojibake: !/[\u00C2\u00C3\u00E2]/.test(t),
  };

  const bad = Object.keys(checks).filter((k) => !checks[k]);
  if (bad.length) fail(page, bad.join(", "));
  else console.log("  OK   " + page + "  (" + t.length + " bytes)");
}

// ---- Palatin residue --------------------------------------------------
console.log("\nPalatin residue scan:");
let residue = 0;
for (const file of [...PAGES, "js/main.js", "src/input.css", "tailwind.config.js"]) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) continue;
  const t = fs.readFileSync(p, "utf8").toLowerCase();
  for (const token of PALATIN) {
    if (t.includes(token)) {
      // main.js documents that these are NOT used; allow that comment
      if (file === "js/main.js" && (token === "jquery" || token === "bootstrap")) continue;
      console.log("  FOUND '" + token + "' in " + file);
      residue++;
    }
  }
  if (WHOLE_CLASS.test(t)) {
    console.log("  FOUND legacy class token in " + file);
    residue++;
  }
}
if (!residue) console.log("  CLEAN - no Palatin markup, classes, or vendor references");

// ---- Image references -------------------------------------------------
console.log("\nImage references:");
const imgRefs = new Set();
for (const page of PAGES) {
  const t = fs.readFileSync(path.join(ROOT, page), "utf8");
  for (const m of t.matchAll(/(?:src|href)\s*=\s*["'](img\/[^"']+)["']/g)) {
    imgRefs.add(m[1]);
  }
}
let broken = 0;
for (const ref of [...imgRefs].sort()) {
  if (!fs.existsSync(path.join(ROOT, ref))) {
    console.log("  BROKEN " + ref);
    broken++;
  }
}
console.log("  " + imgRefs.size + " referenced, " + broken + " broken");

// ---- Vendor assets removed -------------------------------------------
console.log("\nPalatin vendor assets:");
const removed = ["css", "fonts", "scss", "js/plugins", "js/bootstrap", "js/jquery"];
let still = 0;
for (const dir of removed) {
  if (fs.existsSync(path.join(ROOT, dir))) {
    console.log("  STILL PRESENT: " + dir);
    still++;
  }
}
if (!still) console.log("  CLEAN - all vendor directories removed");

console.log(
  "\n" + (failures === 0 && broken === 0 && residue === 0 && still === 0
    ? "RESULT: PASS"
    : "RESULT: FAIL (structural=" + failures + " images=" + broken + " palatin=" + residue + " vendor=" + still + ")")
);
