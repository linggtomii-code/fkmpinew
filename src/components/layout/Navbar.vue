<template>
  <header class="site-header">
    <div class="container nav-wrapper">
      <a href="#beranda" class="brand" @click="closeMenu">
        <div class="brand-mark">FK</div>

        <div class="brand-text">
          <span>FKMPI Riau Kepri</span>
          <small>Forum Komunikasi Mahasiswa Politeknik Indonesia</small>
        </div>
      </a>

      <nav class="desktop-nav">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <a href="#kontak" class="nav-button">Hubungi Kami</a>

      <button class="mobile-menu-button" type="button" @click="isOpen = !isOpen">
        <span />
        <span />
        <span />
      </button>
    </div>

    <div v-if="isOpen" class="mobile-menu">
      <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeMenu">
        {{ item.label }}
      </a>

      <a href="#kontak" class="mobile-menu-button-link" @click="closeMenu">
        Hubungi Kami
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  {
    label: 'Beranda',
    href: '#beranda',
  },
  {
    label: 'Tentang',
    href: '#tentang',
  },
  {
    label: 'Direktori',
    href: '#direktori',
  },
  {
    label: 'Program',
    href: '#program',
  },
  {
    label: 'Kontak',
    href: '#kontak',
  },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const closeMenu = () => {
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(251, 249, 246, 0.92);
  border-bottom: 1px solid rgba(227, 217, 208, 0.8);
  backdrop-filter: blur(14px);
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.nav-wrapper {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.brand-mark {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #3a2924;
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-text span {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.brand-text small {
  margin-top: 2px;
  max-width: 210px;
  color: #94857d;
  font-size: 7px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
}

.desktop-nav a {
  color: #796b64;
  font-size: 11px;
  font-weight: 600;
}

.nav-button {
  padding: 9px 15px;
  border-radius: 8px;
  background: #3a2924;
  color: white;
  font-size: 10px;
  font-weight: 700;
}

.mobile-menu-button {
  display: none;
  width: 38px;
  height: 38px;
  padding: 9px;
  border: 1px solid #e3d9d0;
  border-radius: 9px;
  background: white;
}

.mobile-menu-button span {
  display: block;
  width: 100%;
  height: 1.5px;
  margin: 4px 0;
  background: #3a2924;
}

.mobile-menu {
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
    gap: 4px;
    padding: 12px 20px 18px;
    border-top: 1px solid #e3d9d0;
    background: rgba(251, 249, 246, 0.98);
  }

  .mobile-menu > a {
    padding: 12px;
    border-radius: 8px;
    color: #71635c;
    font-size: 11px;
    font-weight: 700;
  }

  .mobile-menu-button-link {
    margin-top: 5px;
    text-align: center;
    background: #3a2924;
    color: white !important;
  }
}

@media (max-width: 700px) {
  .brand-text small {
    display: none;
  }
}
</style>