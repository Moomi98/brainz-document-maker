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
          @update:modelValue="onValueChanged($event, 'code', idx)"
          v-model="row.code"
          :label="workReportWords.code"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="onValueChanged($event, 'content', idx)"
          v-model="row.content"
          :label="workReportWords.content"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="onValueChanged($event, 'duration', idx)"
          v-model="row.duration"
          :label="workReportWords.duration"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="onValueChanged($event, 'etc', idx)"
          v-model="row.etc"
          :label="workReportWords.etc"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          @update:modelValue="onValueChanged($event, 'progress', idx)"
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
    <v-btn class="add-button" @click="onClickAddRowButton">
      {{ workReportWords.addWorkReport }}</v-btn
    >
  </v-form>
</template>

<script setup lang="ts">
import useReportStore from "@/stores/reports";
import { workReportWords } from "@/constants/words";

const props = defineProps({
  type: { type: String, required: true },
  title: { type: String, required: true },
});

const reportStore = useReportStore();
const reports = reportStore.reports[props.type].workReport;

const onValueChanged = (e: string | number, type: string, index: number) => {
  reportStore.updateReports(props.type, index, type, e);
};

const onClickAddRowButton = () => {
  reportStore.addReports(props.type);
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

.add-button {
  width: 100%;
  min-height: 40px;
}

.delete-button {
  position: absolute;
  top: -20px;
  right: -20px;
}
</style>
