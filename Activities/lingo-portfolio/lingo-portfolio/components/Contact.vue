<template>
<div class="bg-gradient-to-r from-purple-950 via-fucshia-900 to-purple-900" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 class="text-4xl font-bold text-white">Contact</h2>
        <p class="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-white">
            Want to contact us? Choose an
            option below and well be happy to show you how we can transform companys web experience.
        </p>
    </div>
    <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
            <h2 class="text-lg font-bold text-white">Contact Us</h2>
            <p class="max-w-sm mt-4 mb-4 text-white">Have something to say? We are here to help. Fill up the
                form or send email or call phone.</p>
            <div class="flex items-center mt-8 space-x-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z">
                    </path>
                </svg><span>Taguig City, Metro-Manila 1630</span>
            </div>
            <div class="flex items-center mt-2 space-x-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                    </path>
                </svg>
                <a href="mailto:hello@company.com">Jrosed.lingo@gmail.com</a>
            </div>
            <div class="flex items-center mt-2 space-x-2 text-dark-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                    </path>
                </svg>
                <a href="tel:11111111111">+639 1111 2223</a>
            </div>
        </div>
        <div>
            <form>
                <input type="checkbox" id="" class="hidden" style="display:none" name="botcheck">
                <div class="mb-5">
                    <input type="text" placeholder="Full Name" autocomplete="false"
                        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none 
                        placeholder:text-slate-400 bg-white focus:ring-2 border-gray-300 
                        focus:border-gray-600 ring-violet-300 border-violet-400 dark:focus:border-white dark:ring-0"
                        name="name">
                </div>
                <div class="mb-5">
                    <label for="email_address" class="sr-only">Email Address</label>
                    <input id="email_address" type="email" placeholder="Email Address" autocomplete="false"
                        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none 
                        dark:placeholder:text-slate-400 bg-white  focus:ring-2  border-gray-300 
                        focus:border-gray-600 ring-violet-300 border-violet-400 dark:focus:border-white dark:ring-0"
                        name="email">
                </div>
                <div class="mb-3">
                    <textarea placeholder="Your Message"
                        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white 
                        dark:placeholder:text-slate-400 bg-white rounded-md outline-none  h-36 focus:ring-2  border-gray-300 
                        focus:border-gray-600 ring-violet-300 border-violet-400 dark:focus:border-white dark:ring-0"
                        name="message">
                    </textarea>
                </div>
                <button type="submit"
                    class="w-full py-4 font-semibold text-white transition-colors bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
                    focus:ring-4 focus:outline-none focus:ring-purple-200 focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center me-2 mb-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 
                    focus:ring focus:ring-gray-200 px-7 bg-white  ">Send
                    Message
                </button>
            </form>
        </div>
    </div>
</div>
</template>