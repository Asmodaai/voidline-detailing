<script setup>
// Original vector artwork. No photography or external image requests.
defineProps({ id: { type: String, default: "hero-wheel" } });
</script>

<template>
  <svg class="wheel-svg" viewBox="0 0 800 800" fill="none" aria-hidden="true">
    <defs>
      <radialGradient :id="`${id}-tire`" cx=".36" cy=".25" r=".8">
        <stop stop-color="#343634" />
        <stop offset=".45" stop-color="#141614" />
        <stop offset=".83" stop-color="#060706" />
        <stop offset="1" stop-color="#252725" />
      </radialGradient>
      <linearGradient
        :id="`${id}-metal`"
        x1="90"
        y1="90"
        x2="665"
        y2="710"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#f4f4ed" />
        <stop offset=".18" stop-color="#777c76" />
        <stop offset=".32" stop-color="#292d29" />
        <stop offset=".5" stop-color="#c7cbc3" />
        <stop offset=".67" stop-color="#3c423c" />
        <stop offset=".87" stop-color="#111411" />
        <stop offset="1" stop-color="#92978e" />
      </linearGradient>
      <linearGradient
        :id="`${id}-spoke`"
        x1="345"
        y1="130"
        x2="419"
        y2="393"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#c4c8c0" />
        <stop offset=".28" stop-color="#666d64" />
        <stop offset=".48" stop-color="#262c25" />
        <stop offset=".55" stop-color="#8a9084" />
        <stop offset="1" stop-color="#20271f" />
      </linearGradient>
      <radialGradient :id="`${id}-rotor`">
        <stop stop-color="#555950" />
        <stop offset=".8" stop-color="#383d35" />
        <stop offset="1" stop-color="#171c16" />
      </radialGradient>
      <radialGradient :id="`${id}-hub`" cx=".3" cy=".2">
        <stop stop-color="#767d6e" />
        <stop offset="1" stop-color="#171d16" />
      </radialGradient>
    </defs>
    <circle
      cx="400"
      cy="400"
      r="368"
      :fill="`url(#${id}-tire)`"
      stroke="#3c403a"
    />
    <circle
      cx="400"
      cy="400"
      r="348"
      stroke="#454a42"
      stroke-opacity=".3"
      stroke-width="20"
      stroke-dasharray="1 8"
    />
    <circle cx="400" cy="400" r="316" stroke="#050705" stroke-width="20" />
    <circle
      cx="400"
      cy="400"
      r="304"
      :stroke="`url(#${id}-metal)`"
      stroke-width="15"
    />
    <circle
      cx="400"
      cy="400"
      r="291"
      fill="#080b08"
      stroke="#575e50"
      stroke-width="3"
    />
    <circle
      cx="400"
      cy="400"
      r="248"
      :fill="`url(#${id}-rotor)`"
      stroke="#555d4d"
      stroke-width="2"
    />
    <circle
      v-for="r in [193, 211, 229]"
      :key="r"
      cx="400"
      cy="400"
      :r="r"
      stroke="#0b100a"
      stroke-width="6"
      stroke-dasharray="3 27"
      :transform="`rotate(${r} 400 400)`"
    />
    <path
      d="M586 256q56 39 57 132l-56 14-42-106z"
      fill="#777e6d"
      stroke="#a0a796"
    />
    <path d="M590 294l25 77" stroke="#2e3629" stroke-width="4" />
    <g v-for="n in 10" :key="n" :transform="`rotate(${n * 36 + 12} 400 400)`">
      <path
        d="M372 393 337 134q19-6 37-8l47 263-19 39z"
        :fill="`url(#${id}-spoke)`"
        stroke="#8a9280"
        stroke-opacity=".5"
      />
      <path
        d="m337 134 35 259 15 5-34-261z"
        fill="#d0d5c7"
        fill-opacity=".16"
      />
      <path d="m374 126 47 263" stroke="#d8dece" stroke-opacity=".4" />
    </g>
    <circle
      cx="400"
      cy="400"
      r="83"
      :fill="`url(#${id}-metal)`"
      stroke="#9aa28e"
    />
    <circle
      cx="400"
      cy="400"
      r="62"
      :fill="`url(#${id}-hub)`"
      stroke="#141c10"
      stroke-width="6"
    />
    <g v-for="n in 5" :key="n" :transform="`rotate(${n * 72} 400 400)`">
      <circle cx="400" cy="330" r="8" fill="#070a05" stroke="#8a937f" />
      <path d="m397 327 6 6m0-6-6 6" stroke="#4e5843" />
    </g>
    <path d="m373 381 26 43h9l23-43h-13l-15 28-16-28z" fill="#bac2ae" />
    <circle cx="400" cy="400" r="300" stroke="#ecefe5" stroke-opacity=".24" />
    <path
      d="M124 296A293 293 0 0 1 548 144"
      stroke="#fff"
      stroke-opacity=".4"
      stroke-width="2"
    />
  </svg>
</template>
