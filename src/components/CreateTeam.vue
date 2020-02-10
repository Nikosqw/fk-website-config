<template>
  <div id="create-config-team" class="m-16">
    <button
      class="bg-blue-500 rounded-lg py-2 px-4 text-white"
      @click="addTeam()"
    >Ajouter une équipe</button>
    <div class="flex flex-row items-center mt-3">
      <div class="flex flex-col">
        <span class="text-gray-700 text-2xl font-bold border-b-2">Création des équipes</span>
        <p
          class="text-gray-500 mt-1"
        >Créez des équipes et ajoutez-y le pseudo des joueurs que vous souhaitez</p>
        <div class="flex flex-wrap justify-start m-4">
          <div v-for="(team, index) in teams" class="flex flex-col items-center border-r-2 pr-8">
            <span class="text-gray-700 text-sm">({{ team.length }} joueurs)</span>
            <div v-for="player in team">
              <span class="text-gray-700 text-sm mt-3">{{ player.name }}</span>
            </div>
            <div class="relative w-full mx-auto pl-6 mt-1">
              <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                <i class="fas fa-pen fa-lg"></i>
              </div>
              <input
                id="search-toggle"
                placeholder="Nom de l'équipe"
                class="block w-full bg-gray-100 focus:outline-none focus:shadow text-gray-700 font-bold rounded-lg pl-12 pr-4 py-3"
                v-model="teamName[index]"
              />
            </div>
            <div class="flex flex-row items-center mt-1">
              <div class="relative w-full mx-auto pl-6">
                <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                  <i class="fas fa-fill-drip fa-lg"></i>
                </div>
                <input
                  id="search-toggle"
                  placeholder="Couleur de l'équipe"
                  class="block w-full bg-gray-100 focus:outline-none focus:shadow text-gray-700 font-bold rounded-lg pl-12 pr-4 py-3"
                  :value="color"
                  disabled
                />
              </div>
              <ColorModal v-model="color" />
            </div>
            <div
              v-if="playerLengthError"
              :class="{ 'hidden' : playerLengthError === false }"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Erreur !</strong>
              <span class="block sm:inline">Le pseudo doit faire au moins 2 caractères.</span>
            </div>
            <div class="flex flex-row items-center mt-1">
              <div class="relative w-full mx-auto pl-6">
                <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                  <i class="fas fa-user-plus fa-lg"></i>
                </div>
                <input
                  id="search-toggle"
                  placeholder="Entrez un pseudo"
                  class="block w-full bg-gray-100 focus:outline-none focus:shadow text-gray-700 font-bold rounded-lg pl-12 pr-4 py-3"
                  v-model="playerName[index]"
                  v-on:keyup.enter="addPlayer(index, playerName[index])"
                />
              </div>
              <button
                class="px-5 py-3 rounded-lg bg-blue-500 text-white"
                @click="addPlayer(index, playerName[index])"
              >+</button>
            </div>
            <button
              @click="log(), addTeamName(index, teamName[index])"
              class="px-5 py-3 rounded-lg bg-blue-500 text-white"
            >Ajouter l'équipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ColorModal from "./ColorModal";

export default {
  name: "create-config-team",
  data() {
    return {
      playerName: [],
      teamName: [],
      teams: [],
      color: "",
      finalJSON: {},
      playerLengthError: false
    };
  },
  methods: {
    addPlayer(index, name) {
      if (name.length >= 2) {
        this.teams[index].push({
          name
        });
        this.playerLengthError = false;
        this.playerName = [];
      } else {
        this.playerLengthError = true;
        this.playerName = []; //
      }
    },
    addTeamName(index, name) {
      if (name.length >= 2) {
        this.teams[index].push(name);
      } else {
        console.log("la team doit faire plus de 2 caractères");
      }
    },
    addTeam() {
      this.teams.push([]);
    },
    log() {
      this.finalJSON = {
        Players: this.teams[0].map(user => user.name)
      };
      console.log(JSON.stringify(this.finalJSON));
    }
  },
  components: {
    ColorModal
  }
};
</script>