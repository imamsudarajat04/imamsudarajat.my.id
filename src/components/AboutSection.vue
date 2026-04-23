<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
    { threshold: 0.1 }
  )
  sectionRef.value?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
  { value: '99%', label: 'System Uptime' },
]
</script>

<template>
  <section id="about" ref="sectionRef" class="py-32 px-6 max-w-6xl mx-auto" aria-label="About Imam Sudarajat">
    <div class="reveal flex items-center gap-4 mb-16">
      <span class="font-mono text-accent-primary text-sm tracking-widest">01.</span>
      <h2 class="font-display text-3xl font-bold text-text-primary">About Me</h2>
      <div class="flex-1 h-px bg-accent-border"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-16 items-center">
      <!-- Text -->
      <div class="reveal space-y-5">
        <p class="font-body text-text-secondary leading-relaxed text-lg">
          Hi! I am <strong class="text-accent-primary">Imam Sudarajat</strong>, a Fullstack Developer
          with 3+ years of experience building scalable and reliable systems across industries.
        </p>
        <p class="font-body text-text-secondary leading-relaxed">
          I am passionate about designing clean architecture, writing maintainable code, and
          optimizing system performance across both frontend and backend. Outside of coding,
          I enjoy experimenting with open-source tools and sharing knowledge with developer communities.
        </p>
        <p class="font-body text-text-secondary leading-relaxed">
          I am currently available for freelance projects and exciting collaborations. I believe that
          great digital products are built on strong end-to-end engineering.
        </p>

        <div class="pt-4">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 font-mono text-sm text-accent-primary hover:gap-4 transition-all duration-300"
          >
            Let's collaborate
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Stats + avatar -->
      <div class="reveal space-y-6">
        <!-- Avatar placeholder -->
        <div class="w-48 h-48 mx-auto md:mx-0 rounded-2xl glow-border relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-light/5 flex items-center justify-center">
            <span class="font-display text-6xl font-bold text-gradient">IS</span>
          </div>
          <div class="absolute inset-0 grid-bg opacity-50"></div>
        </div>

        <!-- Stats grid -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="card-glass rounded-lg p-4 text-center hover:border-accent-primary/30 transition-colors duration-300"
          >
            <p class="font-display text-2xl font-bold text-gradient">{{ stat.value }}</p>
            <p class="font-body text-xs text-text-muted mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
