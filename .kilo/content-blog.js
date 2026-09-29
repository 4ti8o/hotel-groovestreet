/** blog main content */
const post = (date, title, category, comments, img, alt, excerpt) => `
                    <article class="card-hover overflow-hidden flex flex-col" data-reveal>
                        <img src="${img}" alt="${alt}" class="w-full h-64 object-cover">
                        <div class="p-7 flex flex-col flex-1">
                            <div class="flex flex-wrap items-center gap-3 text-xs">
                                <span class="bg-gold-500 text-white px-3 py-1.5 tracking-widest uppercase">${date}</span>
                                <a href="#" class="text-ink-500 hover:text-gold-600 transition-colors">${category}</a>
                                <a href="#" class="text-ink-500 hover:text-gold-600 transition-colors">${comments} comments</a>
                            </div>
                            <h2 class="heading-md text-2xl mt-5">
                                <a href="#" class="hover:text-gold-600 transition-colors">${title}</a>
                            </h2>
                            <p class="mt-4 text-ink-500 text-sm leading-relaxed">${excerpt}</p>
                            <a href="#" class="btn-ghost mt-6 mt-auto">Read More</a>
                        </div>
                    </article>`;

const blog = `
        <!-- ================= Posts ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Latest</span>
                    <h2 class="heading-lg mt-4">News & travel guides</h2>
                </div>

                <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
${post("June 25, 2023", "Gorilla Trekking Season Opening in Bwindi Impenetrable Forest", "Travel Tips", 5, "img/blog-img/1.jpg", "Gorilla trekking in Bwindi Impenetrable Forest", "With the dry season approaching, Bwindi Impenetrable Forest is preparing for peak gorilla trekking season. Our hotel offers convenient packages with expert guides and comfortable accommodations to make your gorilla encounter unforgettable. Learn about the best times to visit, what to pack, and how to prepare for this once-in-a-lifetime experience in the heart of Uganda.")}
${post("July 15, 2023", "Ugandan Cuisine Festival at Hotel GrooveStreet", "Events", 8, "img/blog-img/2.jpg", "Ugandan cuisine festival", "Join us for our annual celebration of Ugandan culinary traditions! Our chefs will showcase the diverse flavors of the Pearl of Africa, from groundnut stew to luwombo. Experience cooking demonstrations, taste regional specialties, and learn about the cultural significance of traditional dishes. The festival runs from July 20-25 and includes special accommodation packages.")}
${post("August 5, 2023", "Top 5 Safari Destinations in Uganda", "Travel Guide", 12, "img/blog-img/3.jpg", "Safari destinations in Uganda", "Beyond the famous mountain gorillas, Uganda offers incredible wildlife experiences. From Queen Elizabeth National Park's tree-climbing lions to Murchison Falls' dramatic cascade, discover the country's diverse ecosystems. Learn about the best times to visit, what animals to expect, and how to combine multiple parks in one unforgettable trip. Our concierge team can customize your safari itinerary.")}
                </div>

                <div class="mt-16 text-center" data-reveal>
                    <a href="#" class="btn-ink">Load More</a>
                </div>
            </div>
        </section>
${require("./shared").cta(
  "Plan your Ugandan escape",
  "Our concierge team will help you build an itinerary around gorilla trekking, cultural tours, and safaris."
)}`;

module.exports = { blog };

