<script>
export default {
  methods: {
    confirmButton(message) {
      return this.$swal({
        icon: "question",
        title: "Are You Sure?",
        text: message,
        showCancelButton: true,
      });
    },
    async createData(url, payload, isNotif = true) {
      try {
        const create = await this.$axios.$post(url, payload);
        if (isNotif) {
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Data has been created",
          });
        }
        return create;
      } catch (error) {
        return this.$swal({
          icon: "warning",
          title: "Error",
          text: error.toString(),
        });
      }
    },
    async getData(url) {
      try {
        const data = await this.$axios.$get(url);
        return data;
      } catch (error) {
        return this.$swal({
          icon: "warning",
          title: "Error",
          text: error.toString(),
        });
      }
    },
    async putData(url, payload, isNotif = true) {
      try {
        const update = await this.$axios.$put(url, payload);
        if (isNotif) {
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Data has been updated",
          });
        }
        return update;
      } catch (error) {
        return this.$swal({
          icon: "warning",
          title: "Error",
          text: error.toString(),
        });
      }
    },
    async deleteData(url) {
      try {
        const deleteData = await this.$axios.$delete(url);
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Data has been deleted",
        });
        return deleteData;
      } catch (error) {
        return this.$swal({
          icon: "warning",
          title: "Error",
          text: error.toString(),
        });
      }
    },
  },
};
</script>