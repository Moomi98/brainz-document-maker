<template>
  <v-form
    class="d-flex flex-column pa-5 form-container"
    fast-fail
    @submit.prevent
  >
    <v-row
      class="flex-grow-0 row-container"
      v-for="(row, idx) in reportRows"
      :key="idx"
    >
      <v-col>
        <v-text-field v-model="row.code" label="업무코드"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="row.content" label="업무내용"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="row.duration" label="기간"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="row.etc" label="비고"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="row.progress" label="진행률"></v-text-field>
      </v-col>
      <v-btn
        class="delete-button"
        icon="mdi-delete"
        color="red"
        @click="onClickDeleteButton(idx)"
      >
      </v-btn>
    </v-row>
    <v-btn class="add-button" @click="onClickAddRowButton">
      업무 내용 추가</v-btn
    >
  </v-form>
</template>

<script setup lang="ts">
import { workReport } from "@/types/report";
import { ref } from "vue";

const template: workReport = {
  code: "E20015",
  content: "",
  duration: "",
  etc: "",
  progress: 0,
};

const reportRows = ref([{ ...template }]);

const onClickAddRowButton = () => {
  reportRows.value.push({ ...template });
};

const onClickDeleteButton = (index: number) => {
  reportRows.value.splice(index, 1);
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
