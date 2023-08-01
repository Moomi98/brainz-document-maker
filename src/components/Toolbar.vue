<template>
  <v-card color="grey-lighten-4" flat rounded="0">
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>주간 업무 보고</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="onCopyButtonClicked">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <TableForClipboard v-show="false" />
</template>
<script setup lang="ts">
import TableForClipboard from "@/components/TableForClipboard.vue";

const onCopyButtonClicked = () => {
  const originalElements = document.getElementsByClassName(
    "table-for-clipboard"
  );

  const tempDiv = document.createElement("div");

  Array.from(originalElements).forEach((element) => {
    const clonedElement = element.cloneNode(true);
    tempDiv.appendChild(clonedElement);
  });

  document.body.appendChild(tempDiv);

  const range = document.createRange();
  range.selectNode(tempDiv);

  window.getSelection()!.removeAllRanges();
  window.getSelection()!.addRange(range);

  document.execCommand("copy"); // 클립보드에 복사합니다.

  document.body.removeChild(tempDiv);
};
</script>
