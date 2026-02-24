<template>
  <div>
    <h2>로그인</h2>
    <input v-model="form.email" placeholder="이메일" /><br />
    <input v-model="form.password" type="password" placeholder="비밀번호" /><br />
    <button @click="onLogin">로그인</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userApi } from '@/api/user'

const router = useRouter()
const form = ref({ email: '', password: '' })

const onLogin = async () => {
  try {
    const res = await userApi.login(form.value)
    alert(res.data.name + 'ㅎㅇ')
    router.push('/board')
  } catch (err) {
    alert(err.response.data)
  }
}
</script>
