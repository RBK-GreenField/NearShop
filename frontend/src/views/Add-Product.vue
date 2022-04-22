<template>
  <div class="home">
  zid produit fisa3
  <UploadA />
  <AddComment/>
  </div>
</template>
<script>
import UploadA from '@/views/UploadPic.vue'
import AddComment from './AddComment'
export default {
  name: 'Add-Product',
  components: {
    UploadA,
    AddComment
  }
}
</script>