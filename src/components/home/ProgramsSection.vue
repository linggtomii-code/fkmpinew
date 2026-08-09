<template>
  <section id="program" class="program-section">
    <div class="container">
      <div class="section-heading">
        <div>
          <span class="section-label">03 — Program Kerja</span>

          <h2>
            Bergerak bersama,
            <span>menciptakan dampak.</span>
          </h2>
        </div>

        <p>
          Berbagai kegiatan yang menjadi ruang bertumbuh, berjejaring, dan berkontribusi bagi mahasiswa.
        </p>
      </div>

      <div class="program-grid">
        <article v-for="program in programs" :key="program.id" class="program-card">
          <div class="program-image-wrapper">
            <img :src="program.image" :alt="program.title" class="program-image" />

            <span class="program-category">{{ program.category }}</span>
          </div>

          <div class="program-content">
            <div class="program-meta">
              <span>{{ program.date }}</span>
              <span>•</span>
              <span>{{ program.location }}</span>
            </div>

            <h3>{{ program.title }}</h3>

            <p>{{ program.description }}</p>

            <a href="#kontak" class="program-link">
              Pelajari lebih lanjut
              <span>→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { programs } from '../../data/Programs'
</script>

<style scoped>
.program-section {
  padding: 90px 0;
  background: #fbf9f6;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.section-heading {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 70px;
  align-items: end;
}

.section-label {
  display: block;
  color: #957665;
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.section-heading h2 {
  max-width: 580px;
  margin: 13px 0 0;
  color: #3a2924;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.section-heading h2 span {
  color: #96725f;
}

.section-heading > p {
  margin: 0;
  color: #84756e;
  font-size: 11px;
  line-height: 1.8;
}

.program-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px;
  margin-top: 45px;
}

.program-card {
  overflow: hidden;
  border: 1px solid #e3d9d1;
  border-radius: 11px;
  background: white;
}

.program-image-wrapper {
  position: relative;
  aspect-ratio: 1.9 / 1;
  overflow: hidden;
}

.program-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.program-category {
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 5px 7px;
  border-radius: 999px;
  background: rgba(251, 249, 246, 0.9);
  color: #765a4c;
  font-size: 7px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  backdrop-filter: blur(5px);
}

.program-content {
  padding: 17px;
}

.program-meta {
  display: flex;
  gap: 7px;
  color: #a08d83;
  font-size: 7px;
  font-weight: 700;
}

.program-content h3 {
  margin: 8px 0 0;
  color: #3a2924;
  font-size: 15px;
  letter-spacing: -0.025em;
}

.program-content p {
  margin: 8px 0 0;
  color: #81726a;
  font-size: 8px;
  line-height: 1.7;
}

.program-link {
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  color: #4c3730;
  font-size: 8px;
  font-weight: 800;
}

@media (max-width: 900px) {
  .section-heading {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 700px) {
  .program-section {
    padding: 65px 0;
  }

  .section-heading h2 {
    font-size: 30px;
  }

  .program-grid {
    grid-template-columns: 1fr;
  }
}
</style>