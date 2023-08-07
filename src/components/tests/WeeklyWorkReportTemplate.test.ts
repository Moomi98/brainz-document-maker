import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { createTestingPinia } from "@pinia/testing";
import { template } from "@/stores/reports";

import { workReportWords } from "@/constants/words";

import WeeklyWorkReportTemplate from "@/components/WeeklyWorkReportTemplate.vue";

const newFunction = (title: string = "", type: string = "") => {
  const vuetify = createVuetify({ components, directives });
  const pinia = createTestingPinia({
    initialState: {
      thisWeek: {
        title: workReportWords.thisWeekWork,
        workReport: [{ ...template }],
      },
      nextWeek: {
        title: workReportWords.nextWeekWork,
        workReport: [{ ...template }],
      },
    },
    stubActions: false,
    createSpy: vi.fn,
  });

  const wrapper = mount(WeeklyWorkReportTemplate, {
    props: {
      title,
      type,
    },
    global: {
      plugins: [vuetify, pinia],
    },
  });

  return wrapper;
};

describe("WeeklyWorkReportTemplate.vue", () => {
  it("mount", () => {
    const wrapper = newFunction(workReportWords.thisWeekWork, "thisWeek");
    expect(wrapper.text()).toContain(workReportWords.thisWeekWork);
  });
});
