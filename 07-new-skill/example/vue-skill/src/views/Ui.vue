<script>
export default {
  setup() {
    return {};
  },
};
</script>
<template>
  <div id="deep">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<style scoped>
#deep > button ::v-deep span {
  color: red;
}
</style>
