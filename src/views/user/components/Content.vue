<template>
  <div class ='_warpper-login _flex _flex-column'>
    <div class='_login-body _flex-item _flex _flex-h-space-around'>
      <slot name='sign-form'></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'user-content'
  }
</script>
<style lang='scss'>
._warpper-login {
  ._login-body {
    background: linear-gradient(to right, #3399ff, #2AABFC);
  }
}
</style>
