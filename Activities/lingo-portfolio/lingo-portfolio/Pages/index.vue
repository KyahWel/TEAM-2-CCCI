<template>
    <Navbar />
    <Home />
    <About/>
    <Project />
    <Contact />
    <Footer />
</template>

<script setup>
useHead({
    title: "Lingo Portfolio",
    meta: [
        {
            name: "author",
            content: "Janine Lingo",
        },
        {
            name: "description",
            content: "Home-portfolio",
        },
        {
            name: "keywords",
            content: "Nuxt 3 Tailwind Portfolio",
        },
    ]
});

</script>

