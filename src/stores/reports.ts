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
    thisWeek: {
      title: "이번 주 수행 업무",
      workReport: [{ ...template }],
      vacation: [],
    },
    nextWeek: {
      title: "다음 주 수행 업무",
      workReport: [{ ...template }],
      vacation: [],
    },
  });

  const updateReports = (
    reportType: string,
    index: number,
    rowType: string,
    report: string | number
  ) => {
    reports.value[reportType].workReport[index][rowType] = report;
  };

  const updateVacation = (
    reportType: string,
    index: number,
    rowType: string,
    vacation: string | number
  ) => {
    reports.value[reportType].vacation[index][rowType] = vacation;
  };

  const addReports = (reportType: string) => {
    reports.value[reportType].workReport.push({ ...template });
  };

  const addVacation = (reportType: string) => {
    const vacationTemplate = { ...template };
    for (const temp in vacationTemplate) {
      vacationTemplate[temp] = "-";
    }
    reports.value[reportType].vacation.push(vacationTemplate);
  };

  const deleteReports = (reportType: string, index: number) => {
    reports.value[reportType].workReport.splice(index, 1);
  };

  return {
    reports,
    updateReports,
    updateVacation,
    addReports,
    addVacation,
    deleteReports,
  };
});

export default useReportStore;
