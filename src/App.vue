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
