<template>
  <v-app>
    <v-main>
      <InfoCard cityUrl="https://aareguru.existenz.ch/v2018/today?city=brienz"/>
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
