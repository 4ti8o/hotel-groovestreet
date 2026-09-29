/** services main content */
const service = (title, copy, icon) => `
                    <div class="card-hover p-8 text-center" data-reveal>
                        <span class="grid place-items-center w-14 h-14 mx-auto rounded-full bg-gold-50 text-gold-600">
                            ${icon}
                        </span>
                        <h2 class="heading-md mt-6 text-2xl">${title}</h2>
                        <p class="mt-3 text-ink-500 text-sm leading-relaxed">${copy}</p>
                    </div>`;

const services = `
        <!-- ================= Services ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">What We Offer</span>
                    <h2 class="heading-lg mt-4">Premium services in Uganda</h2>
                    <p class="lede mx-auto mt-5">Discover the luxury services that define Hotel GrooveStreet Uganda</p>
                </div>

                <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
${service("Ugandan Culinary Experience", "Indulge in culinary excellence at our award-winning restaurants featuring world-class cuisine with authentic Ugandan flavors prepared by renowned chefs.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 3v8a3 3 0 006 0V3M9 11v10M17 3c-1.5 2-2 4-2 6s.5 3 2 3 2-1 2-3-.5-4-2-6zM17 12v9" stroke-linecap="round" stroke-linejoin="round" /></svg>`)}
${service("Spa & Wellness", "Rejuvenate your body and mind at our world-class spa with premium treatments inspired by traditional African healing practices, thermal experiences, and fitness facilities.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 21c4-2 7-5.5 7-10a7 7 0 10-14 0c0 4.5 3 8 7 10z" stroke-linejoin="round" /><circle cx="12" cy="10" r="2.5" /></svg>`)}
${service("Concierge Service", "Our dedicated concierge team is available 24/7 to arrange gorilla trekking permits, cultural tours, safari bookings, and other activities to explore the Pearl of Africa.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0114 0" stroke-linecap="round" /></svg>`)}
${service("Transportation", "Luxury airport transfers and private hire vehicles with professional drivers, plus helicopter and light-aircraft charters for wider Uganda.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 13l2-5h14l2 5M3 13h18M3 13v4h3v-4M18 13v4h3v-4M7 17v2M17 17v2" stroke-linecap="round" stroke-linejoin="round" /></svg>`)}
${service("Fitness Center", "A fully-equipped fitness centre with modern cardio equipment, free weights, personal training, and yoga classes overlooking the Kampala skyline.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" stroke-linecap="round" /></svg>`)}
${service("Event Spaces", "Elegant venues for weddings, conferences, and celebrations, with dedicated planners, catering, and AV support in the heart of Kampala.", `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 20h16M6 20V9l6-4 6 4v11" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 20v-5h4v5" stroke-linecap="round" stroke-linejoin="round" /></svg>`)}
                </div>
            </div>
        </section>
        <!-- ================= Special features ================= -->
        <section class="relative py-24 md:py-32 overflow-hidden bg-ink-950">
            <div class="container relative">
                <div class="max-w-3xl mx-auto text-center text-white" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow text-gold-300 mt-6">Signature</span>
                    <h2 class="heading-lg text-white mt-4">Special features</h2>
                </div>

                <div class="mt-16 space-y-16">
                    <div class="grid gap-10 md:grid-cols-2 items-center" data-reveal>
                        <img src="img/bg-img/16.jpg" alt="Executive Lounge" class="w-full h-72 object-cover rounded-sm">
                        <div>
                            <h3 class="heading-md text-2xl text-white">Executive Lounge</h3>
                            <p class="mt-4 text-white/70 leading-relaxed">
                                Relax in our executive lounge with panoramic city views, curated Ugandan art on display,
                                and complimentary refreshments throughout the day.
                            </p>
                            <a href="contact.html" class="btn-outline mt-7">Read More</a>
                        </div>
                    </div>

                    <div class="grid gap-10 md:grid-cols-2 items-center" data-reveal>
                        <div class="md:order-2">
                            <h3 class="heading-md text-2xl text-white">Cultural Heritage Lounge</h3>
                            <p class="mt-4 text-white/70 leading-relaxed">
                                Exclusive access to our elegant cultural heritage lounge offering traditional Ugandan
                                refreshments, local craft displays, and cultural presentations for our distinguished guests.
                            </p>
                            <a href="contact.html" class="btn-outline mt-7">Read More</a>
                        </div>
                        <img src="img/bg-img/17.jpg" alt="Cultural Heritage Lounge" class="md:order-1 w-full h-72 object-cover rounded-sm">
                    </div>

                    <div class="grid gap-10 md:grid-cols-2 items-center" data-reveal>
                        <img src="img/bg-img/18.jpg" alt="Fitness Center" class="w-full h-72 object-cover rounded-sm">
                        <div>
                            <h3 class="heading-md text-2xl text-white">Fitness Center</h3>
                            <p class="mt-4 text-white/70 leading-relaxed">
                                Stay active during your stay at our fully-equipped fitness center featuring modern cardio
                                equipment, free weights, personal training services, and yoga classes with certified
                                instructors overlooking the Kampala skyline.
                            </p>
                            <a href="contact.html" class="btn-outline mt-7">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
${require("./shared").cta(
  "Experience luxury in Uganda today",
  "Book your stay at Hotel GrooveStreet Uganda and discover our premium services designed to make your visit to the Pearl of Africa exceptional."
)}`;

module.exports = { services };

