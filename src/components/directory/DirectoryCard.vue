<template>
  <article class="member-card">
    <div class="member-card-top">
      <div class="member-logo">
        <img v-if="member.logo" :src="member.logo" :alt="member.name" />

        <span v-else>{{ getInitials(member.shortName) }}</span>
      </div>

      <span class="member-status">
        {{ member.status }}
      </span>
    </div>

    <div class="member-content">
      <span class="member-region">
        {{ member.region }}
      </span>

      <h3>{{ member.name }}</h3>

      <p>{{ member.description }}</p>
    </div>

    <button type="button" class="member-detail-button" @click="$emit('detail', member)">
      Lihat Detail
      <span>↗</span>
    </button>
  </article>
</template>

<script setup lang="ts">
import type { Member } from '../../types/member'

defineProps<{
  member: Member
}>()

defineEmits<{
  detail: [member: Member]
}>()

const getInitials = (value: string) => {
  return value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}
</script>

<style scoped>
.member-card {
  display: flex;
  flex-direction: column;
  min-height: 255px;
  padding: 17px;
  border: 1px solid #e1d6ce;
  border-radius: 11px;
  background: #fbf9f6;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.member-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(63, 44, 35, 0.08);
}

.member-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.member-logo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9px;
  background: #eee4db;
  color: #6f5547;
  font-size: 12px;
  font-weight: 800;
}

.member-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
}

.member-status {
  display: inline-flex;
  width: fit-content;
  padding: 5px 7px;
  border-radius: 999px;
  background: #eee5dd;
  color: #846858;
  font-size: 7px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.member-content {
  flex: 1;
  margin-top: 20px;
}

.member-region {
  color: #9a8477;
  font-size: 7px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.member-content h3 {
  margin: 7px 0 0;
  color: #3a2924;
  font-size: 14px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.member-content p {
  margin: 8px 0 0;
  color: #85766e;
  font-size: 8px;
  line-height: 1.65;
}

.member-detail-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0 0;
  border: 0;
  border-top: 1px solid #e8dfd8;
  background: transparent;
  color: #3a2924;
  font-size: 8px;
  font-weight: 800;
  cursor: pointer;
}

.member-card:hover .member-detail-button span {
  transform: translate(2px, -2px);
}
</style>