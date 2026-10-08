<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
const steps = [
  [
    t("Konzultace"),
    t("Vaše představa, stav vozu a vhodný rozsah péče. Každý detail začíná rozhovorem."),
  ],
  [
    t("Převzetí vozu"),
    t("Společná prohlídka povrchů a upřesnění postupu před samotnou prací."),
  ],
  [
    "Detailing",
    t("Systematická práce od přípravy přes jednotlivé povrchy až po finální kontrolu."),
  ],
  [
    t("Předání"),
    t("Prostor pro prohlídku výsledku a doporučení, jak na navazující údržbu."),
  ],
];
</script>
<template>
  <section id="proces" class="section process container">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">{{ t("05 / OD ZÁMĚRU K DETAILU") }}</p>
      <h2>{{ t("Jasný postup.") }}<br /><span class="muted">{{ t("Žádné zkratky.") }}</span></h2>
    </div>
    <ol class="process-grid">
      <li v-for="([name, text], index) in steps" :key="name" data-reveal>
        <div class="process-number">
          <span>0{{ index + 1 }}</span
          ><span aria-hidden="true"><ArrowIcon /></span>
        </div>
        <h3>{{ name }}</h3>
        <p>{{ text }}</p>
      </li>
    </ol>
  </section>
</template>
