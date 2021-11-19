<template>
  <div>
    <h1>Add Session</h1>
    <crud-jadwal :kelasId="data.kodeKelas" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        kodeKelas: this.$route.params.classIds,
      },
    };
  },
};
</script>