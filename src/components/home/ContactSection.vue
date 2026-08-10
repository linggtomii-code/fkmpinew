<template>
  <section id="kontak" class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-information">
          <span class="section-label light">Hubungi Kami</span>

          <h2>
            Mari bangun
            <span>kolaborasi bersama.</span>
          </h2>

          <p>
            Punya ide kegiatan, ingin berkolaborasi, atau ingin mengetahui lebih jauh mengenai FKMPI Riau Kepri? Kami terbuka untuk berdiskusi.
          </p>

          <div class="contact-list">
            <div class="contact-item">
              <span class="contact-item-label">Email</span>
              <a href="mailto:fkmpiriaukepri@gmail.com">fkmpiriaukepri@gmail.com</a>
            </div>

            <div class="contact-item">
              <span class="contact-item-label">Wilayah</span>
              <span>Riau & Kepulauan Riau</span>
            </div>

            <div class="contact-item">
              <span class="contact-item-label">Social Media</span>

              <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <div class="form-heading">
            <span>Mari Terhubung</span>

            <h3>Sampaikan pesanmu.</h3>
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nama</label>

                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Nama lengkap"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>

                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="fkmpiriaukepri@email.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="message">Pesan</label>

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tulis pesan kamu..."
                required
              />
            </div>

            <button type="submit" class="submit-button">
              Kirim Pesan
              <span>→</span>
            </button>

            <p v-if="submitted" class="form-success">
              Pesan berhasil dipersiapkan. Hubungkan form ini ke backend/email service untuk pengiriman nyata.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  submitted.value = true
}
</script>

<style scoped>
.contact-section {
  padding: 90px 0;
  background: #f4eee8;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  overflow: hidden;
  border-radius: 15px;
  background: #3a2924;
  box-shadow: 0 25px 60px rgba(63, 43, 35, 0.12);
}

.contact-information {
  padding: 42px;
  color: white;
}

.section-label.light {
  display: block;
  color: #c4a995;
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.contact-information h2 {
  max-width: 430px;
  margin: 14px 0 0;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.contact-information h2 span {
  color: #c8a991;
}

.contact-information > p {
  max-width: 410px;
  margin-top: 17px;
  color: #c7b7ae;
  font-size: 10px;
  line-height: 1.8;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-top: 32px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-item-label {
  color: #9f8575;
  font-size: 7px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.contact-item > a,
.contact-item > span:last-child {
  color: #eee5df;
  font-size: 9px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  color: #e8dbd4;
  font-size: 8px;
}

.contact-form-wrapper {
  padding: 42px;
  background: #fbf9f6;
}

.form-heading span {
  color: #977764;
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.13em;
}

.form-heading h3 {
  margin: 8px 0 0;
  color: #3a2924;
  font-size: 22px;
  letter-spacing: -0.035em;
}

.contact-form-wrapper form {
  margin-top: 25px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 13px;
}

.form-group label {
  color: #75665e;
  font-size: 8px;
  font-weight: 800;
}

.form-group input,
.form-group textarea {
  width: 100%;
  border: 1px solid #e0d6ce;
  border-radius: 7px;
  outline: none;
  background: white;
  color: #3a2924;
  font-size: 9px;
}

.form-group input {
  height: 37px;
  padding: 0 11px;
}

.form-group textarea {
  padding: 11px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #b99b86;
  box-shadow: 0 0 0 3px rgba(185, 155, 134, 0.1);
}

.submit-button {
  width: 100%;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 7px;
  background: #3a2924;
  color: white;
  font-size: 9px;
  font-weight: 800;
  cursor: pointer;
}

.form-success {
  margin-top: 10px;
  padding: 9px;
  border-radius: 7px;
  background: #edf2eb;
  color: #587052;
  font-size: 8px;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .contact-section {
    padding: 65px 0;
  }

  .contact-information,
  .contact-form-wrapper {
    padding: 28px 22px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>