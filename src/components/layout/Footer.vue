<template>
  <footer class="site-footer">
    <div class="container footer-wrapper">
      <div class="footer-brand">
        <div class="brand-mark">FK</div>

        <div>
          <strong>FKMPI Riau Kepri</strong>

          <p>
            Forum Komunikasi Mahasiswa Politeknik Indonesia
          </p>
        </div>
      </div>

      <div class="footer-links">
        <a v-for="item in links" :key="item.href" :href="item.href">{{ item.label }}</a>
      </div>

      <div class="footer-bottom">
        <span>© {{ currentYear }} FKMPI Riau Kepri</span>
        <span>Built with Vue.js</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  {
    label: 'Beranda',
    href: '#beranda',
  },
  {
    label: 'Tentang Kami',
    href: '#tentang',
  },
  {
    label: 'Direktori Anggota',
    href: '#direktori',
  },
  {
    label: 'Program Kerja',
    href: '#program',
  },
  {
    label: 'Kontak',
    href: '#kontak',
  },
]
</script>

<style scoped>
.site-footer {
  padding: 30px 0 20px;
  background: #eee8e2;
  border-top: 1px solid #e0d6cd;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.footer-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 9px;
}

.brand-mark {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #3a2924;
  color: white;
  font-size: 11px;
  font-weight: 800;
}

.footer-brand strong {
  color: #3a2924;
  font-size: 9px;
}

.footer-brand p {
  margin: 3px 0 0;
  color: #94847b;
  font-size: 7px;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 17px;
}

.footer-links a {
  color: #81736c;
  font-size: 8px;
  font-weight: 600;
}

.footer-bottom {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
  border-top: 1px solid #dfd5cc;
  color: #9b8c84;
  font-size: 7px;
}

@media (max-width: 700px) {
  .footer-wrapper {
    grid-template-columns: 1fr;
  }

  .footer-links {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 7px;
  }
}
</style>