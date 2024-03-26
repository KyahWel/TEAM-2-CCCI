<template>
  <div class="bg-gradient-to-r from-pink-300 via-indigo-200 to-violet-300 flex flex-col h-screen p-24" id="Home">
    <div class="container mx-auto px-12 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-2">
                    Hey it's me!
                </h1>
                <span class="text-4xl md:text-6xl lg:text-7xl text-indigo-500 font-extrabold">JANINE ROSE <br>DE LUNA LINGO</span>
                <p class="text-lg md:text-xl lg:text-3xl text-indigo-400 mb-8 font-bold">
                   A FRONT-END DEVELOPER.
                </p>
                <div class="flex gap-2">
                    <a href="#About" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">
                        Get Started
                    </a>
                    <a href="./LINGORESUME.pdf" target="_blank" class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">
                        Download CV
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/2 mt-9 md:mt-20">
                <img src="/public/H-profile.png" alt="Heroprofile">
            </div>
        </div>
    </div>
    <div id="About"></div>
</div>
</template>