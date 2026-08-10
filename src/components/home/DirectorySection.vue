<template>
  <section id="Kampus-Terhubung" class="directory-section">
    <!-- Elemen dekoratif -->
    <div class="section-decor" aria-hidden="true">
      <span class="decor-dots"></span>
      <span class="decor-ring"></span>
    </div>

    <div class="container">
      <div class="section-heading directory-heading">
        <div class="heading-main">
          <span class="section-label">
            <i ></i>
            Kampus Terhubung
          </span>

          <h2>
            Kampus terhubung dengan
            <span>FKMPI Riau Kepri</span>
          </h2>

        </div>

        <p class="heading-copy">
          Kenali kampus dan jejaring mahasiswa yang menjadi bagian dari
          FKMPI Riau Kepri — dari kampus negeri, swasta, hingga jejaring regional.
        </p>
      </div>

      <div class="filters-slot">
        <DirectoryFilters
          v-model:search="search"
          v-model:active-filter="activeFilter"
        />
      </div>

      <div v-if="filteredMembers.length" class="member-grid">
        <DirectoryCard
          v-for="(member, index) in displayedMembers"
          :key="member.id"
          :member="member"
          :index="index"
          class="grid-item"
          :style="{ animationDelay: (index % 9) * 60 + 'ms' }"
          @detail="handleDetail"
        />
      </div>

      <div v-else class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <p>Tidak ada anggota yang ditemukan.</p>
        <button class="empty-reset" @click="resetFilters">
          Reset pencarian &amp; filter
        </button>
      </div>

      <div v-if="filteredMembers.length > 6" class="view-all-wrapper">
        <button class="view-all-button" @click="showAllMembers = !showAllMembers">
          {{ showAllMembers ? 'Tampilkan Lebih Sedikit ↑' : 'Lihat Semua Kampus →' }}
        </button>
      </div>

      <div class="directory-footer">
        <span>
          Menampilkan {{ displayedMembers.length }} dari
          {{ filteredMembers.length }} anggota
        </span>

        <a href="#kontak">Ingin bergabung atau berkolaborasi? →</a>
      </div>
    </div>

    <MemberDetailModal
      :member="selectedMemberForModal"
      @close="selectedMember = null"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { members } from '../../data/Member.ts'
import type { Member as SharedMember } from '../../types/member'

import DirectoryCard from '../directory/DirectoryCard.vue'
import DirectoryFilters from '../directory/DirectoryFilters.vue'
import MemberDetailModal from '../directory/MemberDetailModal.vue'

const search = ref('')
const activeFilter = ref('all')

type DirectoryCardMember = Omit<SharedMember, 'status'>

const selectedMember = ref<SharedMember | null>(null)

const selectedMemberForModal = computed<SharedMember | null>(() => {
  if (!selectedMember.value) {
    return null
  }

  return selectedMember.value
})

const showAllMembers = ref(false)

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


    return matchesSearch && matchesFilter
  })
})

const displayedMembers = computed(() => {
  if (showAllMembers.value) {
    return filteredMembers.value
  }

  return filteredMembers.value.slice(0, 6)
})

function resetFilters() {
  search.value = ''
  activeFilter.value = 'all'
}

function handleDetail(member: DirectoryCardMember) {
  selectedMember.value = {
    ...member,
    id: Number(member.id),
    status: 'Aktif',
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.directory-section {
  position: relative;
  padding: 104px 0 92px;
  overflow: hidden;
  background:
    radial-gradient(640px 340px at 90% -80px, rgba(150, 114, 95, 0.16), transparent 70%),
    radial-gradient(520px 320px at -80px 105%, rgba(149, 118, 101, 0.13), transparent 70%),
    #f4eee8;
}

.section-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decor-dots {
  position: absolute;
  top: 64px;
  right: 5%;
  width: 170px;
  height: 170px;
  background-image: radial-gradient(rgba(101, 68, 56, 0.3) 1px, transparent 1.5px);
  background-size: 14px 14px;
  -webkit-mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
  mask-image: radial-gradient(circle at center, #000 25%, transparent 72%);
}

.decor-ring {
  position: absolute;
  left: -90px;
  bottom: 70px;
  width: 240px;
  height: 240px;
  border: 1px solid rgba(101, 68, 56, 0.16);
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

.section-heading {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 60px;
  align-items: end;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #957665;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.22em;
}

.label-line {
  width: 36px;
  height: 1px;
  background: currentColor;
  opacity: 0.8;
}

.section-heading h2 {
  max-width: 620px;
  margin: 18px 0 0;
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

.heading-stats {
  display: flex;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;
}

.heading-stats li {
  padding: 0 26px;
  border-left: 1px solid rgba(101, 68, 56, 0.18);
}

.heading-stats li:first-child {
  padding-left: 0;
  border-left: 0;
}

.heading-stats strong {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #3a2924;
}

.heading-stats span {
  display: block;
  margin-top: 6px;
  color: #8d7d74;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.heading-copy {
  margin: 0 0 6px;
  padding-left: 22px;
  border-left: 2px solid rgba(150, 114, 95, 0.4);
  color: #6f5f57;
  font-size: 12.5px;
  line-height: 1.9;
  max-width: 340px;
}

.directory-heading {
  margin-bottom: 38px;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   gap: 84px 16px;
  margin-top: 76px;
}

.grid-item {
  animation: card-in 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.view-all-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.view-all-button {
  padding: 12px 28px;
  border: 1px solid #cbb9ac;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: #3a2924;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-shadow: 0 12px 24px -20px rgba(58, 41, 36, 0.7);
  transition: all 0.25s ease;
}

.view-all-button:hover {
  background: #3a2924;
  border-color: #3a2924;
  color: #f6efe7;
  transform: translateY(-2px);
  box-shadow: 0 18px 30px -20px rgba(58, 41, 36, 0.6);
}

.view-all-button:active {
  transform: translateY(0);
}

.empty-state {
  margin-top: 26px;
  padding: 54px 30px;
  border: 1px dashed #cbb9ac;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  color: #8d7d74;
  font-size: 11.5px;
}

.empty-state svg {
  width: 26px;
  height: 26px;
  color: #b39a8a;
}

.empty-state p {
  margin: 0;
}

.empty-reset {
  margin-top: 6px;
  padding: 9px 18px;
  border: 1px solid #cbb9ac;
  border-radius: 999px;
  background: transparent;
  color: #654438;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.empty-reset:hover {
  background: #654438;
  border-color: #654438;
  color: #f6efe7;
}

.directory-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid rgba(101, 68, 56, 0.15);
  color: #8d7d74;
  font-size: 10px;
  letter-spacing: 0.04em;
}

.directory-footer a {
  position: relative;
  color: #654438;
  font-weight: 800;
  text-decoration: none;
  padding-bottom: 2px;
}

.directory-footer a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #654438;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.directory-footer a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 1000px) {
  .member-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-heading {
    grid-template-columns: 1fr;
    gap: 22px;
    align-items: start;
  }

  .heading-copy {
    max-width: 460px;
    padding-left: 18px;
  }

  .decor-dots {
    display: none;
  }
  
}

@media (max-width: 640px) {
  .directory-section {
    padding: 72px 0 62px;
  }

  .section-heading h2 {
    font-size: 29px;
  }

  .member-grid {
    grid-template-columns: 1fr;
    gap: 72px 12px;   /* logo mobile tonjolannya 56px */
    margin-top: 70px;
  }

  .heading-stats {
    flex-wrap: wrap;
    row-gap: 16px;
  }

  .heading-stats li {
    padding: 0 18px;
  }

  .directory-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .grid-item {
    animation: none;
  }

  .view-all-button,
  .directory-footer a::after,
  .empty-reset {
    transition: none;
  }
}
</style>