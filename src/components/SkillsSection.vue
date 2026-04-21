<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { skills } from '../data'

const sectionRef = ref<HTMLElement>()
const activeFilter = ref<string>('all')

const filters = ['all', 'language', 'framework', 'database', 'devops', 'tool']

const filteredSkills = computed(() => {
  if (activeFilter.value === 'all') return skills
  return skills.filter(s => s.category === activeFilter.value)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
    { threshold: 0.1 }
  )
  sectionRef.value?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

import { computed } from 'vue'
</script>

<template>
  <section id="skills" ref="sectionRef" class="py-32 px-6 bg-bg-secondary/30" aria-label="Skills">
    <div class="max-w-6xl mx-auto">
      <div class="reveal flex items-center gap-4 mb-16">
        <span class="font-mono text-accent-primary text-sm tracking-widest">02.</span>
        <h2 class="font-display text-3xl font-bold text-text-primary">Skills & Tech Stack</h2>
        <div class="flex-1 h-px bg-accent-border"></div>
      </div>

      <!-- Filter tabs -->
      <div class="reveal flex flex-wrap gap-2 mb-10">
        <button
          v-for="f in filters"
          :key="f"
          @click="activeFilter = f"
          :class="[
            'px-4 py-1.5 font-mono text-xs rounded-full border transition-all duration-200 capitalize',
            activeFilter === f
              ? 'bg-accent-primary text-bg-primary border-accent-primary'
              : 'border-accent-border text-text-muted hover:text-accent-primary hover:border-accent-primary/50'
          ]"
        >
          {{ f }}
        </button>
      </div>

      <!-- Skills grid -->
      <div class="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="card-glass rounded-lg p-4 hover:border-accent-primary/30 transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-sm text-text-primary group-hover:text-accent-primary transition-colors duration-200">
              {{ skill.name }}
            </span>
            <span class="font-mono text-xs text-text-muted">{{ skill.level }}%</span>
          </div>
          <div class="h-1 bg-bg-primary rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-accent-primary to-accent-light rounded-full transition-all duration-1000"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
