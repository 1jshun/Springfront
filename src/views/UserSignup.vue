<template>
  <div>
    <h2>회원가입</h2>
    <input v-model="form.email" placeholder="이메일" /><br />
    <input v-model="form.password" type="password" placeholder="비밀번호" /><br />
    <input v-model="form.name" placeholder="이름" /><br />
    <button @click="onSignup">가입하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userApi } from '@/api/user'

const router = useRouter()
const form = ref({ email: '', password: '', name: '' })

const onSignup = async () => {
  if (!form.value.email.trim()) {
    alert('이메일을 입력해주세요.')
    return
  }
  if (!form.value.password.trim()) {
    alert('비밀번호를 입력해주세요.')
    return
  }
  if (!form.value.name.trim()) {
    alert('이름을 입력해주세요.')
    return
  }

  try {
    await userApi.signup(form.value)
    alert('가입 성공!')
    router.push('/user/login')
  } catch (err) {
    alert('오류가 발생했습니다.')
  }
}
</script>
