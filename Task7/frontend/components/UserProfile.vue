<template>
    <a-row type="flex" justify="center" align="middle" style="min-height: 85vh ">
      <a-col >
        
        <a-card :class="{  'rounded': true, 'border': true, 'bg-white': true, 'p-2': true, 'shadow': true, 'open': open }">
           
          <a-space v-if="!open" align="center">
            <div class="ml-2">First Name: John Rollyver</div>

            <div class="ml-2">Middle Name: Queñano</div>

            <div class="ml-2">Last Name: Espinosa</div>
            
            <div class="ml-2">Email: Espinosa</div>

            <div class="ml-2">Username: Espinosa</div>

            <div class="ml-2">Password: Espinosa</div>
            
          </a-space>

         
          
          <a-space v-else align="center">
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-input v-model="inputValue" class="mr-4 w-full" />
            <a-space>
              <a-button @click="open = false">Cancel</a-button>
              <a-button type="primary" @click="open = false">Save</a-button>
            </a-space>
          </a-space>
          <a-space v-if="!open" align="center">
          <a-button type="primary" @click="open = !open" :class="{'m-2': true, 'bg-amber-500':true, 'hover:bg-amber-400':true,}">Edit</a-button>
        </a-space>
        </a-card>
        
      </a-col>
    </a-row>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const open = ref(false);
      const inputValue = ref('');
  
      return {
        open,
        inputValue
      };
    }
  };
  </script>
  