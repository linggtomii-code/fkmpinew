<template>
  <article
    class="member-card"
    tabindex="0"
    role="button"
    :aria-label="`Lihat detail ${member.name}`"
    @click="openDetail"
    @keydown.enter.prevent="openDetail"
    @keydown.space.prevent="openDetail"
  >
    <span class="card-index">{{ padIndex }}</span>

    <!-- Stage logo dengan ring dekoratif & glow -->
    <div class="card-top">
      <div class="logo-stage">
        <div class="logo-ring-outer" aria-hidden="true"></div>
        <div class="logo-ring-inner" aria-hidden="true"></div>
        <div class="logo-glow" aria-hidden="true"></div>

        <div class="logo-badge">
          <img
            v-if="member.logo && !logoFailed"
            :src="member.logo"
            :alt="`Logo ${member.shortName}`"
            loading="lazy"
            @error="logoFailed = true"
          />
          <span v-else class="logo-monogram">{{ monogram }}</span>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="card-tags">
        <span class="tag tag-region">{{ member.region }}</span>
        <span v-if="member.type === 'regional'" class="tag tag-type">
          Regional
        </span>
        <span v-else-if="member.role" class="tag tag-type">
          {{ member.role }}
        </span>
      </div>

      <p class="card-alias">{{ member.shortName }}</p>
      <h3 class="card-title">{{ member.name }}</h3>
      <p class="card-desc">{{ member.description }}</p>

      <div class="card-foot">
        <span class="card-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
          <span class="location-text">{{ member.location }}</span>
        </span>

        <span class="card-cta">
          Detail
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type { Member as SharedMember } from '../../types/member'

type Member = Omit<SharedMember, 'status'>

const props = withDefaults(
  defineProps<{ member: Member; index?: number }>(),
  { index: 0 }
)

const emit = defineEmits<{ detail: [member: Member] }>()

const logoFailed = ref(false)

watch(
  () => props.member.id,
  () => {
    logoFailed.value = false
  }
)

const padIndex = computed(() => String(props.index + 1).padStart(2, '0'))

const monogram = computed(() => {
  const source = props.member.shortName || props.member.name

  return (
    source
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? '')
      .join('') || '•'
  )
})

function openDetail() {
  emit('detail', props.member)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.member-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 62px; /* ruang untuk logo yang overlap */
  background: linear-gradient(180deg, #fdfaf6 0%, #f7f0e7 100%);
  border: 1px solid #e6dacd;
  border-radius: 22px;
  overflow: visible;
  cursor: pointer;
  outline: none;
  transition:
    transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.member-card:hover,
.member-card:focus-visible {
  transform: translateY(-6px);
  border-color: #c9a48c;
  box-shadow:
    0 28px 48px -28px rgba(58, 41, 36, 0.5),
    0 0 0 1px rgba(150, 114, 95, 0.12);
}

.member-card:focus-visible {
  outline: 2px solid #96725f;
  outline-offset: 3px;
}

.card-index {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 2;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 13px;
  color: #bda28f;
  background: rgba(253, 250, 246, 0.85);
  backdrop-filter: blur(4px);
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid rgba(189, 162, 143, 0.25);
}

/* ==== LOGO STAGE — LOGO SEBAGAI BINTANG UTAMA ==== */
.card-top {
  position: absolute;
  top: -62px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.logo-stage {
  position: relative;
  width: 140px;
  height: 140px;
  display: grid;
  place-items: center;
  pointer-events: auto;
}

/* Ring terluar — titik putus halus */
.logo-ring-outer {
  position: absolute;
  inset: -4px;
  border: 1px dashed rgba(150, 114, 95, 0.35);
  border-radius: 50%;
  transition: transform 0.6s ease;
}

/* Ring dalam — garis solid */
.logo-ring-inner {
  position: absolute;
  inset: 10px;
  border: 1.5px solid rgba(150, 114, 95, 0.22);
  border-radius: 50%;
  transition: transform 0.6s ease, border-color 0.35s ease;
}

/* Glow belakang badge */
.logo-glow {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(150, 114, 95, 0.35) 0%,
    rgba(150, 114, 95, 0.12) 40%,
    transparent 70%
  );
  filter: blur(6px);
  opacity: 0.7;
  transition: opacity 0.35s ease, transform 0.6s ease;
}

.logo-badge {
  position: relative;
  z-index: 2;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  background: #fffdf9;
  border: 2px solid #e5d4c4;
  border-radius: 34px;
  box-shadow:
    inset 0 0 0 6px #faf4ec,
    inset 0 -4px 10px rgba(150, 114, 95, 0.12),
    0 18px 32px -16px rgba(58, 41, 36, 0.45);
  transition:
    transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.member-card:hover .logo-badge,
.member-card:focus-visible .logo-badge {
  transform: translateY(-4px) scale(1.05);
  border-color: #c9a48c;
  box-shadow:
    inset 0 0 0 6px #faf4ec,
    inset 0 -4px 10px rgba(150, 114, 95, 0.18),
    0 28px 48px -20px rgba(58, 41, 36, 0.55);
}

.member-card:hover .logo-ring-outer,
.member-card:focus-visible .logo-ring-outer {
  transform: rotate(45deg);
}

.member-card:hover .logo-ring-inner,
.member-card:focus-visible .logo-ring-inner {
  transform: rotate(-30deg);
  border-color: #96725f;
}

.member-card:hover .logo-glow,
.member-card:focus-visible .logo-glow {
  opacity: 1;
  transform: scale(1.1);
}

/* Logo lebih besar — 85% dari badge */
.logo-badge img {
  display: block;
  width: 88px;
  height: 88px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(58, 41, 36, 0.15));
  transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.member-card:hover .logo-badge img,
.member-card:focus-visible .logo-badge img {
  transform: scale(1.08);
}

.logo-monogram {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 44px;
  font-weight: 600;
  color: #96725f;
  letter-spacing: -0.04em;
  text-shadow: 0 2px 4px rgba(150, 114, 95, 0.2);
}

/* ==== BODY ==== */
.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 22px 22px;
  background: linear-gradient(180deg, #fdfaf6 0%, #f7f0e7 100%);
  border-radius: 22px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
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
  background: rgba(150, 114, 95, 0.16);
  color: #7c5a49;
}

.tag-type {
  background: rgba(58, 41, 36, 0.07);
  border: 1px solid rgba(58, 41, 36, 0.16);
  color: #5c463c;
}

.card-alias {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #a3806c;
}

.card-title {
  margin: 8px 0 0;
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.012em;
  color: #33221d;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  margin: 10px 0 0;
  color: #7d6a5e;
  font-size: 12px;
  line-height: 1.7;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-foot {
  margin-top: auto;
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #eee2d4;
}

.card-location {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  color: #8d7d74;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.card-location svg {
  flex: none;
  width: 14px;
  height: 14px;
  color: #96725f;
}

.location-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-cta {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(150, 114, 95, 0.1);
  color: #654438;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 0.25s ease, color 0.25s ease;
}

.card-cta svg {
  width: 13px;
  height: 13px;
  transition: transform 0.25s ease;
}

.member-card:hover .card-cta,
.member-card:focus-visible .card-cta {
  background: #654438;
  color: #fdfaf6;
}

.member-card:hover .card-cta svg,
.member-card:focus-visible .card-cta svg {
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .member-card {
    padding-top: 56px;
  }

  .card-top {
    top: -56px;
  }

  .logo-stage {
    width: 120px;
    height: 120px;
  }

  .logo-badge {
    width: 104px;
    height: 104px;
  }

  .logo-badge img {
    width: 76px;
    height: 76px;
  }

  .logo-monogram {
    font-size: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .member-card,
  .logo-badge,
  .logo-badge img,
  .logo-ring-outer,
  .logo-ring-inner,
  .logo-glow,
  .card-cta,
  .card-cta svg {
    transition: none;
  }

  .member-card:hover,
  .member-card:focus-visible {
    transform: none;
  }

  .member-card:hover .logo-badge,
  .member-card:focus-visible .logo-badge {
    transform: none;
  }

  .member-card:hover .logo-ring-outer,
  .member-card:focus-visible .logo-ring-outer,
  .member-card:hover .logo-ring-inner,
  .member-card:focus-visible .logo-ring-inner,
  .member-card:hover .logo-glow,
  .member-card:focus-visible .logo-glow,
  .member-card:hover .logo-badge img,
  .member-card:focus-visible .logo-badge img {
    transform: none;
  }
}
</style>