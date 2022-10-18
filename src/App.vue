<template>
  <div class="greetings">
    <s-image
      src="../src/assets/BrandSeedz_2.svg"
      fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"
    />

    <p>Welcome to our projet.</p>
      <p class="flex-center">
        <s-button link external to="https://seedz-ag.github.io/vue-sdz/getting-started">Click here </s-button>  to access vue-sdz documentation  
      </p>
  </div>
</template>

<script>
import { SImage, SButton } from "vue-sdz"

export default {
  components: { SImage, SButton },
}
</script>

<style lang="scss">
.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  height: 100%;
  width: 100%;
  gap: 20px;
}

.greetings > .s-image {
  width: 300px;
 }

.flex-center {
  display: flex;  
  justify-content: center;
  gap: 4px;
}
</style>
