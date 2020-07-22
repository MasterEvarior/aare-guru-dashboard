<template>
  <v-app>
    <v-main>
      <InfoCard city="Bern"/>
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
  data: () => ({
    //
  }),
};
</script>
