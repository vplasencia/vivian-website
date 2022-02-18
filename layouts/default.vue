<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Mono', monospace;
  @apply text-gray-700;
}

img {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

::-webkit-scrollbar {
  @apply bg-gray-200 w-3;
}

::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  @apply rounded-md border-solid border-gray-200 bg-gray-500;
}
</style>