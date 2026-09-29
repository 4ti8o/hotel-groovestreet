/** Shared page banner (replaces the Palatin breadcumb). */
const banner = (title, subtitle, img) => `
        <!-- ================= Page banner ================= -->
        <section class="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-ink-950">
            <img src="${img}" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover">
            <div class="overlay-darker"></div>
            <div class="container relative text-center text-white">
                <span class="eyebrow text-gold-300">Hotel GrooveStreet Uganda</span>
                <h1 class="heading-xl text-white mt-5">${title}</h1>
                <p class="lede text-white/80 mx-auto mt-5">${subtitle}</p>
            </div>
        </section>`;

/** Shared closing call-to-action band. */
const cta = (title, copy) => `
        <!-- ================= CTA ================= -->
        <section class="relative py-24 md:py-32 overflow-hidden">
            <img src="img/bg-img/bg-9.jpg" alt="" aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover">
            <div class="overlay-darker"></div>
            <div class="container relative text-center text-white">
                <div class="max-w-3xl mx-auto" data-reveal>
                    <span class="eyebrow text-gold-300">Make a Reservation</span>
                    <h2 class="heading-lg text-white mt-5">${title}</h2>
                    <p class="lede text-white/80 mx-auto mt-5">${copy}</p>
                    <div class="mt-9 flex flex-wrap justify-center gap-4">
                        <a href="contact.html" class="btn-gold">Contact Us</a>
                        <a href="rooms.html" class="btn-outline">View Rooms</a>
                    </div>
                </div>
            </div>
        </section>`;

module.exports = { banner, cta };
