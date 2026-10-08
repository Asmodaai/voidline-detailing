<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import ResponsivePhoto from "./ResponsivePhoto.vue";
import { photos } from "../data/photography.js";
</script>

<template>
  <section class="showcase">
    <div class="container showcase-grid">
      <div class="showcase-copy" data-reveal>
        <p class="eyebrow">{{ t("02 / FILOZOFIE PÉČE") }}</p>
        <h2>{{ t("Méně") }}<br />{{ t("kompromisů.") }}<br /><span>{{ t("Více detailu.") }}</span></h2>
        <p> {{ t("Lesk je první dojem. Skutečný rozdíl je v přípravě, konzistenci a pozornosti, kterou dostane každý povrch.") }} </p>
        <p> {{ t("Od nenápadné hrany po celou karoserii. Protože celek je jen tak dobrý jako jeho nejmenší detail.") }} </p>
        <a class="text-link" href="#proces"
          >{{ t("Jak přemýšlíme o péči") }} <span aria-hidden="true"><ArrowIcon /></span></a
        >
      </div>
      <figure class="bodywork" data-reveal>
        <ResponsivePhoto
          :photo="photos.editorial"
          sizes="(max-width: 599px) calc(100vw - 48px), (max-width: 1754px) 42vw, 660px"
        />
        <span class="bodywork-tag eyebrow">THE ART OF THE SURFACE</span
        ><span class="bodywork-cross" aria-hidden="true">+</span>
        <figcaption>
          <span>{{ t("STUDIE POVRCHU / 002") }}</span><span>{{ t("ILUSTRAČNÍ FOTOGRAFIE") }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
