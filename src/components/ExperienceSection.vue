<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { experiences } from '../data'

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
  <section id="experience" ref="sectionRef" class="py-32 px-6 bg-bg-secondary/30" aria-label="Work experience">
    <div class="max-w-6xl mx-auto">
      <div class="reveal flex items-center gap-4 mb-16">
        <span class="font-mono text-accent-primary text-sm tracking-widest">04.</span>
        <h2 class="font-display text-3xl font-bold text-text-primary">Experience</h2>
        <div class="flex-1 h-px bg-accent-border"></div>
      </div>

      <div class="reveal relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent-border -translate-x-1/2"></div>

        <div class="space-y-12">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.id"
            :class="[
              'relative flex gap-8',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]"
          >
            <!-- Dot -->
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-primary border-2 border-bg-primary mt-2 z-10"></div>

            <!-- Spacer for alternating layout -->
            <div class="hidden md:block flex-1"></div>

            <!-- Content -->
            <div class="flex-1 pl-10 md:pl-0 md:max-w-[calc(50%-2rem)]">
              <article class="card-glass rounded-xl p-6 hover:border-accent-primary/30 transition-all duration-300">
                <div class="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <h3 class="font-display text-lg font-bold text-text-primary">{{ exp.role }}</h3>
                    <p class="font-body text-accent-primary text-sm mt-0.5">{{ exp.company }}</p>
                  </div>
                  <span class="font-mono text-xs text-text-muted bg-bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                    {{ exp.period }}
                  </span>
                </div>
                <p class="font-body text-sm text-text-muted leading-relaxed mb-4">{{ exp.description }}</p>
                <ul v-if="exp.highlights?.length" class="mb-4 space-y-2">
                  <li
                    v-for="(item, idx) in exp.highlights"
                    :key="`${exp.id}-${idx}`"
                    class="font-body text-sm text-text-muted leading-relaxed flex gap-2"
                  >
                    <span class="text-accent-primary mt-1">-</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.tech"
                    :key="tech"
                    class="font-mono text-xs text-accent-light bg-accent-glow px-2 py-0.5 rounded"
                  >{{ tech }}</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
