<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref(false)
const particles = ref<{ x: number; y: number; size: number; delay: number; duration: number }[]>([])

onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
  particles.value = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 3,
  }))
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    aria-label="Hero section"
  >
    <!-- Ambient glow -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-light/5 blur-3xl pointer-events-none"></div>

    <!-- Floating particles -->
    <div
      v-for="(p, i) in particles"
      :key="i"
      class="absolute rounded-full bg-accent-primary/30 pointer-events-none"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        animationDelay: p.delay + 's',
        animationDuration: p.duration + 's',
        animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite`
      }"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
      <div
        :class="['transition-all duration-1000', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <p class="font-mono text-accent-primary text-sm tracking-widest mb-4 flex items-center gap-2">
          <span class="w-8 h-px bg-accent-primary"></span>
          Hello, my name is
        </p>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
          <span class="text-text-primary">Imam</span><br>
          <span class="text-gradient">Sudarajat</span>
        </h1>

        <h2 class="font-mono text-text-muted text-lg mb-6 mt-3">
          &lt; Backend Developer /&gt;
        </h2>

        <p class="font-body text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
          Membangun sistem backend yang <span class="text-accent-primary">scalable</span>,
          <span class="text-accent-light">reliable</span>, dan
          <span class="text-accent-primary">performant</span>.
          Spesialis API design, microservices, dan database optimization.
        </p>

        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="px-6 py-3 bg-accent-primary text-bg-primary font-mono text-sm font-medium rounded hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="px-6 py-3 border border-accent-border text-accent-primary font-mono text-sm rounded hover:bg-accent-glow transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div class="flex items-center gap-6 mt-10">
          <a href="https://github.com/imamsudarajat" target="_blank" rel="noopener" aria-label="GitHub" class="text-text-muted hover:text-accent-primary transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com/in/imamsudarajat" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-text-muted hover:text-accent-primary transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:imam@imamsudarajat.dev" aria-label="Email" class="text-text-muted hover:text-accent-primary transition-colors duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>

      <!-- Terminal card -->
      <div
        :class="['transition-all duration-1000 delay-300', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <div class="card-glass rounded-xl overflow-hidden glow-border animate-float">
          <div class="flex items-center gap-2 px-4 py-3 bg-bg-secondary/50 border-b border-accent-border">
            <span class="w-3 h-3 rounded-full bg-red-500/60"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/60"></span>
            <span class="w-3 h-3 rounded-full bg-accent-primary/60"></span>
            <span class="ml-2 font-mono text-xs text-text-muted">imam@dev:~</span>
          </div>
          <div class="p-6 font-mono text-sm space-y-2">
            <p><span class="text-accent-primary">$</span> <span class="text-text-secondary">whoami</span></p>
            <p class="text-text-primary pl-2">Imam Sudarajat</p>
            <p class="mt-4"><span class="text-accent-primary">$</span> <span class="text-text-secondary">cat skills.json</span></p>
            <div class="pl-2 text-xs leading-relaxed">
              <p><span class="text-accent-light">{</span></p>
              <p class="pl-4"><span class="text-text-muted">"languages"</span>: <span class="text-text-secondary">["Go", "Node.js", "Python"],</span></p>
              <p class="pl-4"><span class="text-text-muted">"databases"</span>: <span class="text-text-secondary">["PostgreSQL", "Redis"],</span></p>
              <p class="pl-4"><span class="text-text-muted">"devops"</span>: <span class="text-text-secondary">["Docker", "K8s"],</span></p>
              <p class="pl-4"><span class="text-text-muted">"exp"</span>: <span class="text-accent-primary">"6+ years"</span></p>
              <p><span class="text-accent-light">}</span></p>
            </div>
            <p class="mt-4"><span class="text-accent-primary">$</span> <span class="text-text-secondary">echo $STATUS</span></p>
            <p class="pl-2 text-accent-primary animate-pulse">● Available for work</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
      <span class="font-mono text-xs tracking-widest">SCROLL</span>
      <div class="w-px h-12 bg-gradient-to-b from-accent-primary to-transparent animate-pulse"></div>
    </div>
  </section>
</template>
