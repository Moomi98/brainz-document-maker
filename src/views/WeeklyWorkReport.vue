<template>
  <Toolbar />
  <div class="pa-5 h-100">
    <v-sheet id="weekly-work-report" class="w-100 mx-auto h-100">
      <WeeklyWorkReportTemplate
        type="thisWeek"
        :title="workReportWords.thisWeekWork"
        :useVacation="true"
      />
      <WeeklyWorkReportTemplate
        type="nextWeek"
        :title="workReportWords.nextWeekWork"
      />
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import WeeklyWorkReportTemplate from "@/components/WeeklyWorkReportTemplate.vue";
import { workReportWords } from "@/constants/words";
</script>
