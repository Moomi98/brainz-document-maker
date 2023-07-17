<template>
  <v-card class="mx-auto w-50 h-100">
    <v-container class="h-100">
      <v-row dense>
        <v-col cols="12">
          <v-card
            v-for="item in props.items"
            :key="item.title"
            color="white"
            theme="dark"
            class="d-flex card"
          >
            <div>
              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>
            </div>
            <div>
              <v-card-title class="text-h5"> {{ item.title }} </v-card-title>

              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
interface itemProps {
  title: string;
  subtitle: string;
}
const props = defineProps({
  items: {
    type: Array<itemProps>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
}
</style>
