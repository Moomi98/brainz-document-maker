<template>
  <Toolbar />
  <div class="pa-5 h-100">
    <v-sheet id="weekly-work-report" class="w-100 mx-auto h-100">
      <WeeklyWorkReportTemplate type="thisWeek" title="이번 주 수행 업무" />
      <WeeklyWorkReportTemplate type="nextWeek" title="다음 주 수행 업무" />
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import WeeklyWorkReportTemplate from "@/components/WeeklyWorkReportTemplate.vue";
</script>
