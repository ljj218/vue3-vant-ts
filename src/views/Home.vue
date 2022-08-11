<template>
	
  <van-rate v-model="value" />
</template>

<script lang="ts" setup>
	import { getCurrentInstance, ref} from 'vue'
  let value =ref(3)
	const { proxy } = getCurrentInstance()
	proxy.$toast.loading({
  message: '加载中...',
  forbidClick: true,
});
</script>

<style lang="less" scoped>
	
</style>
