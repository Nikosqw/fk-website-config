<template>
  <div id="color-modal" class="relative inline-block">
    <button @click="isOpen = true" class="px-4 py-3 rounded-lg bg-blue-500 text-white">
      <i class="fas fa-fill-drip"></i>
    </button>
    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0" tabindex="-1"></div>

    <transition
      enter-class="opacity-0 scale-90"
      enter-active-class="ease-out transition-fastest"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-active-class="ease-in transition-fastest"
      leave-to-class="opacity-0 scale-90"
    >
      <div v-if="isOpen" class="mt-2 absolute left-0 origin-top-right text-left">
        <div class="w-64 h-full bg-white rounded-lg shadow-lg">
          <div class="flex flex-wrap py-4 px-1">
            <span class="text-gray-700 text-lg font-bold ml-2 border-b-2">Sélectionner une couleur</span>
            <a
              @click="$emit('input', 'ROUGE'), isOpen = false"
              class="py-2 px-4 m-1 mt-2 rounded-lg bg-red-500 text-white cursor-pointer"
            >ROUGE</a>
            <a
              @click="$emit('input', 'ORANGE'), isOpen = false"
              class="py-2 px-4 m-1 mt-2 rounded-lg bg-orange-500 text-white cursor-pointer"
            >ORANGE</a>
            <a
              @click="$emit('input', 'VERT'), isOpen = false"
              class="py-2 px-4 m-1 rounded-lg bg-green-500 text-white cursor-pointer"
            >VERT</a>
            <a
              @click="$emit('input', 'JAUNE'), isOpen = false"
              class="py-2 px-4 m-1 rounded-lg bg-yellow-500 text-white cursor-pointer"
            >JAUNE</a>
            <a
              @click="$emit('input', 'BLEU'), isOpen = false"
              class="py-2 px-4 m-1 rounded-lg bg-blue-500 text-white cursor-pointer"
            >BLEU</a>
            <a
              @click="$emit('input', 'ROSE'), isOpen = false"
              class="py-2 px-4 m-1 rounded-lg bg-pink-500 text-white cursor-pointer"
            >ROSE</a>
            <a
              @click="$emit('input', 'VIOLET'), isOpen = false"
              class="py-2 px-4 m-1 rounded-lg bg-purple-500 text-white cursor-pointer"
            >PURPLE</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "color-modal",
  data() {
    return {
      isOpen: false,
      color: ""
    };
  },
  methods: {
    setColor(item) {
      this.color = item;
    }
  }
};
</script>