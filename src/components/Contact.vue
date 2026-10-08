<script setup>
import { onMounted } from "vue";
const interactive = ref(false);
onMounted(() => { interactive.value = true; });
import { t } from "../i18n.js";
import ArrowIcon from "./ArrowIcon.vue";
import { ref } from "vue";
const submitted = ref(false);
function submitDemo() {
  submitted.value = true;
}
</script>
<template>
  <section id="kontakt" class="contact section">
    <div class="container contact-grid">
      <div class="contact-copy" data-reveal>
        <p class="eyebrow">{{ t("07 / DALŠÍ KROK") }}</p>
        <h2>{{ t("Váš vůz.") }}<br />{{ t("V lepší") }}<br /><span>{{ t("formě.") }}</span></h2>
        <p>{{ t("Každý vůz má svůj charakter.") }}<br />{{ t("Péče by ho měla respektovat.") }}</p>
        <div class="contact-signature">
          <span aria-hidden="true"><ArrowIcon /></span
          ><span>{{ t("ZAČÍNÁ TO") }}<br />{{ t("JEDNÍM DETAILEM.") }}</span>
        </div>
      </div>
      <form :inert="!interactive"
        class="contact-form"
        @submit.prevent="submitDemo"
        @input="submitted = false"
        aria-describedby="demo-form-note"
        data-reveal
      >
        <div class="form-intro">
          <h3>{{ t("Pojďme probrat váš vůz.") }}</h3>
          <p id="demo-form-note"> {{ t("Ukázková poptávka. Formulář nic neodesílá ani neukládá.") }} </p>
        </div>
        <div class="form-row">
          <label for="name"
            >{{ t("Jméno") }} <span>*</span
            ><input
              id="name"
              name="name"
              autocomplete="name"
              pattern=".*\S.*"
              :title="t(&quot;Zadejte jméno, nikoli pouze mezery.&quot;)"
              required
              :placeholder="t(&quot;Vaše jméno&quot;)"
              maxlength="100" /></label
          ><label for="email"
            >{{ t("E-mail") }} <span>*</span
            ><input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :placeholder="t(&quot;vas@email.example&quot;)"
              maxlength="200"
          /></label>
        </div>
        <label for="car"
          >{{ t("Vůz") }}<input
            id="car"
            name="car"
            :placeholder="t(&quot;Značka a model&quot;)"
            maxlength="150" /></label
        ><label for="service"
          >{{ t("O jakou službu máte zájem") }} <span>*</span
          ><select id="service" name="service" required>
            <option value="">{{ t("Vyberte oblast péče") }}</option>
            <option>{{ t("Exteriérový detailing") }}</option>
            <option>{{ t("Korekce laku") }}</option>
            <option>{{ t("Keramická ochrana") }}</option>
            <option>{{ t("Interiérový detailing") }}</option>
            <option>{{ t("Balíček Essential") }}</option>
            <option>{{ t("Balíček Signature") }}</option>
            <option>{{ t("Balíček Full Detail") }}</option>
            <option>{{ t("Nechám si poradit") }}</option>
          </select></label
        ><label for="message"
          >{{ t("Zpráva") }}<textarea
            id="message"
            name="message"
            rows="3"
            :placeholder="t(&quot;Co by si váš vůz zasloužil?&quot;)"
            maxlength="3000"
          ></textarea>
        </label>
        <div class="form-bottom">
          <span>{{ t("* Povinná pole") }}</span
          ><button class="button button-light" type="submit"> {{ t("Vyzkoušet poptávku") }} <span aria-hidden="true"><ArrowIcon /></span>
          </button>
        </div>
        <div class="form-feedback" role="status" aria-atomic="true">
          <p v-if="submitted">
            <span aria-hidden="true"><ArrowIcon /></span> {{ t("Toto je ukázkový formulář v demo projektu. Žádná data nebyla odeslána.") }} </p>
        </div>
      </form>
    </div>
  </section>
</template>
