<template>
  <welcome />
</template>

<script>
export default {
  components: {
    Welcome: () => import("@/components/Welcome")
  }
};
</script>
