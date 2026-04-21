<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects } from '../data'

const sectionRef = ref<HTMLElement>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
    { threshold: 0.1 }
  )
  sectionRef.value?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="projects" ref="sectionRef" class="py-32 px-6 max-w-6xl mx-auto" aria-label="Projects">
    <div class="reveal flex items-center gap-4 mb-16">
      <span class="font-mono text-accent-primary text-sm tracking-widest">03.</span>
      <h2 class="font-display text-3xl font-bold text-text-primary">Projects</h2>
      <div class="flex-1 h-px bg-accent-border"></div>
    </div>

    <div class="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="project in projects"
        :key="project.id"
        :class="[
          'card-glass rounded-xl p-6 flex flex-col gap-4 hover:border-accent-primary/40 transition-all duration-300 group relative overflow-hidden',
          project.highlight ? 'glow-border' : ''
        ]"
      >
        <!-- Highlight badge -->
        <div v-if="project.highlight" class="absolute top-0 right-0">
          <div class="bg-accent-primary text-bg-primary font-mono text-xs px-3 py-1 rounded-bl-lg">
            Featured
          </div>
        </div>

        <!-- Top: folder + links -->
        <div class="flex items-center justify-between">
          <svg class="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
          </svg>
          <div class="flex items-center gap-3">
            <a :href="project.github" target="_blank" rel="noopener" aria-label="GitHub repository" class="text-text-muted hover:text-accent-primary transition-colors duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" aria-label="Live demo" class="text-text-muted hover:text-accent-primary transition-colors duration-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Title + desc -->
        <div class="flex-1">
          <h3 class="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 mb-2">
            {{ project.name }}
          </h3>
          <p class="font-body text-sm text-text-muted leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="font-mono text-xs text-accent-light bg-accent-glow px-2 py-1 rounded"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
