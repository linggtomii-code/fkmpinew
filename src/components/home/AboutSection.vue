<template>
  <section id="tentang" class="about-section">
    <!-- Elemen dekoratif -->
    <div class="section-decor" aria-hidden="true">
      <span class="decor-dots"></span>
      <span class="decor-ring"></span>
    </div>

    <div class="container">
      <!-- Section Heading -->
      <div class="section-heading">
        <div>
          <span class="section-label">
            Tentang Kami
          </span>

          <h2>
            Bersama membangun
            <span>ekosistem mahasiswa vokasi.</span>
          </h2>
        </div>

        <p class="heading-copy">
          FKMPI Riau Kepri hadir sebagai ruang untuk mempererat
          komunikasi, membangun jejaring, dan menciptakan kolaborasi
          antar mahasiswa politeknik.
        </p>
      </div>

      <!-- About Content -->
      <div class="about-grid">
        <!-- Description -->
        <div class="about-description">
          <p>
            Forum Komunikasi Mahasiswa Politeknik Indonesia wilayah
            Riau dan Kepulauan Riau merupakan wadah komunikasi
            mahasiswa politeknik yang berorientasi pada kolaborasi
            dan pengembangan potensi.
          </p>

          <p>
            Melalui berbagai program dan kegiatan, FKMPI mendorong
            terciptanya hubungan yang lebih erat antar kampus serta
            memberikan ruang bagi mahasiswa untuk bertukar gagasan
            dan pengalaman.
          </p>

          <a href="#program" class="text-link">
            <span class="text-link-label">Lihat program kami</span>
          </a>
        </div>

        <!-- Vision & Mission -->
        <div class="vision-mission" id="vision-mission">
          <!-- Vision -->
          <div class="vision-card">
            <span class="vm-ghost" aria-hidden="true">Visi</span>

            <span class="big-label">Visi</span>

            <p>
              Menjadikan FKMPI Daerah Riau Kepri sebagai fasilitator dan
              penggerak strategis, dalam menghimpun dan merumuskan aspirasi
              mahasiswa politeknik terhadap kebijakan kampus serta arah
              kebijakan publik yang berdampak pada mahasiswa untuk dapat
              diperjuangkan.
            </p>
          </div>

          <!-- Mission -->
          <div class="mission-card">
            <span class="big-label big-label--light">Misi</span>

            <ul>
              <li>
                <span class="mission-num">01</span>
                <p>
                  Membangun komunikasi dan koordinasi yang efektif serta
                  berkelanjutan di lingkungan mahasiswa politeknik.
                </p>
              </li>

              <li>
                <span class="mission-num">02</span>
                <p>
                  Menghimpun dan menginformasikan aspirasi mahasiswa
                  politeknik secara terbuka dan partisipatif.
                </p>
              </li>

              <li>
                <span class="mission-num">03</span>
                <p>
                  Menumbuhkan kesadaran kritis mahasiswa dalam merespons
                  kebijakan kampus dan kebijakan publik yang berdampak
                  pada mahasiswa.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.about-section {
  position: relative;
  padding: 110px 0;
  overflow: hidden;
  background:
    radial-gradient(560px 300px at 100% 0%, rgba(150, 114, 95, 0.1), transparent 70%),
    #faf5ee;
}

.section-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decor-dots {
  position: absolute;
  top: 80px;
  left: 4%;
  width: 150px;
  height: 150px;
  background-image: radial-gradient(rgba(101, 68, 56, 0.28) 1px, transparent 1.5px);
  background-size: 14px 14px;
  -webkit-mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
  mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
}

.decor-ring {
  position: absolute;
  right: -90px;
  bottom: 80px;
  width: 240px;
  height: 240px;
  border: 1px solid rgba(101, 68, 56, 0.15);
  border-radius: 50%;
}

.decor-ring::after {
  content: '';
  position: absolute;
  inset: 28px;
  border: 1px dashed rgba(101, 68, 56, 0.2);
  border-radius: 50%;
}

.container {
  position: relative;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

/* ==== HEADING ==== */
.section-heading {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 64px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #957665;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.label-line {
  width: 36px;
  height: 1px;
  background: currentColor;
  opacity: 0.8;
}

.section-heading h2 {
  margin: 18px 0 0;
  max-width: 620px;
  color: #3a2924;
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(30px, 4.2vw, 47px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.section-heading h2 span {
  font-style: italic;
  color: #96725f;
}

.heading-copy {
  margin: 0 0 6px;
  padding-left: 22px;
  border-left: 2px solid rgba(150, 114, 95, 0.4);
  color: #6f5f57;
  font-size: 13px;
  line-height: 1.9;
  max-width: 340px;
}

/* ==== GRID ==== */
.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;
}

/* ==== DESCRIPTION ==== */
.about-description p {
  margin: 0;
  color: #6f5f57;
  font-size: 13.5px;
  line-height: 1.9;
}

.about-description p + p {
  margin-top: 18px;
}

/* Drop cap editorial di paragraf pertama */
.about-description p:first-child::first-letter {
  float: left;
  margin: 6px 12px 0 0;
  font-family: 'Fraunces', serif;
  font-size: 54px;
  font-weight: 600;
  line-height: 0.8;
  color: #96725f;
}

.text-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding-bottom: 5px;
  color: #654438;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-decoration: none;
}

.text-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #96725f, #c9a892);
  transform: scaleX(0.35);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.text-link:hover::after {
  transform: scaleX(1);
}

.text-link-arrow {
  transition: transform 0.3s ease;
}

.text-link:hover .text-link-arrow {
  transform: translateX(5px);
}

/* ==== VISION & MISSION ==== */
.vision-mission {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.big-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 600;
  color: #e5b89c;
}

.big-label::after {
  content: '';
  width: 34px;
  height: 1px;
  background: currentColor;
  opacity: 0.6;
}

.big-label--light {
  color: #96725f;
}

/* Kartu Visi — kartu gelap sebagai fokus section */
.vision-card {
  position: relative;
  padding: 34px 36px 40px;
  border-radius: 22px;
  background: linear-gradient(140deg, #3a2924 0%, #4b342a 100%);
  color: #f2e9df;
  overflow: hidden;
  box-shadow: 0 30px 50px -30px rgba(58, 41, 36, 0.55);
}

.vision-card::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -70px;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(244, 238, 232, 0.14);
  border-radius: 50%;
}

/* Tulisan "Visi" raksasa sebagai watermark */
.vm-ghost {
  position: absolute;
  right: 8px;
  bottom: -40px;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 130px;
  line-height: 1;
  color: rgba(244, 238, 232, 0.05);
  pointer-events: none;
  user-select: none;
}

.vision-card p {
  position: relative;
  margin: 16px 0 0;
  font-family: 'Fraunces', serif;
  font-size: 16.5px;
  line-height: 1.75;
  color: #f2e9df;
}

/* Kartu Misi */
.mission-card {
  padding: 32px 36px;
  border: 1px solid #e6dacd;
  border-radius: 22px;
  background: linear-gradient(180deg, #fffdf9, #f8f1e8);
  box-shadow: 0 18px 34px -26px rgba(58, 41, 36, 0.4);
}

.mission-card ul {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
}

.mission-card li {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
  align-items: start;
  padding: 18px 8px;
  border-top: 1px dashed #e0d2c3;
  border-radius: 10px;
  transition: background 0.25s ease, transform 0.25s ease;
}

.mission-card li:first-child {
  border-top: 0;
}

.mission-card li:hover {
  background: rgba(150, 114, 95, 0.07);
  transform: translateX(6px);
}

.mission-num {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #c2a28d;
  transition: color 0.25s ease;
}

.mission-card li:hover .mission-num {
  color: #96725f;
}

.mission-card li p {
  margin: 0;
  color: #6f5f57;
  font-size: 12.5px;
  line-height: 1.8;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 1000px) {
  .section-heading {
    grid-template-columns: 1fr;
    gap: 22px;
    align-items: start;
    margin-bottom: 48px;
  }

  .heading-copy {
    max-width: 480px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}

@media (max-width: 640px) {
  .about-section {
    padding: 76px 0;
  }

  .section-heading h2 {
    font-size: 29px;
  }

  .vision-card {
    padding: 28px 24px 34px;
  }

  .mission-card {
    padding: 26px 22px;
  }

  .mission-card li {
    grid-template-columns: 40px 1fr;
    gap: 12px;
    padding: 16px 6px;
  }

  .vm-ghost {
    font-size: 96px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .text-link::after,
  .text-link-arrow,
  .mission-card li,
  .mission-num {
    transition: none;
  }

  .mission-card li:hover {
    transform: none;
  }
}
</style>