<template>
    <body class="bg-gray-400 font-sans leading-normal tracking-normal">
   <Navnuxt />
   <Home />
   <About />
   <Projects />
   <Contact />
   <Footer />
</body>
</template>

<script setup>
useHead({
    title: 'Espinosa Portfolio',
    meta: [
    {
        name: "author",
        content: "John Rollyver Espinosa",
    },
    {
        name: "description",
        content: "Nuxt Portfolio",
    },
    {
        name: "keywords",
        content: "Nuxt 3, Tailwind, Vue 3, JS",
    },
    ],
});
</script>