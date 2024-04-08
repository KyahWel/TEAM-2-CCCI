<template>
  <!-- Timeline component to display a series of events -->
  <a-timeline>
    <!-- Timeline items representing various events -->
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <!-- Timeline item with multiple paragraphs -->
    <a-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </a-timeline-item>
    <!-- Timeline item with multiple paragraphs -->
    <a-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <!-- Timeline item with custom color and a dot -->
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <!-- Another timeline item with custom color and a dot -->
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <!-- Timeline item with custom color and a custom dot -->
    <a-timeline-item color="#00CCFF">
      <template #dot>
        <!-- Custom dot represented by a smiley icon -->
        <SmileOutlined />
      </template>
      <p>Custom color testing</p>
    </a-timeline-item>
  </a-timeline>
</template>

<script setup>
  // This section is currently empty but can be used to define reactive variables, functions, and logic related to the component.
</script>
