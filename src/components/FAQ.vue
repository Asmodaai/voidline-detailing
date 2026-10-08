<script setup>
import { t } from "../i18n.js";
import { ref } from "vue";
const active = ref(null);
const questions = [
  [
    t("Jak dlouho detailing trvá?"),
    t("Délka péče závisí na velikosti a stavu vozu i na zvolených úkonech. Korekce laku nebo důkladná práce v interiéru vyžaduje více času než běžná údržba. Konkrétní termín by se upřesnil při konzultaci."),
  ],
  [
    t("Je služba vhodná i pro starší vůz?"),
    t("Ano, detailing může dávat smysl i u staršího vozu. Důležitý je skutečný stav materiálů. Postup by měl respektovat jejich opotřebení; ne každou nedokonalost lze bezpečně odstranit."),
  ],
  [
    t("Co ovlivňuje výslednou cenu?"),
    t("Především velikost vozu, míra znečištění, stav laku a interiéru a zvolený rozsah péče. Proto jsou zde balíčky uvedené bez pevných cen. Jde o modelovou nabídku fiktivního studia."),
  ],
  [
    t("Je nutná rezervace?"),
    t("Detailing obvykle vyžaduje předem domluvený čas a rozsah práce. Na tomto konceptu si můžete vyzkoušet poptávkový formulář; skutečnou rezervaci nevytváří a žádná data neodesílá."),
  ],
  [
    t("Lze jednotlivé služby kombinovat?"),
    t("Jednotlivé oblasti péče lze obecně kombinovat podle potřeb vozu. Smysluplné pořadí je zásadní: například ochrana laku navazuje na důkladnou přípravu povrchu."),
  ],
];
</script>
<template>
  <section id="faq" class="section faq container">
    <div class="faq-heading" data-reveal>
      <p class="eyebrow">{{ t("06 / DOBRÉ VĚDĚT") }}</p>
      <h2>{{ t("Pod povrch") }}<br /><span class="muted">{{ t("otázek.") }}</span></h2>
      <p>{{ t("To podstatné, než přijde první dotek.") }}</p>
    </div>
    <div class="faq-list" data-reveal>
      <article
        v-for="([question, answer], index) in questions"
        :key="question"
        class="faq-item"
        :class="{ active: active === index }"
      >
        <h3>
          <button
            :id="`question-${index}`"
            type="button"
            :aria-expanded="active === index"
            :aria-controls="`answer-${index}`"
            @click="active = active === index ? null : index"
          >
            <span class="faq-number">0{{ index + 1 }}</span
            ><span>{{ question }}</span
            ><span class="faq-symbol" aria-hidden="true">{{
              active === index ? "−" : "+"
            }}</span>
          </button>
        </h3>
        <div
          :id="`answer-${index}`"
          class="faq-answer"
          :inert="active !== index"
          :aria-hidden="active !== index"
          role="region"
          :aria-labelledby="`question-${index}`"
        >
          <div>
            <p>{{ answer }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
