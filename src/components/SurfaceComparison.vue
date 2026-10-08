<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import { ref } from "vue";
// Add licensed image URLs here later. Both layers share the same crop and size.
const beforeImage = "";
const afterImage = "";
const position = ref(50);
</script>

<template>
  <section class="section comparison container">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">{{ t("03 / ROZDÍL JE V POVRCHU") }}</p>
      <h2>{{ t("Stejný tvar.") }}<br /><span class="muted">{{ t("Jiný odraz.") }}</span></h2>
      <p class="section-intro"> {{ t("Posuňte hranici a prozkoumejte rozdíl.") }}<br />{{ t("Abstraktní studie povrchu, nikoli výsledek skutečné zakázky.") }} </p>
    </div>
    <div
      class="comparison-frame"
      :style="{ '--position': `${position}%` }"
      data-reveal
    >
      <div class="surface-layer surface-after">
        <img v-if="afterImage" :src="afterImage" :alt="t(&quot;Povrch po péči&quot;)" />
        <div v-else class="surface-sculpture" aria-hidden="true"></div>
      </div>
      <div class="surface-layer surface-before">
        <img
          v-if="beforeImage"
          :src="beforeImage"
          :alt="t(&quot;Povrch před péčí&quot;)"
        /><template v-else
          ><div class="surface-sculpture" aria-hidden="true"></div>
          <div class="surface-scratches" aria-hidden="true"></div
        ></template>
      </div>
      <span class="comparison-label label-before">{{ t("01 / PŘED") }}</span
      ><span class="comparison-label label-after">{{ t("02 / PO") }}</span>
      <div class="comparison-divider" aria-hidden="true"></div>
      <span class="comparison-handle" aria-hidden="true"><ArrowIcon direction="chevrons" /></span>
      <label for="surface-slider" class="sr-only"
        >{{ t("Poměr zobrazení povrchu před a po péči") }}</label
      >
      <input
        id="surface-slider"
        v-model="position"
        class="comparison-slider"
        type="range"
        min="0"
        max="100"
        aria-describedby="comparison-disclosure"
        :aria-valuetext="`${position} ${t(&quot;procent původního povrchu&quot;)}`"
      />
      <span id="comparison-disclosure" class="comparison-note"
        >{{ t("VIZUÁLNÍ KONCEPT / BEZ KLIENTSKÝCH FOTOGRAFIÍ") }}</span
      >
    </div>
    <div class="comparison-caption">
      <span class="eyebrow">{{ t("POVRCH. SVĚTLO. ROZDÍL.") }}</span
      ><span
        >{{ t("Táhněte posuvníkem nebo použijte šipky na klávesnici") }} <span aria-hidden="true"><ArrowIcon direction="horizontal" /></span></span
      >
    </div>
  </section>
</template>
