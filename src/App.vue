<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 sm6 md6 lg4 xl3 v-for="city in cities" :key="city.city">
            <InfoCard :cityUrl="city.today"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer>
      <v-btn
        href="https://aare.guru"
        target="_blank"
        text>
        <span class="mr-2">Alli Date si vo aare.guru</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-spacer/>
      <v-btn
        href="https://github.com/MasterEvarior/aare-guru-dashboard"
        target="_blank"
        text>
        <span class="mr-2">Lueg ds projekt uf GitHub a</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import InfoCard from './components/InfoCard';

export default {
  name: 'App',
  components: {
    InfoCard
  },
  data: function() {
      return {
        cities: {}
      }
  },
  mounted() {
    let url = this.$apiBaseUrl + "/cities";
    fetch(url)
      .then(response => {return response.json()})
      .then(data => this.cities = data);
  }
};
</script>
