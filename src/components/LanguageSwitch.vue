<script setup>
import { t, getLocale, languagePath, sectionHash } from '../i18n.js';
function navigate(event, language) {
  event.currentTarget.href = languagePath(language) + sectionHash();
}
</script>
<template>
  <div class="language-switch" role="group" :aria-label="t(&quot;Jazyk stránky&quot;)">
    <a v-for="code in ['cs', 'en']" :key="code" :href="languagePath(code)"
      :lang="code" :hreflang="code === 'cs' ? 'cs-CZ' : 'en'"
      :aria-current="getLocale() === code ? 'page' : undefined"
      :aria-label="code === 'cs' ? t(&quot;Česká verze&quot;) : t(&quot;Anglická verze&quot;)"
      @click="navigate($event, code)">{{ code === 'cs' ? 'CZ' : 'EN' }}</a>
    <span class="language-divider" aria-hidden="true">/</span>
  </div>
</template>
