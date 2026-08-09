<template>
  <section id="direktori" class="directory-section">
    <div class="container">
      <div class="section-heading directory-heading">
        <div>
          <span class="section-label">02 — Direktori</span>

          <h2>
            Direktori Anggota &
            <span>Politeknik FKMPI Riau Kepri</span>
          </h2>
        </div>

        <p>
          Kenali kampus dan jejaring mahasiswa yang menjadi bagian dari FKMPI Riau Kepri.
        </p>
      </div>

      <DirectoryFilters
        v-model:search="search"
        v-model:active-filter="activeFilter"
      />

      <div class="member-grid">
        <DirectoryCard
          v-for="member in filteredMembers"
          :key="member.id"
          :member="member"
          @detail="selectedMember = $event"
        />
      </div>

      <div v-if="filteredMembers.length === 0" class="empty-state">
        Tidak ada anggota yang ditemukan.
      </div>

      <div class="directory-footer">
        <span>Menampilkan {{ filteredMembers.length }} anggota</span>

        <a href="#kontak">
          Ingin bergabung atau berkolaborasi? →
        </a>
      </div>
    </div>

    <MemberDetailModal
      :member="selectedMember"
      @close="selectedMember = null"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { members } from '../../data/Member.ts'

import DirectoryCard from '../directory/DirectoryCard.vue'
import DirectoryFilters from '../directory/DirectoryFilters.vue'
import MemberDetailModal from '../directory/MemberDetailModal.vue'

const search = ref('')
const activeFilter = ref('all')

const selectedMember = ref(
  null as (typeof members)[number] | null
)

const filteredMembers = computed(() => {
  const keyword = search.value.trim().toLowerCase()

  return members.filter((member) => {
    const matchesSearch =
      !keyword ||
      member.name.toLowerCase().includes(keyword) ||
      member.shortName.toLowerCase().includes(keyword) ||
      member.location.toLowerCase().includes(keyword) ||
      member.description.toLowerCase().includes(keyword) ||
      member.role?.toLowerCase().includes(keyword)

    let matchesFilter = true

    if (activeFilter.value === 'Riau') {
      matchesFilter = member.region === 'Riau'
    }

    if (activeFilter.value === 'Kepulauan Riau') {
      matchesFilter = member.region === 'Kepulauan Riau'
    }

    if (activeFilter.value === 'regional') {
      matchesFilter = member.type === 'regional'
    }

    return matchesSearch && matchesFilter
  })
})
</script>

<style scoped>
.directory-section {
  padding: 90px 0;
  background: #f4eee8;
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

.directory-heading {
  margin-bottom: 35px;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 22px;
}

.directory-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
  color: #94847c;
  font-size: 8px;
}

.directory-footer a {
  color: #654438;
  font-weight: 700;
}

.empty-state {
  padding: 50px;
  border: 1px dashed #d2c2b7;
  border-radius: 11px;
  text-align: center;
  color: #8d7d74;
  font-size: 10px;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .section-heading {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 700px) {
  .directory-section {
    padding: 65px 0;
  }

  .section-heading h2 {
    font-size: 30px;
  }

  .member-grid {
    grid-template-columns: 1fr;
  }

  .directory-footer {
    flex-direction: column;
    gap: 8px;
  }
}
</style>