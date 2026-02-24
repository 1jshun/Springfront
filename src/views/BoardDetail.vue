<template>
  <div v-if="post">
    <h3>제목: {{ post.title }}</h3>
    <p>내용: {{ post.contents }}</p>
    <button @click="$router.push('/board')">목록</button>
    <button @click="$router.push('/board/edit/' + post.idx)">수정</button>
    <button @click="onDelete">삭제</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { boardApi } from '@/api/board'

const route = useRoute()
const router = useRouter()
const post = ref(null)

onMounted(async () => {
  const res = await boardApi.getRead(route.params.idx)
  post.value = res.data
})

const onDelete = async () => {
  if (confirm('삭제할까요?')) {
    await boardApi.delete(route.params.idx)
    router.push('/board')
  }
}
</script>
