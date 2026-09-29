/** elements main content */
const elements = `
        <!-- ================= Typography ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Foundations</span>
                    <h2 class="heading-lg mt-4">Typography</h2>
                    <p class="lede mx-auto mt-5">A sample of the type scale and components used across this website.</p>
                </div>
                <div class="mt-16">
                    <div class="card p-8 md:p-12" data-reveal>
                        <h3 class="heading-xl">Heading one</h3>
                        <h3 class="heading-lg mt-4">Heading two</h3>
                        <h3 class="heading-md mt-4">Heading three</h3>
                        <p class="lede mt-4">Body copy sits at a comfortable reading size with generous line height.</p>
                        <p class="mt-4 text-ink-500 text-sm">Small supporting text, such as captions and helper copy.</p>
                        <p class="mt-4"><span class="eyebrow">Eyebrow label</span></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= Buttons ================= -->
        <section class="section bg-ink-50">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Actions</span>
                    <h2 class="heading-lg mt-4">Buttons</h2>
                </div>
                <div class="mt-14 flex flex-wrap items-center justify-center gap-4" data-reveal>
                    <a href="#" class="btn-gold">Gold</a>
                    <a href="#" class="btn-ink">Ink</a>
                    <a href="#" class="btn-ghost">Ghost</a>
                    <a href="#" class="btn-outline bg-ink-900">Outline</a>
                    <button type="button" class="btn-gold" disabled>Disabled</button>
                </div>
            </div>
        </section>
        <!-- ================= Forms ================= -->
        <section class="section bg-white">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Inputs</span>
                    <h2 class="heading-lg mt-4">Form elements</h2>
                </div>
                <form class="mt-14 max-w-2xl mx-auto space-y-5" data-reveal novalidate onsubmit="return false">
                    <div class="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label class="label mb-2" for="el-text">Text input</label>
                            <input class="field" type="text" id="el-text" placeholder="Your name">
                        </div>
                        <div>
                            <label class="label mb-2" for="el-email">Email input</label>
                            <input class="field" type="email" id="el-email" placeholder="you@example.com">
                        </div>
                    </div>
                    <div>
                        <label class="label mb-2" for="el-select">Select</label>
                        <select class="field" id="el-select">
                            <option>Deluxe Mountain View</option>
                            <option>Executive Suite</option>
                            <option>Presidential Suite</option>
                        </select>
                    </div>
                    <div>
                        <label class="label mb-2" for="el-textarea">Textarea</label>
                        <textarea class="field" id="el-textarea" rows="5" placeholder="Your message"></textarea>
                    </div>
                    <div class="flex items-center gap-3">
                        <input class="w-4 h-4 rounded border-ink-300 text-gold-500 focus:ring-gold-500" type="checkbox" id="el-check">
                        <label class="text-sm text-ink-600" for="el-check">I would like a gorilla trekking permit arranged</label>
                    </div>
                    <button type="submit" class="btn-gold">Submit</button>
                </form>
            </div>
        </section>

        <!-- ================= Cards ================= -->
        <section class="section bg-ink-50">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center" data-reveal>
                    <span class="rule mx-auto"></span>
                    <span class="eyebrow mt-6">Surfaces</span>
                    <h2 class="heading-lg mt-4">Cards</h2>
                </div>
                <div class="mt-14 grid gap-8 md:grid-cols-3" data-reveal>
                    <div class="card p-8">
                        <h3 class="heading-md text-2xl">Standard card</h3>
                        <p class="mt-3 text-ink-500 text-sm leading-relaxed">A flat surface with subtle shadow and ring.</p>
                    </div>
                    <div class="card-hover p-8">
                        <h3 class="heading-md text-2xl">Hover card</h3>
                        <p class="mt-3 text-ink-500 text-sm leading-relaxed">Lifts and gains a gold-tinted ring on hover.</p>
                    </div>
                    <div class="card p-8 bg-ink-950 text-white ring-ink-950">
                        <h3 class="heading-md text-2xl text-white">Dark card</h3>
                        <p class="mt-3 text-white/60 text-sm leading-relaxed">The same component on the dark palette.</p>
                    </div>
                </div>
            </div>
        </section>
${require("./shared").cta(
  "Ready to explore Uganda?",
  "Our reservations team is available 24/7 to plan your stay and arrange experiences."
)}`;

