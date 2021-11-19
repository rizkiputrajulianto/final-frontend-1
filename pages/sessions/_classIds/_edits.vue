<template>
  <div>
    <h1>Edit Session</h1>
    <crud-jadwal :kode="data.code" :kelasId="data.idKelas" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        code: this.$route.params.edits,
        idKelas: this.$route.params.classIds,
      },
    };
  },
};
</script>