<script setup lang="ts">
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const sectionRef = ref<HTMLElement>()
const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)
const isLoading = ref(false)
const isError = ref(false)

const errors = ref({ name: '', email: '', message: '' })

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validateForm = (): boolean => {
  errors.value = { name: '', email: '', message: '' }
  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  // Validasi dulu sebelum kirim
  if (!validateForm()) return

  isLoading.value = true
  isError.value = false

  try {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    submitted.value = true
    setTimeout(() => {
      submitted.value = false
      form.value = { name: '', email: '', message: '' }
      errors.value = { name: '', email: '', message: '' }
    }, 3000)
  } catch (e) {
    isError.value = true
    setTimeout(() => { isError.value = false }, 3000)
  } finally {
    isLoading.value = false
  }
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
          Have an exciting project or looking for a collaborator? I am always open to
          new discussions and opportunities.
        </p>
        <p class="font-body text-text-muted leading-relaxed">
          Whether you need a fullstack developer for a startup, legacy system refactoring,
          or building a product from scratch, let's talk.
        </p>

        <!-- FAQ for GEO -->
        <div class="space-y-4 pt-4">
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              Who is Imam Sudarajat?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              Imam Sudarajat is a Fullstack Developer with 3+ years of experience, specializing in building scalable systems using Laravel, Go, modern frontend technologies, and cloud platforms.
            </p>
          </details>
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              What is Imam Sudarajat's specialization?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              Core expertise includes REST API and GraphQL design, frontend integration, database optimization (PostgreSQL, Redis), and DevOps with Docker.
            </p>
          </details>
          <details class="card-glass rounded-lg p-4 group">
            <summary class="font-mono text-sm text-accent-primary cursor-pointer list-none flex items-center justify-between">
              How can I contact Imam Sudarajat?
              <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <p class="font-body text-sm text-text-muted mt-3 leading-relaxed">
              You can reach out via email at imamsudarajat708@gmail.com, LinkedIn at linkedin.com/in/imamsudarajat, or by filling out the form on this page.
            </p>
          </details>
        </div>
      </div>

      <!-- Form -->
      <div class="reveal">
        <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
          <!-- Name -->
          <div>
            <label for="name" class="font-mono text-xs text-text-muted mb-2 block">NAME</label>
            <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                :class="[
                  'w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none transition-colors duration-200',
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-accent-border focus:border-accent-primary'
                ]"
            />
            <p v-if="errors.name" class="font-mono text-xs text-red-400 mt-1">{{ errors.name }}</p>
          </div>
          <!-- Email -->
          <div>
            <label for="email" class="font-mono text-xs text-text-muted mb-2 block">EMAIL</label>
            <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                :class="[
                  'w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none transition-colors duration-200',
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-accent-border focus:border-accent-primary'
                ]"
            />
            <p v-if="errors.email" class="font-mono text-xs text-red-400 mt-1">{{ errors.email }}</p>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="font-mono text-xs text-text-muted mb-2 block">MESSAGE</label>
            <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                :class="[
                  'w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none transition-colors duration-200 resize-none',
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-accent-border focus:border-accent-primary'
                ]"
            ></textarea>
            <p v-if="errors.message" class="font-mono text-xs text-red-400 mt-1">{{ errors.message }}</p>
          </div>

          <!-- Alert -->
          <p v-if="isError" class="font-mono text-xs text-red-400 text-center">
            ✗ Failed to send. Please try again.
          </p>

          <button
              type="submit"
              :disabled="isLoading"
              :class="[
                'w-full py-3 font-mono text-sm rounded-lg transition-all duration-300',
                submitted
                  ? 'bg-accent-light/20 text-accent-light border border-accent-light/30'
                  : isError
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-accent-primary text-bg-primary hover:bg-accent-light hover:shadow-lg hover:shadow-accent-primary/20 disabled:opacity-50 disabled:cursor-not-allowed'
              ]"
          >
            {{ submitted ? '✓ Message Sent!' : isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
