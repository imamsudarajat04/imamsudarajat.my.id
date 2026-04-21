<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '../data'

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('about')

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  const sections = ['about', 'skills', 'projects', 'experience', 'contact']
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'py-3 bg-bg-primary/90 backdrop-blur-md border-b border-accent-border' : 'py-6'
    ]"
    role="banner"
  >
    <nav class="max-w-6xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
      <a href="#" class="font-mono text-accent-primary font-medium tracking-wider text-sm glow-text">
        &lt;IS /&gt;
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8" role="list">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :class="[
              'font-body text-sm transition-all duration-300 relative group',
              activeSection === item.href.slice(1)
                ? 'text-accent-primary'
                : 'text-text-muted hover:text-text-primary'
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute -bottom-0.5 left-0 h-px bg-accent-primary transition-all duration-300',
                activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono text-accent-primary border border-accent-border rounded hover:bg-accent-glow transition-all duration-300"
      >
        Hire Me
      </a>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-text-primary"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="md:hidden mt-3 mx-4 card-glass rounded-lg py-4 px-6"
    >
      <ul class="flex flex-col gap-4" role="list">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-text-secondary hover:text-accent-primary transition-colors duration-200 font-body text-sm"
            @click="menuOpen = false"
          >{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
