<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToastToaster />
  </div>
</template>

<script lang="ts" setup>
  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
  });

  const title = "Users";
  const description =
    "Throughout the tutorial, we focus on a crucial aspect—protecting specific endpoints within the server folder of a Nuxt 3 application. Uncover the ins and outs of middleware implementation for enhanced security. Whether you're a seasoned developer or just starting with Nuxt, this tutorial provides valuable insights into building a robust and secure Nuxt 3 application.";
  const image = "/social.png";
  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: "https://protect-server-api-nuxt3.netlify.app/",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterCard: "summary_large_image",
  });
</script>
