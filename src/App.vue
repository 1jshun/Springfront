<template>
  <nav>
    <router-link to="/">홈</router-link> | <router-link to="/user/signup">회원가입</router-link> |
    <router-link to="/user/login">로그인</router-link> |
    <router-link to="/board">게시판</router-link>
  </nav>
  <hr />
  <router-view />
</template>
