<template>
  <section ref="bandRef" class="stats-band">
    <!-- Pola titik halus -->
    <div class="band-decor" aria-hidden="true"></div>

    <div class="container stats-grid">
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="stat-card"
      >
        <span class="stat-number">{{ displayed[index] }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const stats = [
  { value: 7, label: 'Kampus Terhubung' },
  { value: 2, label: 'Provinsi' },
  { value: 1, label: 'Visi Bersama' },
  { value: 3, label: 'Misi' },
]

const bandRef = ref<HTMLElement | null>(null)
const displayed = ref<number[]>(stats.map(() => 0))

let observer: IntersectionObserver | null = null
let hasAnimated = false

function animateCount(index: number, target: number, duration: number) {
  const start = performance.now()

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic

    displayed.value[index] = Math.round(eased * target)

    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  // Tanpa animasi: langsung tampilkan angka final
  if (reduceMotion || !bandRef.value) {
    displayed.value = stats.map((s) => s.value)
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true

        stats.forEach((stat, i) => {
          // Durasi berjenjang supaya terasa organik
          animateCount(i, stat.value, 900 + i * 200)
        })

        observer?.disconnect()
      }
    },
    { threshold: 0.4 }
  )

  observer.observe(bandRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.stats-band {
  position: relative;
  overflow: hidden;
  padding: 40px 0;
  background:
    radial-gradient(420px 160px at 8% 0%, rgba(229, 184, 156, 0.1), transparent 70%),
    radial-gradient(420px 160px at 92% 100%, rgba(229, 184, 156, 0.08), transparent 70%),
    #3a2721;
  color: #fcfaf7;
}

.band-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(252, 250, 247, 0.05) 1px, transparent 1.4px);
  background-size: 16px 16px;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent);
}

.container {
  position: relative;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-card {
  position: relative;
  padding: 10px 18px;
  text-align: center;
}

/* Pembatas hairline antar stat */
.stat-card + .stat-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12%;
  bottom: 12%;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(252, 250, 247, 0.25),
    transparent
  );
}

.stat-number {
  display: block;
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f2e9df;
  font-variant-numeric: tabular-nums;
  transition: color 0.3s ease, transform 0.3s ease;
}

.stat-card:hover .stat-number {
  color: #e5b89c;
  transform: translateY(-3px);
}

.stat-label {
  display: block;
  margin-top: 10px;
  color: #cdbbb0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 700px) {
  .stats-band {
    padding: 32px 0;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 28px;
  }

  /* Hilangkan pembatas di awal baris kedua */
  .stat-card:nth-child(3)::before {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stat-number {
    transition: none;
  }

  .stat-card:hover .stat-number {
    transform: none;
  }
}
</style>