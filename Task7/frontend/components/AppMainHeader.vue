
<template>
    <div>
        <a-layout-header :style="mainheaderstyle" >
           <a-row type="flex" align="start" justify="center"  >
            <span class="text-white font-bold">Welcome to my app</span>
           </a-row>
        </a-layout-header>
        
    </div>
  </template>
  
  <script lang="ts" setup>
  const mainheaderstyle: CSSProperties = { //para po ito sa kulay ng aking malupit na sidebar
    backgroundColor:' #b45309',
  }
  </script>
  
  <style>
  
  </style>