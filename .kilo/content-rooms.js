/** rooms main content */
const room = (name, price, img, alt, desc, features) => `
                <article class="card-hover overflow-hidden flex flex-col" data-reveal>
                    <div class="relative">
                        <img src="${img}" alt="${alt}" class="w-full h-64 object-cover">
                        <span class="absolute top-4 right-4 bg-ink-950/75 text-white text-xs px-3 py-1.5 tracking-widest">From ${price}/night</span>
                    </div>
                    <div class="p-7 flex flex-col flex-1">
                        <h2 class="heading-md text-2xl">${name}</h2>
                        <p class="mt-3 text-ink-500 text-sm leading-relaxed">${desc}</p>
                        <ul class="mt-5 space-y-2 text-sm text-ink-600">
${features
  .map(
    (f) => `                            <li class="flex items-start gap-2">
                                <svg class="w-4 h-4 text-gold-500 shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                ${f}
                            </li>`
  )
  .join("\n")}
                        </ul>
                        <a href="contact.html" class="btn-ink w-full mt-7 mt-auto">Book Now</a>
                    </div>
                </article>`;

const rooms = `
        <!-- ================= Rooms ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Accommodations</span>
                    <h2 class="heading-lg mt-4">Our luxury rooms in Uganda</h2>
                    <p class="lede mx-auto mt-5">
                        Discover our thoughtfully designed rooms and suites with breathtaking views of the Rwenzori
                        Mountains and Lake Victoria.
                    </p>
                </div>

                <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
${room("Deluxe Mountain View", "$200", "img/bg-img/1.jpg", "Deluxe Mountain View Room", "Spacious room with panoramic views of the Rwenzori Mountains.", [
    "Size: 35 m²",
    "Capacity: Max 4 persons",
    "Bed: King size beds",
    "Services: Free Wi-Fi, Mini Bar, Mountain View",
  ])}
${room("Executive Suite", "$350", "img/bg-img/8.jpg", "Executive Suite", "Features premium amenities and traditional Ugandan décor.", [
    "Size: 55 m²",
    "Capacity: Max 3 persons",
    "Bed: Super king bed",
    "Services: Executive lounge, Bathtub, Lake view",
  ])}
${room("Presidential Suite", "$500", "img/bg-img/9.jpg", "Presidential Suite", "Our most luxurious accommodation with private terrace, butler service, and breathtaking views of Lake Victoria.", [
    "Size: 90 m²",
    "Capacity: Max 6 persons",
    "Bed: Two king beds",
    "Services: Private terrace, Butler, Jacuzzi",
  ])}
${room("Family Suite", "$280", "img/bg-img/10.jpg", "Family Suite", "Designed for families, with two bedrooms and generous living space.", [
    "Size: 70 m²",
    "Capacity: Max 6 persons",
    "Bed: Queen and twin beds",
    "Services: Kids club, Kitchenette, Pool access",
  ])}
${room("Premium Lake View", "$240", "img/bg-img/11.jpg", "Premium Lake View Room", "Wake to uninterrupted views across Lake Victoria.", [
    "Size: 40 m²",
    "Capacity: Max 3 persons",
    "Bed: King size bed",
    "Services: Free Wi-Fi, Lake view, Mini Bar",
  ])}
${room("Gorilla Trekking Suite", "$320", "img/bg-img/12.jpg", "Gorilla Trekking Suite", "The perfect base for early starts on Bwindi Impenetrable Forest excursions.", [
    "Size: 50 m²",
    "Capacity: Max 4 persons",
    "Bed: Two queen beds",
    "Services: Equipment storage, Early breakfast, Laundry",
  ])}
                </div>
            </div>
        </section>
${require("./shared").cta(
  "Experience luxury in Uganda today",
  "Book your stay at Hotel GrooveStreet Uganda and discover our premium services."
)}`;

module.exports = { rooms };

