<script setup>
import LanguageSwitch from "./LanguageSwitch.vue";
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";
const open = ref(false);
const scrolled = ref(false);
const menuButton = ref(null);
const links = [
  [t("Služby"), "#sluzby"],
  [t("Péče"), "#pece"],
  [t("Proces"), "#proces"],
  ["FAQ", "#faq"],
  [t("Kontakt"), "#kontakt"],
];
const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};
const close = () => {
  open.value = false;
};
function onEscape(event) {
  if (event.key === "Escape" && open.value) {
    close();
    menuButton.value?.focus();
  }
}
function onResize() {
  if (window.innerWidth >= 900) close();
}
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onEscape);
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onEscape);
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <header class="site-header" :class="{ scrolled, 'menu-open': open }">
    <div class="nav-inner container">
      <a
        class="brand"
        href="#uvod"
        :aria-label="t(&quot;VOIDLINE Detailing — úvod&quot;)"
        @click="close"
      >
        <span class="brand-word"
          >VOIDLINE<span class="brand-slash" aria-hidden="true">/</span></span
        >
        <span class="brand-sub">DETAILING</span>
      </a>
      <button
        ref="menuButton"
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-navigation"
        @click="open = !open"
      >
        <span>{{ open ? t("Zavřít") : "Menu" }}</span
        ><span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
      </button>
      <nav
        id="primary-navigation"
        class="navigation"
        :class="{ 'is-open': open }"
        :aria-label="t(&quot;Hlavní navigace&quot;)"
      >
        <a
          v-for="[label, href] in links"
          :key="href"
          :href="href"
          @click="close"
          >{{ label }}</a
        >
        <a
          href="#kontakt"
          class="button button-small button-light nav-cta"
          @click="close"
          >{{ t("Rezervovat péči") }} <span aria-hidden="true"><ArrowIcon /></span></a
        >
      <LanguageSwitch />
      </nav>
    </div>
  </header>
</template>
