<template>
  <footer class="site-footer">
    <!-- Elemen dekoratif -->
    <div class="footer-decor" aria-hidden="true">
      <span class="decor-dots"></span>
    </div>

    <div class="container">
      <div class="footer-wrapper">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="#beranda" class="footer-brand-link">
            <img
              src="/images/logo/fkmpiriaukeprilogo.jpg"
              alt="Logo FKMPI Riau Kepri"
              class="brand-mark"
            />

            <span class="brand-text">
              <strong>FKMPI Riau Kepri</strong>
              <small>Forum Komunikasi Mahasiswa Politeknik Indonesia</small>
            </span>
          </a>

          <p class="footer-tagline">
            Wadah komunikasi, kolaborasi, dan pengembangan mahasiswa
            politeknik di wilayah Riau dan Kepulauan Riau.
          </p>
        </div>

        <!-- Navigasi -->
        <nav class="footer-nav" aria-label="Navigasi footer">
          <span class="footer-heading">Navigasi</span>

          <a
            v-for="item in links"
            :key="item.href"
            :href="item.href"
            class="footer-link"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Kolaborasi -->
        <div class="footer-cta">
          <span class="footer-heading">Kolaborasi</span>

          <p>
            Punya ide program atau ingin berkolaborasi?
            Kami terbuka untuk siapa pun.
          </p>

          <a href="#kontak" class="footer-cta-button">
            Hubungi Kami
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Statement penutup -->
      <p class="footer-statement">
        Terhubung dalam <em>satu sinergi.</em>
      </p>

      <div class="footer-bottom">
        <span>© {{ currentYear }} FKMPI Riau Kepri</span>

        <span class="footer-built">
          <i aria-hidden="true">✳</i>
          Built with Tomidev23
        </span>

        <button
          class="to-top"
          type="button"
          aria-label="Kembali ke atas"
          @click="scrollTop"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kampus', href: '#Kampus-Terhubung' },
  { label: 'Program Kerja', href: '#program' },
  { label: 'Kontak', href: '#kontak' },
]

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.site-footer {
  position: relative;
  overflow: hidden;
  padding: 72px 0 26px;
  background:
    radial-gradient(520px 260px at 92% -60px, rgba(229, 184, 156, 0.09), transparent 70%),
    #2b1e18;
  color: #c9b7ab;
}

.footer-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decor-dots {
  position: absolute;
  top: 56px;
  right: 5%;
  width: 150px;
  height: 150px;
  background-image: radial-gradient(rgba(244, 238, 232, 0.14) 1px, transparent 1.5px);
  background-size: 14px 14px;
  -webkit-mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
  mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
}

.container {
  position: relative;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

/* ==== GRID ATAS ==== */
.footer-wrapper {
  display: grid;
  grid-template-columns: 1.4fr 0.7fr 1fr;
  gap: 56px;
}

/* ==== BRAND ==== */
.footer-brand-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
}

.brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  object-fit: cover;
  border: 1px solid rgba(244, 238, 232, 0.2);
  background: #fdfaf6;
  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

.footer-brand-link:hover .brand-mark {
  transform: rotate(-4deg) scale(1.06);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-text strong {
  color: #f2e9df;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.brand-text small {
  color: #a08d80;
  font-size: 8.5px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.footer-tagline {
  max-width: 320px;
  margin: 20px 0 0;
  color: #a8968a;
  font-size: 12.5px;
  line-height: 1.8;
}

/* ==== HEADING KOLOM ==== */
.footer-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e5b89c;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.footer-heading::before {
  content: '';
  width: 22px;
  height: 1px;
  background: currentColor;
  opacity: 0.7;
}

/* ==== NAVIGASI ==== */
.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer-nav .footer-heading {
  margin-bottom: 6px;
}

.footer-link {
  position: relative;
  color: #c9b7ab;
  font-size: 12.5px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s ease, transform 0.25s ease;
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: -2px;
  color: #e5b89c;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.footer-link:hover {
  color: #f2e9df;
  transform: translateX(16px);
}

.footer-link:hover::before {
  opacity: 1;
  transform: translateX(0);
}

/* ==== CTA ==== */
.footer-cta p {
  max-width: 280px;
  margin: 16px 0 0;
  color: #a8968a;
  font-size: 12.5px;
  line-height: 1.8;
}

.footer-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  padding: 12px 20px;
  border: 1px solid rgba(229, 184, 156, 0.4);
  border-radius: 999px;
  color: #e5b89c;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: all 0.25s ease;
}

.footer-cta-button svg {
  width: 13px;
  height: 13px;
  transition: transform 0.25s ease;
}

.footer-cta-button:hover {
  background: #e5b89c;
  border-color: #e5b89c;
  color: #2b1e18;
  transform: translateY(-2px);
}

.footer-cta-button:hover svg {
  transform: translateX(3px);
}

/* ==== STATEMENT PENUTUP ==== */
.footer-statement {
  margin: 68px 0 0;
  text-align: center;
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(26px, 4.4vw, 46px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: rgba(242, 233, 223, 0.92);
}

.footer-statement em {
  color: #e5b89c;
}

/* ==== BAR BAWAH ==== */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 48px;
  padding-top: 20px;
  border-top: 1px solid rgba(244, 238, 232, 0.12);
  color: #8f7c6f;
  font-size: 10.5px;
  letter-spacing: 0.04em;
}

.footer-built {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.footer-built i {
  font-style: normal;
  color: #e5b89c;
}

.to-top {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(244, 238, 232, 0.2);
  border-radius: 50%;
  background: transparent;
  color: #e5b89c;
  cursor: pointer;
  transition: all 0.25s ease;
}

.to-top svg {
  width: 16px;
  height: 16px;
  transition: transform 0.25s ease;
}

.to-top:hover {
  background: #e5b89c;
  border-color: #e5b89c;
  color: #2b1e18;
  transform: translateY(-3px);
}

.to-top:hover svg {
  transform: translateY(-2px);
}

/* ==== RESPONSIVE ==== */
@media (max-width: 900px) {
  .footer-wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 44px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .site-footer {
    padding: 56px 0 22px;
  }

  .footer-wrapper {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-statement {
    margin-top: 52px;
  }

  .footer-bottom {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    row-gap: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brand-mark,
  .footer-link,
  .footer-link::before,
  .footer-cta-button,
  .footer-cta-button svg,
  .to-top,
  .to-top svg {
    transition: none;
  }

  .footer-link:hover,
  .footer-cta-button:hover,
  .to-top:hover {
    transform: none;
  }
}
</style>