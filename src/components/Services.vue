<script setup>
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import ResponsivePhoto from "./ResponsivePhoto.vue";
import { photos } from "../data/photography.js";
const services = [
  {
    name: t("Exteriérový detailing"),
    text: t("Od prvního oplachu po finální dotek. Důkladné čištění karoserie, kol a detailů, které snadno uniknou pozornosti."),
    icon: "exterior",
  },
  {
    name: t("Korekce laku"),
    text: t("Promyšlená práce s povrchem. Zjemnění nedokonalostí a obnova čistoty odrazu s ohledem na stav laku."),
    icon: "paint",
  },
  {
    name: t("Keramická ochrana"),
    text: t("Další vrstva péče. Ochrana připraveného povrchu pro snazší následnou údržbu a zachování jeho vzhledu."),
    icon: "ceramic",
  },
  {
    name: t("Interiérový detailing"),
    text: t("Čistota, kterou vnímáte při každé jízdě. Péče o textil, kůži i ostatní materiály podle jejich potřeb."),
    icon: "interior",
  },
];
</script>

<template>
  <section id="sluzby" class="section services container">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">{{ t("01 / NAŠE DISCIPLÍNA") }}</p>
      <h2>{{ t("Každý povrch.") }}<br /><span class="muted">{{ t("Vlastní přístup.") }}</span></h2>
      <p class="section-intro"> {{ t("Dobrý výsledek začíná pochopením materiálu.") }}<br />{{ t("Péče do hloubky, od karoserie po kabinu.") }} </p>
    </div>
    <div class="service-grid">
      <article
        v-for="(service, index) in services"
        :key="service.name"
        class="service"
        data-reveal
      >
        <div class="service-top">
          <span class="eyebrow">0{{ index + 1 }}</span
          ><svg viewBox="0 0 80 64" fill="none" aria-hidden="true">
            <g stroke="currentColor" stroke-width="1.2">
              <template v-if="service.icon === 'exterior'">
                <path
                  d="m7 42 8-16 15-8h27l13 24M7 42h66M16 48h9m30 0h10M26 26h27l10 10H19z"
                />
                <circle cx="23" cy="43" r="7" />
                <circle cx="59" cy="43" r="7" />
              </template>
              <template v-else-if="service.icon === 'paint'">
                <path
                  d="m8 34 32-20 32 20-32 20zM8 42l32 20 32-20M8 26l32-20 32 20"
                />
                <path d="m29 30 11 7 13-8" />
              </template>
              <template v-else-if="service.icon === 'ceramic'">
                <path
                  d="M40 5 65 16v20L40 59 15 36V16zM40 14l17 8v11L40 49 23 33V22zM31 30l7 7 13-15"
                />
              </template>
              <template v-else>
                <path
                  d="M24 6h20l-3 28 20 8v13H21V40zM30 12h8l-3 26 20 9M15 58h52M23 41h17"
                />
              </template>
            </g>
          </svg>
        </div>
        <div class="service-photo">
          <ResponsivePhoto
            :photo="photos[service.icon]"
            sizes="(max-width: 599px) calc(100vw - 48px), (max-width: 899px) 43vw, (max-width: 1754px) 21vw, 340px"
          />
        </div>
        <h3>{{ service.name }}</h3>
        <p>{{ service.text }}</p>
        <a
          class="service-link"
          href="#kontakt"
          :aria-label="`${t(&quot;Poptat:&quot;)} ${service.name}`"
          >{{ t("Probrat možnosti") }} <span aria-hidden="true"><ArrowIcon /></span></a
        >
      </article>
    </div>
  </section>
</template>
