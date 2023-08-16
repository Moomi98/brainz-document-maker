<template>
  <div class="">
    <table
      v-for="(reportType, key) in reportStore.reports"
      :key="key"
      class="table-for-clipboard"
    >
      <thead>
        <tr>
          <th>{{ workReportWords.code }}</th>
          <th>{{ workReportWords.content }}</th>
          <th>{{ workReportWords.duration }}</th>
          <th>{{ workReportWords.etc }}</th>
          <th>{{ workReportWords.progress }}</th>
        </tr>
      </thead>
      <tbody>
        <h4 class="text-h6">{{ reportType.title }}</h4>
        <tr v-for="(report, idx) in reportType.workReport" :key="idx">
          <td class="td">{{ report.code }}</td>
          <td class="td">{{ report.content }}</td>
          <td class="td">{{ report.duration }}</td>
          <td class="td">{{ report.etc }}</td>
          <td class="td">{{ report.progress }}</td>
        </tr>
        <tr v-for="(vacation, idx) in reportType.vacation" :key="idx">
          <td class="td">{{ vacation.code }}</td>
          <td class="td">{{ vacation.content }}</td>
          <td class="td">{{ vacation.duration }}</td>
          <td class="td">{{ vacation.etc }}</td>
          <td class="td">{{ vacation.progress }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import useReportStore from "@/stores/reports";
import { workReportWords } from "@/constants/words";

const reportStore = useReportStore();
</script>

<style scoped>
.table {
  width: 40%;
  height: 100px;
}

.td {
  text-align: center;
  width: 20%;
  font-size: 12px;
  border: 1px solid gray;
}
</style>
