/** Five gold stars, as inline SVG (avoids fragile text glyphs). */
const stars = () =>
  `<div class="flex gap-1 text-gold-400" role="img" aria-label="Rated 5 out of 5">` +
  `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 6.6 7 .9-5.1 4.9 1.3 7L12 18l-6.2 3.4 1.3-7L2 9.5l7-.9L12 2z" /></svg>`
    .repeat(5) +
  `</div>`;

const about = `
        <!-- ================= Story ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
                    <div data-reveal>
                        <span class="rule"></span>
                        <span class="eyebrow mt-6">Our Story</span>
                        <h2 class="heading-lg mt-4">About Hotel GrooveStreet Uganda</h2>
                        <div class="prose-ink mt-6">
                            <p>
                                Founded in 2010, Hotel GrooveStreet Uganda has established itself as a premier destination
                                for luxury travellers seeking an exceptional experience in the heart of East Africa. Our
                                commitment to excellence has made us a landmark of hospitality, combining contemporary
                                elegance with warm, personalised service and authentic Ugandan hospitality.
                            </p>
                        </div>
                        <ul class="mt-8 space-y-3">
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-gold-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <span>Over 10 years of excellence in hospitality in Uganda</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-gold-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <span>Committed to sustainable and responsible tourism in East Africa</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-gold-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <span>Gateway to gorilla trekking, wildlife safaris, and cultural experiences</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-gold-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <span>Team of internationally trained professionals with local expertise</span>
                            </li>
                        </ul>
                        <a href="rooms.html" class="btn-ink mt-10">Discover Our Rooms</a>
                    </div>
                    <div data-reveal>
                        <img src="img/bg-img/11.jpg" alt="Hotel GrooveStreet Uganda exterior" class="w-full h-[26rem] md:h-[34rem] object-cover rounded-sm shadow-xl">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= Video ================= -->
        <section class="relative py-24 md:py-32 overflow-hidden">
            <img src="img/bg-img/12.jpg" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover">
            <div class="overlay-darker"></div>
            <div class="container relative text-center text-white">
                <div class="max-w-2xl mx-auto" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow text-gold-300 mt-6">Our Story</span>
                    <h2 class="heading-lg text-white mt-4">Watch our story</h2>
                    <p class="lede text-white/80 mx-auto mt-5">Experience the Hotel GrooveStreet Uganda difference</p>
                    <a href="https://www.youtube.com/watch?v=ujLBDfiiUfo"
                        class="mt-9 inline-grid place-items-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-ink-900 transition-colors duration-300"
                        aria-label="Play our video">
                        <svg class="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5z" /></svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- ================= Our hotel ================= -->
        <section class="section bg-ink-50">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Our Hotel</span>
                    <h2 class="heading-lg mt-4">Where comfort meets the Pearl of Africa</h2>
                </div>
                <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="card-hover overflow-hidden" data-reveal>
                        <img src="img/bg-img/3.jpg" alt="Hotel GrooveStreet lobby" class="w-full h-56 object-cover">
                        <div class="p-7">
                            <h3 class="heading-md text-2xl">Grand Lobby</h3>
                            <p class="mt-3 text-ink-500 text-sm leading-relaxed">Handcrafted Ugandan artwork, warm lighting, and a 24-hour concierge desk greet every arrival.</p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden" data-reveal style="--reveal-delay:100ms">
                        <img src="img/bg-img/10.jpg" alt="Hotel GrooveStreet pool area" class="w-full h-56 object-cover">
                        <div class="p-7">
                            <h3 class="heading-md text-2xl">Pool Terrace</h3>
                            <p class="mt-3 text-ink-500 text-sm leading-relaxed">An infinity pool overlooking the Rwenzori range, with sunbeds and poolside service.</p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden" data-reveal style="--reveal-delay:200ms">
                        <img src="img/bg-img/11.jpg" alt="Hotel GrooveStreet dining room" class="w-full h-56 object-cover">
                        <div class="p-7">
                            <h3 class="heading-md text-2xl">Dining Room</h3>
                            <p class="mt-3 text-ink-500 text-sm leading-relaxed">Award-winning cuisine showcasing groundnut stew, luwombo, and seasonal Ugandan produce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ================= Testimonials ================= -->
        <section class="section bg-ink-950 text-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow text-gold-300 mt-6">Guest Reviews</span>
                    <h2 class="heading-lg text-white mt-4">What our guests say</h2>
                </div>
                <div class="mt-16 grid gap-8 md:grid-cols-3">
                    <figure class="card bg-white/5 ring-white/10 p-8" data-reveal>
                        ${stars()}
                        <blockquote class="mt-6 text-white/85 leading-relaxed">
                            "An unforgettable experience. The staff arranged our gorilla trekking permits and the service
                            was exceptional from arrival to departure."
                        </blockquote>
                        <figcaption class="mt-6 flex items-center gap-4">
                            <img src="img/bg-img/13.jpg" alt="" aria-hidden="true" class="w-12 h-12 rounded-full object-cover">
                            <div>
                                <p class="text-gold-300">Sarah Whitfield</p>
                                <p class="text-sm text-white/50">Adventure Traveller</p>
                            </div>
                        </figcaption>
                    </figure>

                    <figure class="card bg-white/5 ring-white/10 p-8" data-reveal style="--reveal-delay:100ms">
                        ${stars()}
                        <blockquote class="mt-6 text-white/85 leading-relaxed">
                            "The location is perfect, the rooms are luxurious, and the service is impeccable. I can't wait
                            to return to explore more of Uganda's beautiful landscapes and wildlife."
                        </blockquote>
                        <figcaption class="mt-6 flex items-center gap-4">
                            <img src="img/bg-img/14.jpg" alt="" aria-hidden="true" class="w-12 h-12 rounded-full object-cover">
                            <div>
                                <p class="text-gold-300">Michael Chen</p>
                                <p class="text-sm text-white/50">Wildlife Photographer</p>
                            </div>
                        </figcaption>
                    </figure>

                    <figure class="card bg-white/5 ring-white/10 p-8" data-reveal style="--reveal-delay:200ms">
                        ${stars()}
                        <blockquote class="mt-6 text-white/85 leading-relaxed">
                            "The attention to detail and quality of service exceeded all expectations. The cultural
                            experiences arranged by the concierge were incredible. Highly recommended!"
                        </blockquote>
                        <figcaption class="mt-6 flex items-center gap-4">
                            <img src="img/bg-img/15.jpg" alt="" aria-hidden="true" class="w-12 h-12 rounded-full object-cover">
                            <div>
                                <p class="text-gold-300">Emma Rodriguez</p>
                                <p class="text-sm text-white/50">Cultural Tourist</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
${require("./shared").cta(
  "Experience luxury in Uganda today",
  "Discover our premium services designed to make your visit to the Pearl of Africa exceptional."
)}`;

module.exports = { about };

