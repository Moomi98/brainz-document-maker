<template>
  <v-app>
    <RowLongCard :items="items" />
  </v-app>
</template>

<script lang="ts" setup>
import RowLongCard from "@/components/RowLongCard.vue";
const items = [
  {
    title: "주간 업무 보고서",
    subtitle: "매주 작성하는 주간 업무 보고서를 더욱 편하게 작성해보세요.",
    route: "/weekly-work-report",
  },
];
</script>
