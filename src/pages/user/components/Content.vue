<template lang='pug'>
  div._warpper-login._flex._flex-column
    span._animate-pallet(v-for='item of 99')
    div._login-body._flex-item._flex._flex-h-space-around
     slot(name='sign-form')
</template>
<script type="text/javascript">
  export default {
    name: 'user-content'
  }
</script>
<style lang='scss'>
._warpper-login {
  position: relative;
  ._animate-pallet {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 2px;
    background-color: #fff;
    display: block;
    animation: run 2s infinite ease alternate;
    &:nth-of-type(2) {
       top: 50px;
    }
    &:nth-of-type(3) {
       top: 90px;
       left: 20px;
    }
    &:nth-of-type(4) {
       top: 120px;
       left: 500px;
    }
    &:nth-of-type(5) {
       top: 220px;
       left: 20px;
    }
    &:nth-of-type(6) {
       top: 440px;
       left: 220px;
    }
  }
  ._login-body {
    background: linear-gradient(to right, #3399ff, #2AABFC);
  }
}

@keyframes run {
  30% {
    top: 50*random()px;
    left: 20px;
  }
  50% {
    top: 120*random()px;
    left: 260px;
  }
  70% {
    top: 80*random()px;
    left: 360px;
  }
  100% {
    top: 60px;
    left: 660px;
  }
}
</style>
