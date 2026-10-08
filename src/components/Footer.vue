<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
// Placeholder: set the verified public VERBA URL here when it is available.
// An empty value intentionally renders a placeholder anchor without navigation.
const verbaUrl = "";
</script>

<template>
  <footer class="footer container">
    <div class="footer-top">
      <a
        class="brand"
        href="#uvod"
        :aria-label="t(&quot;VOIDLINE Detailing — zpět na úvod&quot;)"
        ><span class="brand-word"
          >VOIDLINE<span class="brand-slash" aria-hidden="true">/</span></span
        ><span class="brand-sub">DETAILING</span></a
      ><span class="footer-tagline">Premium automotive care</span
      ><a class="back-top" href="#uvod"
        >{{ t("Zpět nahoru") }} <span aria-hidden="true"><ArrowIcon direction="up" /></span></a
      >
    </div>
    <p class="photography-note">{{ t("Fotografie jsou ilustrační. Nezobrazují zakázky ani provozovnu VOIDLINE.") }}</p>
    <div class="footer-bottom">
      <p>
        Concept project by
        <a
          class="verba-link"
          :href="verbaUrl || undefined"
          :title="verbaUrl ? undefined : t(&quot;Odkaz na web VERBA připravujeme.&quot;)"
          ><strong>VERBA</strong></a
        >
      </p>
      <p>{{ t("Fiktivní portfolio projekt") }}</p>
      <span class="eyebrow">DESIGNED TO MAKE A DIFFERENCE.</span>
    </div>
  </footer>
</template>
