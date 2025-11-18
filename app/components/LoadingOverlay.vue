<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="loader"></div>
  </div>
</template>

<style>
    .loader {
    width: 40px;
    height: 40px;
    border: 4px solid #fff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    }
    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
    }
</style>
