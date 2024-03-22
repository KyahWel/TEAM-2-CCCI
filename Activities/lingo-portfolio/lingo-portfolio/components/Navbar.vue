<template>
    <nav class="flex items-center justify-between flex-wrap bg-indigo-300 p-3 fixed w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white ml-6">
        <img class="logonav"src="public/Jrdl-Logo.png">
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a class="md:p-4 py-3 px-0 block" href="#Home">Home</a></li>
                <li><a class="md:p-4 py-3 px-0 block" href="#About">About</a></li>
                <li><a class="md:p-4 py-3 px-0 block" href="#Project">Project</a></li>
                <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#Contact">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</nav>
</template>