<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import ResponsivePhoto from "./ResponsivePhoto.vue";
import { photos } from "../data/photography.js";
</script>

<template>
  <section id="uvod" class="hero">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-art" aria-hidden="true">
      <ResponsivePhoto :photo="photos.hero" sizes="(max-width: 599px) 100vw, (max-width: 899px) 65vw, 58vw" priority decorative /><span class="art-cross cross-one">+</span
      ><span class="art-cross cross-two">+</span
      ><span class="art-coordinate"
        >SURFACE STUDY — 001<br />FORM / FINISH / PRECISION</span
      >
    </div>
    <div class="container hero-content">
      <p class="eyebrow">
        <span class="status-dot"></span>AUTOMOTIVE DETAILING / CONCEPT 01
      </p>
      <h1>{{ t("DETAIL,") }}<br />{{ t("KTERÝ MĚNÍ") }}<br /><span>{{ t("CELEK.") }}</span></h1>
      <p class="hero-description"> {{ t("Prémiová péče o lak, interiér a každý detail vozu.") }}<br
          class="desktop-break"
        /> {{ t("Pro auta, která si zaslouží víc než rychlou myčku.") }} </p>
      <div class="hero-actions">
        <a class="button button-light" href="#kontakt"
          >{{ t("Rezervovat péči") }} <span aria-hidden="true"><ArrowIcon /></span></a
        ><a class="text-link" href="#sluzby"
          >{{ t("Prohlédnout služby") }} <span aria-hidden="true"><ArrowIcon direction="down" /></span></a
        >
      </div>
    </div>
    <div class="container hero-bottom">
      <span>{{ t("PRECIZNOST V KAŽDÉ VRSTVĚ.") }}</span
      ><span class="hero-bottom-center">{{ t("LAK / POVRCH / INTERIÉR") }}</span
      ><a href="#sluzby" :aria-label="t(&quot;Přejít na služby&quot;)"
        >SCROLL TO EXPLORE <span aria-hidden="true"><ArrowIcon direction="down" /></span></a
      >
    </div>
  </section>
</template>
