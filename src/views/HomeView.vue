<template>
  <div class="overflow-hidden">
    <HeroSection />

    <AboutSection />

    <StatsSection />

    <DirectorySection />

    <ProgramsSection />

    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import DirectorySection from '../components/home/DirectorySection.vue'
import ProgramsSection from '../components/home/ProgramsSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
</script>