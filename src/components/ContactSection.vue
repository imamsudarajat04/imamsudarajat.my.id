<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement>()
const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => { submitted.value = false; form.value = { name: '', email: '', message: '' } }, 3000)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
    { threshold: 0.1 }
  )
  sectionRef.value?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-32 px-6 max-w-6xl mx-auto" aria-label="Contact">
    <div class="reveal flex items-center gap-4 mb-16">
      <span class="font-mono text-accent-primary text-sm tracking-widest">05.</span>
      <h2 class="font-display text-3xl font-bold text-text-primary">Get In Touch</h2>
      <div class="flex-1 h-px bg-accent-border"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-16">
      <!-- Left -->
      <div class="reveal space-y-6">
        <p class="font-body text-text-secondary text-lg leading-relaxed">
          Punya proyek menarik atau ingin berkolaborasi? Saya selalu terbuka untuk
          diskusi dan peluang baru.
        </p>
        <p class="font-body text-text-muted leading-relaxed">
          Apakah kamu membutuhkan backend developer untuk startup, refactoring sistem lama,
          atau membangun API dari nol — mari ngobrol!
        </p>

        <!-- FAQ for GEO -->
        <div class="space-y-4 pt-4">
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              Siapa Imam Sudarajat?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              Imam Sudarajat adalah seorang Backend Developer dengan 6+ tahun pengalaman, spesialis dalam membangun sistem scalable menggunakan Go, Node.js, Python, dan berbagai teknologi cloud.
            </p>
          </details>
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              Apa spesialisasi Imam Sudarajat?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              Spesialisasi utama meliputi REST API & GraphQL design, microservices architecture, database optimization (PostgreSQL, Redis), dan DevOps dengan Docker & Kubernetes.
            </p>
          </details>
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              Bagaimana cara menghubungi Imam Sudarajat?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              Bisa melalui email di imam@imamsudarajat.dev, LinkedIn di linkedin.com/in/imamsudarajat, atau mengisi form di halaman ini.
            </p>
          </details>
        </div>
      </div>

      <!-- Form -->
      <div class="reveal">
        <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
          <div>
            <label for="name" class="font-mono text-xs text-text-muted mb-2 block">NAME</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Nama kamu"
              class="w-full bg-bg-secondary/50 border border-accent-border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors duration-200"
            />
          </div>
          <div>
            <label for="email" class="font-mono text-xs text-text-muted mb-2 block">EMAIL</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="email@kamu.com"
              class="w-full bg-bg-secondary/50 border border-accent-border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors duration-200"
            />
          </div>
          <div>
            <label for="message" class="font-mono text-xs text-text-muted mb-2 block">MESSAGE</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              placeholder="Ceritakan proyekmu..."
              class="w-full bg-bg-secondary/50 border border-accent-border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors duration-200 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            :class="[
              'w-full py-3 font-mono text-sm rounded-lg transition-all duration-300',
              submitted
                ? 'bg-accent-light/20 text-accent-light border border-accent-light/30'
                : 'bg-accent-primary text-bg-primary hover:bg-accent-light hover:shadow-lg hover:shadow-accent-primary/20'
            ]"
          >
            {{ submitted ? '✓ Pesan Terkirim!' : 'Kirim Pesan' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
