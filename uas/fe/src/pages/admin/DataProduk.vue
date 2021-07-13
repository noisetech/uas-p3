<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue"></div>
          </div>
          <div class="col">
             <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Data Produk </div>
              <div>Data Produk Anda</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
       <q-table
      :rows="data"
      flat
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namaProduk" :props="props">
            {{ props.row.namaProduk }}
          </q-td>
          <q-td key="harga" :props="props">
              Rp. {{ props.row.harga }},-
          </q-td>
          <q-td key="ukuran" :props="props">
              {{ props.row.ukuran }}
          </q-td>
          <q-td key="jenis" :props="props">
             {{ props.row.jenis }}
          </q-td>
          <q-td key="deskripsi" :props="props">
              <div class="ellipsis" style="max-width: 200px">
                {{ props.row.deskripsi }}
              </div>
          </q-td>
          <q-td key="gambar" :props="props">
              <q-img
                :src="`${$baseImageURL}/${props.row.image}`"
                spinner-color="white"
              />
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row q-gutter-md">
              <q-btn :to="{ name: 'formEditDVD', params: { id: props.row._id}}" label="Edit" icon="edit" color="warning" unelevated/>
              <q-btn  @click="deleteMovie(props.row._id)" label="Hapus" icon="delete" color="negative" unelevated/>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'namaProduk', align: 'left', label: 'Nama Produk', field: 'namaProduk', sortable: true },
        { name: 'harga', align: 'left', label: 'Harga', field: 'harga', sortable: true },
        { name: 'ukuran', align: 'left', label: 'Ukuran', field: 'ukuran', sortable: true },
        { name: 'jenis', align: 'left', label: 'Jenis', field: 'jenis', sortable: true },
        { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi', sortable: true },
        { name: 'gambar', align: 'left', label: 'Gambar', field: 'gambar' },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('produk/getall')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.showNotif(res.data.pesan, 'negative')
          }
        })
    },
    deleteMovie (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`produk/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
      })
    }
  }
}
</script>
<style scoped>
.left {
  width: 3px;
  height: 100%;
  background-color: aqua;
}
</style>
