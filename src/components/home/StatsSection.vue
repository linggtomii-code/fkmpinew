<template>
  <section class="stats-band">
    <div class="container stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-number">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '12+',
    label: 'Kampus Anggota',
  },
  {
    value: '150+',
    label: 'Pengurus & Delegasi',
  },
  {
    value: '14',
    label: 'Kabupaten / Kota Terjangkau',
  },
]
</script>

<style scoped>
.stats-band {
  background: #3a2721;
  color: #fcfaf7;
  padding: 16px 0;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.stat-card {
  padding: 18px 10px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: clamp(28px, 5vw, 46px);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.stat-label {
  display: block;
  margin-top: 8px;
  color: #cdbbb0;
  font-size: 11px;
}

@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>