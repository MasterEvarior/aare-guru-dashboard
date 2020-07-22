<template>
    <v-card
    flat
    :color="this.$randomColor({ luminosity: 'dark', hue: 'random'})"
    class="ma-4"
    >
    <v-card-title>{{ response.name }}</v-card-title>
    <v-card-text>
        D Temperatur isch {{ response.aare_prec }}°C
        <br>
        Üses Fazit: {{ response.text }}
    </v-card-text>
    <v-card-actions>
        <v-btn outlined>Meh Infos</v-btn>
    </v-card-actions>
    </v-card>
</template>


<script>
export default {
    name: 'InfoCard',
    props: {
        cityUrl: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {
            response:   {}
        }
    },
    mounted() {
        let url = this.cityUrl + "&app=" + this.$appName + "&version=" + this.$appVersion;
        fetch(url)
            .then(response => {return response = response.json()})
            .then(data => {this.response = data});
  }
}
</script>

<style scoped>

</style>