<template>
  <div>
    <h2>게시판 목록</h2>
    <router-link to="/board/write">글쓰기</router-link>
    <ul v-for="item in list" :key="item.idx">
      <li>
        {{ item.idx }} |
        <router-link :to="'/board/' + item.idx">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { boardApi } from '@/api/board'

const list = ref([])

onMounted(async () => {
  const res = await boardApi.getList()
  list.value = res.data
})
</script>
