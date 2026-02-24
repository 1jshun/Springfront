<template>
  <div>
    <h2>게시글 {{ isEdit ? '수정' : '작성' }}</h2>
    <input v-model="form.title" placeholder="제목" /><br />
    <textarea v-model="form.contents" placeholder="내용"></textarea><br />
    <button @click="onSave">저장</button>
    <button @click="$router.back()">취소</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { boardApi } from '@/api/board'

const route = useRoute()
const router = useRouter()
const isEdit = ref(!!route.params.idx)
const form = ref({ title: '', contents: '' })

onMounted(async () => {
  if (isEdit.value) {
    const res = await boardApi.getRead(route.params.idx)
    form.value = { title: res.data.title, contents: res.data.contents }
  }
})

const onSave = async () => {
  if (isEdit.value) {
    await boardApi.update(route.params.idx, form.value)
  } else {
    await boardApi.register(form.value)
  }
  router.push('/board')
}
</script>
