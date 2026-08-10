<template>
  <section id="beranda" class="hero-section">
    <!-- Elemen dekoratif -->
    <div class="hero-decor" aria-hidden="true">
      <span class="decor-dots decor-dots--left"></span>
      <span class="decor-dots decor-dots--right"></span>
      <span class="decor-ring"></span>
    </div>

    <div class="container hero-container">
      <h1>
        Membangun Sinergi Mahasiswa
        <span>Politeknik Se-Riau &amp; Kepulauan Riau</span>
      </h1>

      <p class="hero-description">
        Wadah komunikasi, kolaborasi, dan pengembangan mahasiswa
        politeknik di wilayah Riau dan Kepulauan Riau.
      </p>

      <div class="hero-actions">
        <a href="#Kampus-Terhubung" class="primary-button">
          Jelajahi Kampus
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="m6 13 6 6 6-6" />
          </svg>
        </a>

        <a href="#tentang" class="secondary-button">
          Tentang Kami
        </a>
      </div>

      <div class="hero-image-wrapper">
        <img
          src="/images/hero/hero.jpeg"
          alt="Kegiatan mahasiswa FKMPI Riau Kepri"
          class="hero-image"
        />

        <div class="hero-image-overlay" />

        <div class="hero-image-caption">
          <span>FKMPI Riau Kepri 2026</span>
          <strong>Terhubung dalam satu sinergi.</strong>
        </div>

        <!-- Ganti angka jika jumlah kampus berubah, atau bind dari data -->
    
      </div>
    </div>

    <!-- Marquee nama kampus -->
    <div class="hero-marquee" aria-hidden="true">
      <div class="marquee-track">
        <div class="marquee-group">
          <span v-for="name in campusNames" :key="name">
            {{ name }} <i>✳</i>
          </span>
        </div>
        <div class="marquee-group">
          <span v-for="name in campusNames" :key="name">
            {{ name }} <i>✳</i>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Kalau mau dinamis, ganti dengan: import { members } from '.../data/Member.ts'
// lalu: const campusNames = members.map((m) => m.name)
const campusNames = [
  'Politeknik Negeri Batam',
  'Politeknik Caltex Riau',
  'Politeknik Negeri Bengkalis',
  'Politeknik Lingga',
  'Politeknik Negeri Bintan Cakrawala',
  'Politeknik Kampar',
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.hero-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, rgba(202, 177, 157, 0.16), transparent 30%),
    radial-gradient(circle at 85% 8%, rgba(150, 114, 95, 0.12), transparent 40%),
    #fbf9f6;
}

.hero-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decor-dots {
  position: absolute;
  width: 160px;
  height: 160px;
  background-image: radial-gradient(rgba(101, 68, 56, 0.26) 1px, transparent 1.5px);
  background-size: 14px 14px;
  -webkit-mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
  mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
}

.decor-dots--left {
  top: 90px;
  left: 3%;
}

.decor-dots--right {
  bottom: 160px;
  right: 4%;
}

.decor-ring {
  position: absolute;
  top: -110px;
  right: -110px;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(101, 68, 56, 0.14);
  border-radius: 50%;
}

.decor-ring::after {
  content: '';
  position: absolute;
  inset: 30px;
  border: 1px dashed rgba(101, 68, 56, 0.18);
  border-radius: 50%;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.hero-container {
  position: relative;
  padding-top: 72px;
  text-align: center;
}

/* ==== EYEBROW ==== */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 16px;
  border: 1px solid #e2d8d0;
  border-radius: 999px;
  background: rgba(247, 243, 239, 0.9);
  color: #816f66;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  box-shadow: 0 8px 18px -14px rgba(58, 41, 36, 0.5);
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #92705c;
  animation: pulse 2.2s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(146, 112, 92, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(146, 112, 92, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(146, 112, 92, 0);
  }
}

/* ==== HEADLINE ==== */
.hero-container h1 {
  max-width: 840px;
  margin: 28px auto 0;
  color: #3a2924;
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(36px, 5.4vw, 64px);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.03em;
}

.hero-container h1 span {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: #96725f;
}

.hero-description {
  max-width: 560px;
  margin: 20px auto 0;
  color: #84766f;
  font-size: 14px;
  line-height: 1.85;
}

/* ==== ACTIONS ==== */
.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 46px;
  padding: 0 24px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: all 0.25s ease;
}

.primary-button {
  background: #3a2924;
  color: #fdfaf6;
  box-shadow: 0 16px 28px -20px rgba(58, 41, 36, 0.8);
}

.primary-button svg {
  width: 14px;
  height: 14px;
  transition: transform 0.25s ease;
}

.primary-button:hover {
  background: #96725f;
  transform: translateY(-2px);
  box-shadow: 0 20px 32px -20px rgba(150, 114, 95, 0.8);
}

.primary-button:hover svg {
  transform: translateY(2px);
}

.secondary-button {
  border: 1px solid #ded4cc;
  background: #fff;
  color: #695950;
}

.secondary-button:hover {
  border-color: #96725f;
  color: #96725f;
  transform: translateY(-2px);
}

/* ==== HERO IMAGE ==== */
.hero-image-wrapper {
  position: relative;
  width: min(920px, 100%);
  margin: 54px auto 0;
  aspect-ratio: 2.2 / 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 30px 60px -30px rgba(63, 45, 37, 0.4),
    0 6px 18px rgba(63, 45, 37, 0.06);
}

.hero-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  animation: ken-burns 20s ease-in-out infinite alternate;
}

@keyframes ken-burns {
  from {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(1.08) translateY(-1.5%);
  }
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 45%, rgba(35, 25, 21, 0.6));
}

.hero-image-caption {
  position: absolute;
  left: 26px;
  bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  text-align: left;
}

.hero-image-caption span {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.75;
}

.hero-image-caption strong {
  margin-top: 5px;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 17px;
  font-weight: 600;
}

/* Badge mengambang di pojok foto */
.hero-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 20px;
  background: rgba(251, 249, 246, 0.92);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(226, 216, 208, 0.8);
  border-radius: 16px;
  box-shadow: 0 16px 30px -20px rgba(58, 41, 36, 0.6);
}

.hero-badge strong {
  font-family: 'Fraunces', serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #3a2924;
}

.hero-badge span {
  margin-top: 5px;
  font-size: 8.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #8d7d74;
}

/* ==== MARQUEE ==== */
.hero-marquee {
  margin-top: 68px;
  padding: 15px 0;
  border-top: 1px solid rgba(101, 68, 56, 0.14);
  border-bottom: 1px solid rgba(101, 68, 56, 0.14);
  background: rgba(247, 243, 239, 0.6);
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 34s linear infinite;
}

.hero-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 40px;
  padding-right: 40px;
}

.marquee-group span {
  display: inline-flex;
  align-items: center;
  gap: 40px;
  white-space: nowrap;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #9a887c;
}

.marquee-group i {
  font-style: normal;
  color: #c2a28d;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

/* ==== RESPONSIVE ==== */
@media (max-width: 700px) {
  .container {
    width: min(100% - 28px, 1120px);
  }

  .hero-container {
    padding-top: 52px;
  }

  .hero-container h1 {
    font-size: 36px;
  }

  .hero-description {
    font-size: 12.5px;
  }

  .hero-image-wrapper {
    aspect-ratio: 1.35 / 1;
    margin-top: 36px;
    border-radius: 16px;
  }

  .hero-badge {
    top: 12px;
    right: 12px;
    padding: 10px 14px;
  }

  .hero-badge strong {
    font-size: 22px;
  }

  .hero-image-caption {
    left: 18px;
    bottom: 16px;
  }

  .hero-image-caption strong {
    font-size: 15px;
  }

  .hero-marquee {
    margin-top: 48px;
  }
}

@media (max-width: 420px) {
  .hero-container h1 {
    font-size: 30px;
  }

  .hero-image-wrapper {
    aspect-ratio: 1.15 / 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-image,
  .marquee-track,
  .eyebrow-dot {
    animation: none;
  }

  .primary-button,
  .secondary-button,
  .primary-button svg {
    transition: none;
  }
}
</style>