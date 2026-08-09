<template>
  <div class="min-h-screen bg-[#fcfaf7]">
    <Navbar />

    <main>
      <HomeView />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HomeView from './views/HomeView.vue'
</script>