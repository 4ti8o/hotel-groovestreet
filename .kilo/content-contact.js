/** contact main content */
const icon = (d) =>
  `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${d}</svg>`;

const row = (label, value, d) => `
                                <div class="flex gap-4">
                                    <span class="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-gold-50 text-gold-600">
                                        ${icon(d)}
                                    </span>
                                    <div>
                                        <dt class="label">${label}</dt>
                                        <dd class="mt-1 text-ink-700">${value}</dd>
                                    </div>
                                </div>`;

const contact = `
        <!-- ================= Contact ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
                    <div data-reveal>
                        <span class="rule"></span>
                        <span class="eyebrow mt-6">Get in touch</span>
                        <h2 class="heading-lg mt-4">Send us a message</h2>
                        <p class="lede mt-5">Our team will respond as soon as possible.</p>

                        <form data-demo-form data-demo-form="Thank you — your message has been received and our team will reply shortly."
                            class="mt-9 space-y-5" novalidate>
                            <div class="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label class="label mb-2" for="name">Your Name</label>
                                    <input class="field" type="text" id="name" name="name" required autocomplete="name">
                                </div>
                                <div>
                                    <label class="label mb-2" for="email">Email</label>
                                    <input class="field" type="email" id="email" name="email" required autocomplete="email">
                                </div>
                            </div>
                            <div>
                                <label class="label mb-2" for="subject">Subject</label>
                                <input class="field" type="text" id="subject" name="subject">
                            </div>
                            <div>
                                <label class="label mb-2" for="message">Message</label>
                                <textarea class="field" id="message" name="message" rows="8" required></textarea>
                            </div>
                            <button type="submit" class="btn-gold w-full sm:w-auto">Send Message</button>
                            <p data-form-status class="text-sm font-medium text-green-700" role="status" aria-live="polite"></p>
                        </form>
                    </div>
                    <div data-reveal>
                        <div class="card p-8 md:p-10">
                            <h2 class="heading-md text-2xl">Contact info</h2>
                            <dl class="mt-8 space-y-7">
${row("Address", "Plot 12, Buganda Road, Kampala, Uganda", '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke-linejoin="round" /><circle cx="12" cy="10" r="2.5" />')}
${row("Phone", '<a href="tel:+256414123456" class="hover:text-gold-600 transition-colors">+256 414 123 456</a>', '<path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a1 1 0 01-1 1A15 15 0 014 5a1 1 0 011-1z" stroke-linejoin="round" />')}
${row("Email", '<a href="mailto:info@hotelgroovestreet.ug" class="hover:text-gold-600 transition-colors">info@hotelgroovestreet.ug</a>', '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" stroke-linejoin="round" />')}
${row("Reception", "Available 24/7 for assistance with your stay", '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" stroke-linecap="round" stroke-linejoin="round" />')}
${row("Reservation Office", "Mon–Fri: 8:00 AM – 10:00 PM<br>Sat–Sun: 9:00 AM – 9:00 PM", '<rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" stroke-linecap="round" />')}
                            </dl>
                            <div class="mt-8 flex gap-3">
                                <a href="#" aria-label="Facebook" class="grid place-items-center w-10 h-10 rounded-full border border-ink-200 hover:border-gold-400 hover:text-gold-600 transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" /></svg></a>
                                <a href="#" aria-label="Instagram" class="grid place-items-center w-10 h-10 rounded-full border border-ink-200 hover:border-gold-400 hover:text-gold-600 transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg></a>
                                <a href="#" aria-label="X" class="grid place-items-center w-10 h-10 rounded-full border border-ink-200 hover:border-gold-400 hover:text-gold-600 transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-6l-4.7-6.1L5.4 21h-3l7-8-7-10h6.2l4.3 5.6L17.5 3z" /></svg></a>
                                <a href="#" aria-label="LinkedIn" class="grid place-items-center w-10 h-10 rounded-full border border-ink-200 hover:border-gold-400 hover:text-gold-600 transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 8H4V21h2.9V8zM5.4 3a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM11 8H8.2v13H11v-6.5c0-1.7.3-3.4 2.4-3.4 2.1 0 2.1 2 2.1 3.5V21h2.9v-7.3c0-3.4-.7-6-4.6-6-1.9 0-3.1 1-3.7 2h-.1V8z" /></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ================= Map ================= -->
        <section class="pb-20 md:pb-28">
            <div class="container">
                <div class="relative overflow-hidden rounded-sm border border-ink-100">
                    <div data-map data-map-key="AIzaSyAwuyLRa1flTbsmt9tnLmR5XGYBd1tOLdc"
                        class="w-full h-[24rem] md:h-[28rem] bg-ink-100" role="region"
                        aria-label="Map showing Hotel GrooveStreet in Kampala, Uganda"></div>
                    <p data-map-status hidden
                        class="absolute inset-0 grid place-items-center p-8 text-center text-ink-500 bg-ink-50">
                        The interactive map could not be loaded. You can find us at Plot 12, Buganda Road, Kampala, Uganda.
                    </p>
                </div>
            </div>
        </section>`;

