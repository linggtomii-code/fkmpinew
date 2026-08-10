<template>
  <div class="directory-controls-shell">
    <!-- Search box -->
    <div class="search-box" :class="{ 'is-focused': isFocused }">
      <svg
        class="search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        type="text"
        :value="search"
        placeholder="Cari nama kampus, lokasi, atau kata kunci..."
        aria-label="Cari anggota"
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />

      <button
        v-if="search"
        type="button"
        class="search-clear"
        aria-label="Hapus pencarian"
        @click="$emit('update:search', '')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <!-- Right side: filters + reset -->
    <div class="controls-right">
      <div class="filter-tabs" role="tablist" aria-label="Filter berdasarkan region">
        <button
          v-for="filter in filters"
          :key="filter.value"
          type="button"
          role="tab"
          :aria-selected="activeFilter === filter.value"
          :class="[
            'filter-button',
            { active: activeFilter === filter.value },
            filter.value !== 'all' ? 'filter-button--has-dot' : '',
          ]"
          @click="$emit('update:activeFilter', filter.value)"
        >
          <span v-if="filter.value !== 'all'" class="filter-dot" aria-hidden="true"></span>
          <span class="filter-label">{{ filter.label }}</span>
          <span v-if="filter.count !== undefined" class="filter-count">{{ filter.count }}</span>
        </button>
      </div>

      <button
        v-if="hasActiveFilters"
        type="button"
        class="reset-button"
        @click="resetAll"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { members } from '../../data/Member.ts'

const props = defineProps<{
  search: string
  activeFilter: string
}>()

const emit = defineEmits<{
  'update:search': [value: string]
  'update:activeFilter': [value: string]
}>()

const isFocused = ref(false)

// Hitung jumlah per filter
const counts = computed(() => ({
  all: members.length,
  Riau: members.filter((m) => m.region === 'Riau').length,
  'Kepulauan Riau': members.filter((m) => m.region === 'Kepulauan Riau').length,
  regional: members.filter((m) => m.type === 'regional').length,
}))

const filters = computed(() => [
  { label: 'Semua', value: 'all', count: counts.value.all },
  { label: 'Riau', value: 'Riau', count: counts.value.Riau },
  { label: 'Kepulauan Riau', value: 'Kepulauan Riau', count: counts.value['Kepulauan Riau'] },

])

const hasActiveFilters = computed(
  () => props.search.trim() !== '' || props.activeFilter !== 'all'
)

function resetAll() {
  emit('update:search', '')
  emit('update:activeFilter', 'all')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.directory-controls-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  background: rgba(253, 250, 246, 0.7);
  border: 1px solid #e6dacd;
  border-radius: 18px;
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 24px -18px rgba(58, 41, 36, 0.35);
}

.controls-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* ==== SEARCH BOX ==== */
.search-box {
  position: relative;
  width: 320px;
  flex: 1 1 320px;
  max-width: 420px;
}

.search-box input {
  width: 100%;
  height: 44px;
  padding: 0 42px 0 46px;
  border: 1px solid #ded2c9;
  border-radius: 12px;
  outline: none;
  background: #fffdf9;
  color: #3a2924;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.search-box input::placeholder {
  color: #b6a498;
  font-weight: 400;
}

.search-box input:hover {
  border-color: #c9a48c;
}

.search-box input:focus {
  border-color: #96725f;
  box-shadow: 0 0 0 4px rgba(150, 114, 95, 0.14);
  background: #fff;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  color: #9b887d;
  pointer-events: none;
  transition: color 0.25s ease, transform 0.25s ease;
}

.search-box.is-focused .search-icon {
  color: #96725f;
  transform: translateY(-50%) scale(1.08);
}

.search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #9b887d;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.search-clear svg {
  width: 13px;
  height: 13px;
}

.search-clear:hover {
  background: rgba(150, 114, 95, 0.14);
  color: #654438;
  transform: translateY(-50%) scale(1.08);
}

/* ==== FILTER TABS ==== */
.filter-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 4px;
  background: rgba(230, 218, 205, 0.35);
  border-radius: 12px;
}

.filter-tabs::-webkit-scrollbar {
  display: none;
}

.filter-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: #6f5f57;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;
}

.filter-button:hover {
  background: rgba(255, 253, 249, 0.9);
  color: #3a2924;
}

.filter-button.active {
  background: #3a2924;
  color: #fdfaf6;
  border-color: #3a2924;
  box-shadow: 0 6px 14px -6px rgba(58, 41, 36, 0.6);
}

.filter-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c9a48c;
  transition: background 0.22s ease;
}

.filter-button.active .filter-dot {
  background: #e5b89c;
}

.filter-count {
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(150, 114, 95, 0.14);
  color: #7c5a49;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  transition: background 0.22s ease, color 0.22s ease;
}

.filter-button.active .filter-count {
  background: rgba(255, 253, 246, 0.18);
  color: #fdfaf6;
}

/* ==== RESET BUTTON ==== */
.reset-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border: 1px dashed #c9a48c;
  border-radius: 10px;
  background: transparent;
  color: #8d6a57;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease,
    transform 0.22s ease;
  animation: reset-in 0.3s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.reset-button svg {
  width: 13px;
  height: 13px;
  transition: transform 0.4s ease;
}

.reset-button:hover {
  background: rgba(150, 114, 95, 0.1);
  color: #654438;
  border-color: #96725f;
}

.reset-button:hover svg {
  transform: rotate(-180deg);
}

@keyframes reset-in {
  from {
    opacity: 0;
    transform: translateX(-6px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ==== RESPONSIVE ==== */
@media (max-width: 900px) {
  .directory-controls-shell {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }

  .search-box {
    width: 100%;
    max-width: none;
  }

  .controls-right {
    justify-content: space-between;
    gap: 10px;
  }

  .filter-tabs {
    flex: 1 1 auto;
    min-width: 0;
  }
}

@media (max-width: 520px) {
  .directory-controls-shell {
    padding: 14px 16px;
  }

  .search-box input {
    font-size: 12.5px;
  }

  .filter-button {
    font-size: 11px;
    padding: 0 12px;
    min-height: 34px;
  }

  .controls-right {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .reset-button {
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .search-box input,
  .search-icon,
  .search-clear,
  .filter-button,
  .filter-dot,
  .filter-count,
  .reset-button,
  .reset-button svg {
    transition: none;
  }

  .reset-button {
    animation: none;
  }

  .reset-button:hover svg {
    transform: none;
  }
}
</style>