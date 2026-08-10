<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <!-- Progress bar scroll -->
    <div
      class="scroll-progress"
      :style="{ transform: `scaleX(${scrollProgress})` }"
      aria-hidden="true"
    ></div>

    <div class="container nav-wrapper">
      <a href="#beranda" class="brand" @click="closeMenu">
        <span class="brand-mark">
          <img
            src="/images/logo/fkmpiriaukeprilogo.jpg"
            alt="Logo FKMPI Riau Kepri"
            width="42"
            height="42"
          />
        </span>

        <span class="brand-text">
          <span class="brand-name">FKMPI Riau Kepri</span>
          <small class="brand-tag">
            Forum Komunikasi Mahasiswa Politeknik Indonesia
          </small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Navigasi utama">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          :class="{ active: activeHref === item.href }"
          :aria-current="activeHref === item.href ? 'true' : undefined"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav-right">
        <a href="#kontak" class="nav-button">
          Hubungi Kami
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>

        <button
          class="mobile-menu-button"
          type="button"
          :class="{ open: isOpen }"
          :aria-expanded="isOpen"
          aria-label="Buka/tutup menu navigasi"
          @click="isOpen = !isOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" class="mobile-menu">
        <nav class="mobile-nav" aria-label="Navigasi mobile">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            :class="{ active: activeHref === item.href }"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>

        <a href="#kontak" class="mobile-menu-cta" @click="closeMenu">
          Hubungi Kami →
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const scrollProgress = ref(0)
const activeHref = ref('#beranda')

const navigation = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kampus', href: '#Kampus-Terhubung' },
  { label: 'Program', href: '#program' },

]

const handleScroll = () => {
  const y = window.scrollY

  // Header kompak saat scroll
  isScrolled.value = y > 30

  // Progress bar
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  scrollProgress.value = max > 0 ? Math.min(y / max, 1) : 0

  // Scrollspy: tandai link section yang sedang terlihat
  let current = navigation[0].href
  for (const item of navigation) {
    const el = document.querySelector<HTMLElement>(item.href)
    if (el && el.getBoundingClientRect().top <= 130) {
      current = item.href
    }
  }
  activeHref.value = current
}

const closeMenu = () => {
  isOpen.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false
}

const onResize = () => {
  if (window.innerWidth > 900) isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(251, 249, 246, 0.85);
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.site-header.is-scrolled {
  background: rgba(251, 249, 246, 0.96);
  border-bottom-color: rgba(227, 217, 208, 0.9);
  box-shadow: 0 14px 32px -24px rgba(58, 41, 36, 0.4);
}

/* ==== PROGRESS BAR ==== */
.scroll-progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #96725f, #c9a892);
  transform: scaleX(0);
  transform-origin: left;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  min-height: 76px;
  transition: min-height 0.3s ease;
}

.is-scrolled .nav-wrapper {
  min-height: 62px;
}

/* ==== BRAND ==== */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e3d5c8;
  background: #fffdf9;
  box-shadow: 0 8px 16px -10px rgba(58, 41, 36, 0.45);
  transition: transform 0.3s ease;
}

.brand:hover .brand-mark {
  transform: rotate(-4deg) scale(1.06);
}

.brand-mark img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.is-scrolled .brand-mark {
  width: 36px;
  height: 36px;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  color: #3a2924;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.brand-tag {
  max-width: 230px;
  color: #94857d;
  font-size: 8px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

/* ==== DESKTOP NAV ==== */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.desktop-nav a {
  position: relative;
  padding: 8px 13px;
  border-radius: 999px;
  color: #796b64;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.25s ease, background 0.25s ease;
}

.desktop-nav a:hover {
  color: #3a2924;
  background: rgba(150, 114, 95, 0.1);
}

.desktop-nav a.active {
  color: #654438;
}

.desktop-nav a.active::after {
  content: '';
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: 3px;
  height: 2px;
  border-radius: 2px;
  background: #96725f;
}

/* ==== NAV RIGHT ==== */
.nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  background: #3a2924;
  color: #fdfaf6;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-decoration: none;
  box-shadow: 0 12px 22px -16px rgba(58, 41, 36, 0.7);
  transition: background 0.25s ease, transform 0.25s ease;
}

.nav-button svg {
  width: 13px;
  height: 13px;
  transition: transform 0.25s ease;
}

.nav-button:hover {
  background: #96725f;
  transform: translateY(-1px);
}

.nav-button:hover svg {
  transform: translateX(3px);
}

/* ==== HAMBURGER → X ==== */
.mobile-menu-button {
  position: relative;
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid #e3d9d0;
  border-radius: 12px;
  background: #fffdf9;
  cursor: pointer;
  transition: border-color 0.25s ease;
}

.mobile-menu-button:hover {
  border-color: #c9a48c;
}

.mobile-menu-button span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: #3a2924;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.mobile-menu-button span:nth-child(1) {
  transform: translate(-50%, calc(-50% - 6px));
}

.mobile-menu-button span:nth-child(2) {
  transform: translate(-50%, -50%);
}

.mobile-menu-button span:nth-child(3) {
  transform: translate(-50%, calc(-50% + 6px));
}

.mobile-menu-button.open span:nth-child(1) {
  transform: translate(-50%, -50%) rotate(45deg);
}

.mobile-menu-button.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.open span:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* ==== MOBILE MENU ==== */
.mobile-menu {
  display: none;
}

.mobile-menu-cta {
  display: none;
}

@media (max-width: 900px) {
  .desktop-nav,
  .nav-button {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 20px;
    border-top: 1px solid rgba(227, 217, 208, 0.9);
    background: rgba(251, 249, 246, 0.98);
    backdrop-filter: blur(14px);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mobile-nav a {
    padding: 13px 14px;
    border-radius: 12px;
    color: #71635c;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .mobile-nav a:hover {
    background: rgba(150, 114, 95, 0.1);
    color: #3a2924;
  }

  .mobile-nav a.active {
    background: rgba(150, 114, 95, 0.12);
    color: #654438;
  }

  .mobile-menu-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    min-height: 46px;
    border-radius: 999px;
    background: #3a2924;
    color: #fdfaf6;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-decoration: none;
  }
}

/* Transisi buka/tutup menu */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 700px) {
  .brand-tag {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header,
  .nav-wrapper,
  .brand-mark,
  .desktop-nav a,
  .nav-button,
  .nav-button svg,
  .mobile-menu-button span,
  .mobile-nav a {
    transition: none;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: none;
  }
}
</style>