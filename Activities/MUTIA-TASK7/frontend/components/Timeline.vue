<template>
    <a-card style="padding: 10px; height: 710px">
      <div class="title">
        <p>Recent Activities</p>
      </div>
    <a-timeline>
      <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="#00CCFF">
        <template #dot>
          <SmileOutlined />
        </template>
        <p>Custom color testing</p>
      </a-timeline-item>
    </a-timeline>
</a-card>
  </template>
  <script setup>
  
  </script>

  <style scoped>
  .title{
    padding-bottom: 10px;
    font-weight: bold;
  }
  </style>