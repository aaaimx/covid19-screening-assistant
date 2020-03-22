<template>
  <div>
    <welcome />
  </div>
</template>

<script>
export default {
  components: {
    Welcome: () => import('@/components/Welcome')
  }
}
</script>
