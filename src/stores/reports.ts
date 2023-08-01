import { defineStore } from "pinia";
import { WorkReport } from "@/types/report";
import { ref } from "vue";

const useReportStore = defineStore("reports", () => {
  const template: WorkReport = {
    code: "E20015",
    content: "",
    duration: "",
    etc: "",
    progress: 0,
  };

  const reports = ref<Record<string, Array<WorkReport>>>({
    thisWeek: [{ ...template }],
    nextWeek: [{ ...template }],
  });

  const updateReports = (
    reportType: string,
    index: number,
    rowType: string,
    report: string | number
  ) => {
    reports.value[reportType][index][rowType] = report;
  };

  const addReports = (reportType: string) => {
    reports.value[reportType].push({ ...template });
  };

  const deleteReports = (reportType: string, index: number) => {
    reports.value[reportType].splice(index, 1);
  };

  return { reports, updateReports, addReports, deleteReports };
});

export default useReportStore;
