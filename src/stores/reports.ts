import { defineStore } from "pinia";
import { WeeklyWorkReport, WorkReport } from "@/types/report";
import { ref } from "vue";

export const template: WorkReport = {
  code: "E20015",
  content: "",
  duration: "",
  etc: "",
  progress: 0,
};

const useReportStore = defineStore("reports", () => {
  const reports = ref<Record<string, WeeklyWorkReport>>({
    thisWeek: { title: "이번 주 수행 업무", workReport: [{ ...template }] },
    nextWeek: { title: "다음 주 수행 업무", workReport: [{ ...template }] },
  });

  const updateReports = (
    reportType: string,
    index: number,
    rowType: string,
    report: string | number
  ) => {
    reports.value[reportType].workReport[index][rowType] = report;
  };

  const addReports = (reportType: string) => {
    reports.value[reportType].workReport.push({ ...template });
  };

  const deleteReports = (reportType: string, index: number) => {
    reports.value[reportType].workReport.splice(index, 1);
  };

  return { reports, updateReports, addReports, deleteReports };
});

export default useReportStore;
