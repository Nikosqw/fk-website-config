<template>
  <div id="sidebar" class="bg-sidebar w-2/12 h-screen">
    <div class="flex flex-col">
      <router-link class="py-4 pl-4 text-red-400" to="/create/teams">
        <i class="fas fa-user-friends mr-1"></i>Equipes
      </router-link>
      <router-link class="py-4 pl-4 text-gray-400" to="/create/config">
        <i class="fas fa-cog mr-1"></i>Configuration
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>