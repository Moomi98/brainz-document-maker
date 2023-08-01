<template>
  <div>
    <table
      v-for="(reportType, key) in reportStore.reports"
      :key="key"
      class="table-for-clipboard"
    >
      <thead>
        <tr>
          <th>업무코드</th>
          <th>업무내용</th>
          <th>기간</th>
          <th>비고</th>
          <th>진행률</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(report, idx) in reportType" :key="idx">
          <td class="td">{{ report.code }}</td>
          <td class="td">{{ report.content }}</td>
          <td class="td">{{ report.duration }}</td>
          <td class="td">{{ report.etc }}</td>
          <td class="td">{{ report.progress }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import useReportStore from "@/stores/reports";

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
  border: 1px solid black;
  color: red;
}
</style>
