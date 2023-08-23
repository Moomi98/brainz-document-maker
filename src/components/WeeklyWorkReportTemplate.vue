<template>
  <v-form
    class="d-flex flex-column pa-5 form-container"
    fast-fail
    @submit.prevent
  >
    <h4 class="text-h4">{{ props.title }}</h4>
    <v-row
      class="flex-grow-0 row-container"
      v-for="(row, idx) in reports"
      :key="idx"
    >
      <v-col>
        <v-text-field
          @update:modelValue="updateReports($event, 'code', idx)"
          v-model="row.code"
          :label="workReportWords.code"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateReports($event, 'content', idx)"
          v-model="row.content"
          :label="workReportWords.content"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateReports($event, 'duration', idx)"
          v-model="row.duration"
          :label="workReportWords.duration"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateReports($event, 'etc', idx)"
          v-model="row.etc"
          :label="workReportWords.etc"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateReports($event, 'progress', idx)"
          v-model="row.progress"
          :label="workReportWords.progress"
        ></v-text-field>
      </v-col>
      <v-btn
        v-if="reports.length > 1"
        class="delete-button"
        icon="mdi-delete"
        color="red"
        @click="onClickDeleteButton(idx)"
      >
      </v-btn>
    </v-row>
    <v-row
      class="flex-grow-0 row-container"
      v-for="(row, idx) in vacations"
      :key="idx"
    >
      <v-col>
        <v-text-field
          @update:modelValue="updateVacation($event, 'code', idx)"
          v-model="row.code"
          :label="workReportWords.code"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateVacation($event, 'content', idx)"
          v-model="row.content"
          :label="workReportWords.content"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateVacation($event, 'duration', idx)"
          v-model="row.duration"
          :label="workReportWords.duration"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateVacation($event, 'etc', idx)"
          v-model="row.etc"
          :label="workReportWords.etc"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="updateVacation($event, 'progress', idx)"
          v-model="row.progress"
          :label="workReportWords.progress"
        ></v-text-field>
      </v-col>
      <v-btn
        v-if="reports.length > 1"
        class="delete-button"
        icon="mdi-delete"
        color="red"
        @click="onClickDeleteButton(idx)"
      >
      </v-btn>
    </v-row>
    <div class="d-flex ga-4">
      <v-btn class="add-button" @click="onClickAddRowButton">
        {{ workReportWords.addWorkReport }}</v-btn
      >
      <v-btn
        v-if="props.useVacation"
        class="add-button vacation-button"
        @click="onClickAddVacationButton"
      >
        {{ workReportWords.addVacation }}</v-btn
      >
    </div>
  </v-form>
</template>

<script setup lang="ts">
import useReportStore from "@/stores/reports";
import { workReportWords } from "@/constants/words";
import { ref } from "vue";

const props = defineProps({
  type: { type: String, required: true },
  title: { type: String, required: true },
  useVacation: { type: Boolean, default: false },
});

const buttonWidth = ref(props.useVacation ? "50%" : "100%");

const reportStore = useReportStore();
const reports = reportStore.reports[props.type].workReport;
const vacations = reportStore.reports[props.type].vacation;

const updateReports = (e: string | number, type: string, index: number) => {
  reportStore.updateReports(props.type, index, type, e);
};

const updateVacation = (e: string | number, type: string, index: number) => {
  reportStore.updateVacation(props.type, index, type, e);
};

const onClickAddRowButton = () => {
  reportStore.addReports(props.type);
};

const onClickAddVacationButton = () => {
  reportStore.addVacation(props.type);
};

const onClickDeleteButton = (index: number) => {
  reportStore.deleteReports(props.type, index);
};
</script>
<style scoped>
.form-container {
  gap: 30px;
}

.row-container {
  position: relative;
  border: 1px solid black;
  border-radius: 10px;
}

.add-button,
.vacation-button {
  width: v-bind(buttonWidth);
  min-height: 40px;
}

.delete-button {
  position: absolute;
  top: -20px;
  right: -20px;
}
</style>
