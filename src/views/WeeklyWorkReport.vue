<template>
  <div class="pa-10">
    <v-sheet class="w-100 mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-row v-for="(row, idx) in reportRows" :key="idx">
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
        </v-row>
      </v-form>
      <v-btn block @click="onClickAddRowButton"> 업무 내용 추가</v-btn>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const template = {
  code: "",
  content: "",
  duration: "",
  etc: "",
  progress: 0,
};

const reportRows = ref([{ ...template }]);

const onClickAddRowButton = () => {
  reportRows.value.push({ ...template });
};
</script>
<style scoped lang="scss">
.textfield {
  height: 60px;
}
</style>
