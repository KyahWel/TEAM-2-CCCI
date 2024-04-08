<template>
  <div class="grid-container">
    <div class="table-card">
      <a-card>
        <a-table
          :columns="columns"
          :dataSource="data.users"
          :pagination="pagination"
          :loading="loading"
        >
        </a-table>
      </a-card>
    </div>

    <div class="timeline-card">
      <a-card>
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
    </div>
  </div>
</template>

<script setup>
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key:'firstName',
    width: '20%',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key:'lastname',
    width: '20%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key:'age',
    width: '10%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key:'email',
  },
];

const {data, pending, error, status, refresh} = await useFetch('https://dummyjson.com/users');
import { SmileOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 20px;
}

.table-card {
  width: 100%;
  border: 5px solid  #13cedf;
  border-radius: 4px;
}

.timeline-card {
  width: 100%;
  border: 5px solid  #13cedf;
  border-radius: 4px;
}
</style>
