<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="member"
        class="modal-overlay"
        @click.self="$emit('close')"
      >
        <div class="member-modal">
          <button type="button" class="modal-close" aria-label="Close modal" @click="$emit('close')">
            ×
          </button>

          <div class="modal-logo">
            <img
              v-if="member.logo"
              :src="member.logo"
              :alt="member.name"
            />

            <span v-else>
              {{ initials }}
            </span>
          </div>

          <span class="member-status">
            {{ member.status }}
          </span>

          <h2>
            {{ member.name }}
          </h2>

          <p class="modal-region">
            {{ member.region }}
          </p>

          <p class="modal-description">
            {{ member.description }}
          </p>

          <button type="button" class="modal-action" @click="$emit('close')">
            Tutup
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Member } from '../../types/member'

const props = defineProps<{
  member: Member | null
}>()

defineEmits<{
  close: []
}>()

const initials = computed(() => {
  if (!props.member) return ''

  return props.member.shortName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.25s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.96) translateY(8px);
}
</style>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(37, 26, 22, 0.58);
  backdrop-filter: blur(8px);
}

.member-modal {
  position: relative;
  width: min(440px, 100%);
  padding: 35px;
  border-radius: 16px;
  background: #fbf9f6;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.modal-close {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: #eee5de;
  color: #3a2924;
  cursor: pointer;
}

.modal-logo {
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 17px;
  overflow: hidden;
  border-radius: 15px;
  background: #eee4db;
  color: #705647;
  font-size: 20px;
  font-weight: 800;
}

.modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.member-status {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 9px;
  padding: 5px 7px;
  border-radius: 999px;
  background: #eee5dd;
  color: #846858;
  font-size: 7px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.member-modal h2 {
  margin: 0;
  color: #3a2924;
  font-size: 23px;
  letter-spacing: -0.04em;
}

.modal-region {
  margin: 7px 0 0;
  color: #967f73;
  font-size: 9px;
}

.modal-description {
  margin: 20px auto 0;
  max-width: 350px;
  color: #7f7068;
  font-size: 10px;
  line-height: 1.8;
}

.modal-action {
  width: 100%;
  height: 38px;
  margin-top: 24px;
  border: 0;
  border-radius: 8px;
  background: #3a2924;
  color: white;
  font-size: 9px;
  font-weight: 800;
  cursor: pointer;
}
</style>