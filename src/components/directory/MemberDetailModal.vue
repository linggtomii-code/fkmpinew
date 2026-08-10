<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="member"
        class="modal-overlay"
        @click.self="$emit('close')"
      >
        <div
          class="member-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="`Detail ${member.name}`"
        >
          <button
            ref="closeButtonRef"
            type="button"
            class="modal-close"
            aria-label="Tutup detail"
            @click="$emit('close')"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <!-- Kepala modal: logo + tag -->
          <div class="modal-head">
            <div class="modal-logo">
              <img
                v-if="member.logo"
                :src="member.logo"
                :alt="`Logo ${member.name}`"
              />
              <span v-else class="modal-initials">{{ initials }}</span>
            </div>

            <div class="modal-tags">
              <span class="tag tag-region">{{ member.region }}</span>

              <span v-if="member.type === 'regional'" class="tag tag-type">
                Regional
              </span>
              <span v-else-if="member.role" class="tag tag-type">
                {{ member.role }}
              </span>

              <span v-if="member.status" class="tag tag-status">
                {{ member.status }}
              </span>
            </div>
          </div>

          <!-- Identitas -->
          <p class="modal-alias">{{ member.shortName }}</p>

          <h2>{{ member.name }}</h2>

          <p class="modal-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
            {{ member.location }}
          </p>

          <div class="modal-divider" aria-hidden="true"></div>

          <p class="modal-description">
            {{ member.description }}
          </p>

          <!-- Aksi -->
          <div class="modal-actions">
            <button type="button" class="modal-action" @click="$emit('close')">
              Tutup
            </button>

            <a href="#kontak" class="modal-secondary" @click="$emit('close')">
              Ingin berkolaborasi dengan kampus ini? →
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { Member } from '../../types/member'

const props = defineProps<{
  member: Member | null
}>()

const emit = defineEmits<{
  close: []
}>()

const closeButtonRef = ref<HTMLButtonElement | null>(null)

const initials = computed(() => {
  if (!props.member) return ''

  return (
    props.member.shortName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('') || '•'
  )
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

// Scroll-lock + Escape + fokus saat modal terbuka
watch(
  () => props.member,
  (value) => {
    if (value) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
      requestAnimationFrame(() => closeButtonRef.value?.focus())
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* ==== TRANSISI ==== */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .member-modal,
.modal-leave-active .member-modal {
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.modal-enter-from .member-modal,
.modal-leave-to .member-modal {
  transform: scale(0.94) translateY(16px);
}

/* ==== OVERLAY ==== */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(43, 30, 24, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* ==== MODAL ==== */
.member-modal {
  position: relative;
  width: min(520px, 100%);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding: 0 36px 30px;
  border: 1px solid #e6dacd;
  border-radius: 24px;
  background: linear-gradient(180deg, #fdfaf6, #f7f0e7);
  box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.5);
}

/* ==== TOMBOL CLOSE ==== */
.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(224, 210, 195, 0.9);
  border-radius: 50%;
  background: rgba(253, 250, 246, 0.92);
  color: #654438;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.25s ease, color 0.25s ease;
}

.modal-close svg {
  width: 14px;
  height: 14px;
}

.modal-close:hover {
  background: #3a2924;
  color: #fdfaf6;
  transform: rotate(90deg);
}

/* ==== KEPALA MODAL ==== */
.modal-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin: 0 -36px 26px;
  padding: 44px 24px 26px;
  border-bottom: 1px dashed #e0d2c3;
  border-radius: 24px 24px 0 0;
  background:
    radial-gradient(200px 120px at 50% 42%, rgba(150, 114, 95, 0.16), transparent 75%),
    radial-gradient(rgba(101, 68, 56, 0.12) 1px, transparent 1.4px);
  background-size: auto, 12px 12px;
}

.modal-logo {
  position: relative;
  display: grid;
  place-items: center;
  width: 116px;
  height: 116px;
  background: #fffdf9;
  border: 1px solid #eadcd0;
  border-radius: 30px;
  box-shadow:
    inset 0 0 0 6px #faf4ec,
    0 18px 30px -18px rgba(58, 41, 36, 0.5);
}

/* Ring dekoratif melingkar di sekeliling badge */
.modal-logo::before {
  content: '';
  position: absolute;
  inset: -10px;
  border: 1px dashed rgba(150, 114, 95, 0.35);
  border-radius: 50%;
}

.modal-logo img {
  display: block;
  width: 84px;
  height: 84px;
  object-fit: contain;
}

.modal-initials {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 40px;
  font-weight: 600;
  color: #96725f;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.tag {
  padding: 5px 12px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tag-region {
  background: rgba(150, 114, 95, 0.15);
  color: #7c5a49;
}

.tag-type {
  background: rgba(58, 41, 36, 0.06);
  border: 1px solid rgba(58, 41, 36, 0.14);
  color: #5c463c;
}

.tag-status {
  background: #96725f;
  color: #fdfaf6;
}

/* ==== IDENTITAS ==== */
.modal-alias {
  margin: 0;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #a3806c;
}

.member-modal h2 {
  margin: 9px 0 0;
  text-align: center;
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: #33221d;
}

.modal-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 11px 0 0;
  color: #8d7d74;
  font-size: 11.5px;
  font-weight: 600;
}

.modal-location svg {
  flex: none;
  width: 14px;
  height: 14px;
  color: #96725f;
}

.modal-divider {
  width: 64px;
  height: 1px;
  margin: 22px auto;
  background: linear-gradient(90deg, transparent, #c9a48c, transparent);
}

.modal-description {
  margin: 0;
  color: #6f5f57;
  font-size: 13px;
  line-height: 1.85;
}

/* ==== AKSI ==== */
.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 26px;
}

.modal-action {
  width: 100%;
  min-height: 46px;
  border: 0;
  border-radius: 999px;
  background: #3a2924;
  color: #fdfaf6;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
}

.modal-action:hover {
  background: #96725f;
  transform: translateY(-1px);
}

.modal-secondary {
  text-align: center;
  color: #654438;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.modal-secondary:hover {
  opacity: 1;
  text-decoration: underline;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 560px) {
  .member-modal {
    padding: 0 22px 24px;
  }

  .modal-head {
    margin: 0 -22px 22px;
    padding: 38px 16px 22px;
  }

  .modal-logo {
    width: 100px;
    height: 100px;
  }

  .modal-logo img {
    width: 72px;
    height: 72px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .modal-enter-active .member-modal,
  .modal-leave-active .member-modal,
  .modal-close,
  .modal-action {
    transition: none;
  }
}
</style>