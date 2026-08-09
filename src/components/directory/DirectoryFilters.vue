<template>
  <div class="directory-controls-shell">
    <div class="search-box">
      <span class="search-icon">⌕</span>

      <input
        :value="search"
        type="text"
        placeholder="Cari kampus atau anggota..."
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
      />
    </div>

    <div class="filter-tabs">
      <button
        v-for="filter in filters"
        :key="filter.value"
        type="button"
        :class="['filter-button', { active: activeFilter === filter.value }]"
        @click="$emit('update:activeFilter', filter.value)"
      >
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  search: string
  activeFilter: string
}>()

defineEmits<{
  'update:search': [value: string]
  'update:activeFilter': [value: string]
}>()

const filters = [
  {
    label: 'Semua',
    value: 'all',
  },
  {
    label: 'Riau',
    value: 'Riau',
  },
  {
    label: 'Kepulauan Riau',
    value: 'Kepulauan Riau',
  },
  {
    label: 'Pengurus Regional',
    value: 'regional',
  },
]
</script>

<style scoped>
.directory-controls-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.search-box {
  position: relative;
  width: 280px;
}

.search-box input {
  width: 100%;
  height: 38px;
  padding: 0 12px 0 35px;
  border: 1px solid #ded2c9;
  border-radius: 8px;
  outline: none;
  background: #fbf9f6;
  color: #3a2924;
  font-size: 9px;
}

.search-box input:focus {
  border-color: #b89a84;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9b887d;
  font-size: 16px;
}

.filter-tabs {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}

.filter-button {
  min-height: 31px;
  padding: 0 11px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: #897970;
  font-size: 8px;
  font-weight: 700;
  cursor: pointer;
}

.filter-button:hover {
  background: #eee5dd;
}

.filter-button.active {
  background: #3a2924;
  color: white;
}

@media (max-width: 700px) {
  .directory-controls-shell {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    width: 100%;
  }

  .filter-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 3px;
  }

  .filter-button {
    flex-shrink: 0;
  }
}
</style>