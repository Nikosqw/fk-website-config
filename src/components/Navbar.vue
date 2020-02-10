<template>
  <div id="navbar" class="bg-navbar w-12/12 h-full">
    <div class="flex justify-between mx-16 py-1">
      <div class="flex flex-row items-center">
        <img class="w-18 h-16 rounded-lg" src="../assets/logo.png" alt="Logo server" />
        <router-link
          class="navbar_links text-gray-400 text-md py-2 px-4 rounded-lg ml-8 m-1"
          to="/home"
        >Accueil</router-link>
        <router-link
          class="navbar_links text-gray-400 text-md py-2 px-4 rounded-lg m-1"
          to="/create/teams"
        >Créer une config</router-link>
        <a class="navbar_links text-gray-400 text-md py-2 px-4 rounded-lg m-1" href="#">Discord</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>