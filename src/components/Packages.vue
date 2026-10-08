<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
const packages = [
  {
    name: "ESSENTIAL",
    subtitle: t("Čistý základ."),
    description: t("Pečlivá údržba pro dobrý pocit z každé jízdy."),
    items: [
      t("Šetrné mytí exteriéru"),
      t("Péče o kola a pneumatiky"),
      t("Základní péče o interiér"),
      t("Finální ošetření povrchů"),
    ],
  },
  {
    name: "SIGNATURE",
    subtitle: t("O úroveň hlouběji."),
    description: t("Ucelená péče se zaměřením na vzhled a ochranu laku."),
    items: [
      t("Exteriérový detailing"),
      t("Dekontaminace povrchu"),
      t("Korekce laku dle jeho stavu"),
      t("Výběr vhodné ochrany"),
    ],
  },
  {
    name: "FULL DETAIL",
    subtitle: t("Pozornost bez výjimek."),
    description: t("Komplexní přístup k exteriéru i prostoru, ve kterém řídíte."),
    items: [
      t("Péče o exteriér a lak"),
      t("Možnost keramické ochrany"),
      t("Hloubkové čištění interiéru"),
      t("Ošetření jednotlivých materiálů"),
    ],
  },
];
</script>

<template>
  <section id="pece" class="packages section">
    <div class="container">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">{{ t("04 / ÚROVNĚ PÉČE") }}</p>
        <h2>{{ t("Vyberte směr.") }}<br /><span class="muted">{{ t("Detail doladíme.") }}</span></h2>
        <p class="section-intro"> {{ t("Tři modelové přístupy k péči o vůz.") }}<br />{{ t("Konkrétní rozsah vždy vychází z jeho stavu a vašich představ.") }} </p>
      </div>
      <div class="package-grid">
        <article
          v-for="(pack, index) in packages"
          :key="pack.name"
          class="package"
          :class="{ featured: index === 1 }"
          data-reveal
        >
          <div class="package-top eyebrow">
            <span
              >0{{ index + 1 }} /
              {{ index === 1 ? t("DOPORUČENÝ KONCEPT") : t("KONCEPT PÉČE") }}</span
            ><span aria-hidden="true"><ArrowIcon v-if="index === 1" /><template v-else>+</template></span>
          </div>
          <h3>{{ pack.name }}</h3>
          <p class="package-subtitle">{{ pack.subtitle }}</p>
          <p class="package-description">{{ pack.description }}</p>
          <ul>
            <li v-for="item in pack.items" :key="item">
              <span aria-hidden="true"><ArrowIcon /></span>{{ item }}
            </li>
          </ul>
          <p class="package-price">{{ t("Cena dle vozu") }}</p>
          <a
            class="button"
            :class="index === 1 ? 'button-dark' : 'button-outline'"
            href="#kontakt"
            >{{ t("Probrat") }} {{ pack.name.toLowerCase() }}
            <span aria-hidden="true"><ArrowIcon /></span></a
          >
        </article>
      </div>
      <p class="package-footnote"> {{ t("Ukázkové balíčky fiktivního studia. Nejedná se o skutečnou obchodní nabídku.") }} </p>
    </div>
  </section>
</template>
