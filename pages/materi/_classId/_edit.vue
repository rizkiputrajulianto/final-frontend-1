<template>
  <div>
    <h1>Edit Materi</h1>
    <hr />
    <crud-materi :idClass="dataCRUD.class" :idMateri="dataCRUD.materi" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataCRUD: {
        class: this.$route.params.classId,
        materi: this.$route.params.edit,
      },
    };
  },
};
</script>