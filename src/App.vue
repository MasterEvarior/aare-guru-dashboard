<template>
  <v-app>
    <v-main>
      <div v-for="city in cities" v-bind:key="city.city" >
        <InfoCard :cityUrl="city.today"/>
      </div>
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
