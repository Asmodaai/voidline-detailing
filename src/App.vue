<script setup>
import { t } from "./i18n.js";
import { onMounted, onUnmounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Showcase from "./components/Showcase.vue";
import SurfaceComparison from "./components/SurfaceComparison.vue";
import Packages from "./components/Packages.vue";
import Process from "./components/Process.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

let observer;
onMounted(() => {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  )
    return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.classList.add("will-reveal");
    observer.observe(el);
  });
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <a class="skip-link" href="#main">{{ t("Přejít na obsah") }}</a>
  <Navbar />
  <main id="main" tabindex="-1">
    <Hero />
    <Services />
    <Showcase />
    <SurfaceComparison />
    <Packages />
    <Process />
    <FAQ />
    <Contact />
  </main>
  <Footer />
</template>
