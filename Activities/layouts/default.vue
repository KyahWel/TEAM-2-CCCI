<template>
    <Navbar />
    <slot />
    <Watermark />
</template>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'lato';
        user-select: none;
    }
    body {
        background-color: #1e1e1e;
    }
</style>