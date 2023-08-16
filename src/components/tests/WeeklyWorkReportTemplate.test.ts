import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { createTestingPinia } from "@pinia/testing";
import { template } from "@/stores/reports";

import { workReportWords } from "@/constants/words";

import WeeklyWorkReportTemplate from "@/components/WeeklyWorkReportTemplate.vue";

const initWeeklyWorkReportTemplate = (
  title: string = "",
  type: string = ""
) => {
  const vuetify = createVuetify({ components, directives });
  const pinia = createTestingPinia({
    initialState: {
      thisWeek: {
        title: workReportWords.thisWeekWork,
        workReport: [{ ...template }],
        vacation: [],
      },
      nextWeek: {
        title: workReportWords.nextWeekWork,
        workReport: [{ ...template }],
        vacation: [],
      },
    },
    stubActions: false,
    createSpy: vi.fn,
  });

  const wrapper = mount(WeeklyWorkReportTemplate, {
    props: {
      title,
      type,
      useVacation: true,
    },
    global: {
      plugins: [vuetify, pinia],
    },
  });

  return wrapper;
};

describe("WeeklyWorkReportTemplate.vue", () => {
  it("mount", () => {
    const wrapper = initWeeklyWorkReportTemplate(
      workReportWords.thisWeekWork,
      "thisWeek"
    );
    expect(wrapper.text()).toContain(workReportWords.thisWeekWork);
  });

  it("click addWeeklyReportButton", async () => {
    const wrapper = initWeeklyWorkReportTemplate(
      workReportWords.thisWeekWork,
      "thisWeek"
    );
    const addButton = wrapper.find(".add-button");
    await addButton.trigger("click");
    expect(wrapper.findAll(".row-container")).toHaveLength(2);
  });

  it("no deleteButton when row is only one line", () => {
    const wrapper = initWeeklyWorkReportTemplate(
      workReportWords.thisWeekWork,
      "thisWeek"
    );
    expect(wrapper.findAll(".row-container")).toHaveLength(1);
    expect(wrapper.find(".delete-button").exists()).toBe(false);
  });

  it("delete weeklyWorkReport", async () => {
    const wrapper = initWeeklyWorkReportTemplate(
      workReportWords.thisWeekWork,
      "thisWeek"
    );

    const addButton = wrapper.find(".add-button");
    await addButton.trigger("click");

    const deleteButton = wrapper.find(".delete-button");
    await deleteButton.trigger("click");

    expect(wrapper.findAll(".row-container")).toHaveLength(1);
  });

  it("add vacation", async () => {
    const wrapper = initWeeklyWorkReportTemplate(
      workReportWords.thisWeekWork,
      "thisWeek"
    );

    const vacationButton = wrapper.find(".vacation-button");
    await vacationButton.trigger("click");
    expect(wrapper.findAll(".row-container")).toHaveLength(2);
  });
});
