<template>
  <section id="beranda" class="hero-section">
    <div class="container hero-container">
      <div class="hero-eyebrow">
        <span class="eyebrow-dot" />
        FKMPI Riau & Kepulauan Riau
      </div>

      <h1>
        Membangun Sinergi Mahasiswa
        <br />

        <span>Politeknik Se-Riau & Kepulauan Riau</span>
      </h1>

      <p class="hero-description">
        Wadah komunikasi, kolaborasi, dan pengembangan mahasiswa politeknik di wilayah Riau dan Kepulauan Riau.
      </p>

      <div class="hero-actions">
        <a href="#direktori" class="primary-button">
          Jelajahi Direktori
          <span>↗</span>
        </a>

        <a href="#tentang" class="secondary-button">
          Tentang Kami
        </a>
      </div>

      <div class="hero-image-wrapper">
        <img
          src="/images/hero/fkmpi-hero.jpg"
          alt="Kegiatan mahasiswa FKMPI Riau Kepri"
          class="hero-image"
        />

        <div class="hero-image-overlay" />

        <div class="hero-image-caption">
          <span>Kegiatan FKMPI</span>
          <strong>Terhubung dalam satu sinergi.</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 68px;
  background:
    radial-gradient(circle at 15% 20%, rgba(202, 177, 157, 0.16), transparent 30%),
    #fbf9f6;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.hero-container {
  padding-top: 68px;
  padding-bottom: 76px;
  text-align: center;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 11px;
  border: 1px solid #e2d8d0;
  border-radius: 999px;
  background: #f7f3ef;
  color: #816f66;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.eyebrow-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #92705c;
}

.hero-container h1 {
  max-width: 760px;
  margin: 22px auto 0;
  color: #3a2924;
  font-size: clamp(34px, 5vw, 60px);
  line-height: 1.04;
  letter-spacing: -0.055em;
  font-weight: 800;
}

.hero-container h1 span {
  color: #92705c;
}

.hero-description {
  max-width: 530px;
  margin: 19px auto 0;
  color: #84766f;
  font-size: 12px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 25px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 36px;
  padding: 0 15px;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 700;
}

.primary-button {
  background: #3a2924;
  color: white;
}

.secondary-button {
  border: 1px solid #ded4cc;
  background: white;
  color: #695950;
}

.hero-image-wrapper {
  position: relative;
  width: min(850px, 100%);
  margin: 42px auto 0;
  overflow: hidden;
  aspect-ratio: 2.2 / 1;
  border-radius: 14px;
  box-shadow:
    0 18px 45px rgba(63, 45, 37, 0.12),
    0 3px 10px rgba(63, 45, 37, 0.05);
}

.hero-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(35, 25, 21, 0.55));
}

.hero-image-caption {
  position: absolute;
  left: 22px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  text-align: left;
}

.hero-image-caption span {
  font-size: 7px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.75;
}

.hero-image-caption strong {
  margin-top: 3px;
  font-size: 13px;
}

@media (max-width: 700px) {
  .container {
    width: min(100% - 28px, 1120px);
  }

  .hero-container {
    padding-top: 48px;
    padding-bottom: 55px;
  }

  .hero-container h1 {
    font-size: 38px;
    line-height: 1.04;
  }

  .hero-description {
    font-size: 10px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    width: 180px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-image-wrapper {
    aspect-ratio: 1.35 / 1;
    margin-top: 30px;
    border-radius: 11px;
  }
}

@media (max-width: 420px) {
  .hero-container h1 {
    font-size: 32px;
  }

  .hero-image-wrapper {
    aspect-ratio: 1.15 / 1;
  }
}
</style>