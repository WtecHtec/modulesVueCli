<template>
<div>
   移动端
 </div>
</template>
<script>
import { goodlists } from '@/api/goods'
import { selectAlllist } from '@/api/upload'
export default {
  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      uploadaction: 'http://localhost:8200/file/fileupload',
      loading: true,
      uploadlist: [],
      uploaddata: {
        id: '',
        createTime: '',
        imageurl: ''
      }
    }
  },
  created () {
    this.feachdata()
  },
  methods: {
    goodslist (data) {
      console.log('点击')
      goodlists().then(response => {
        console.log(response.data.responseData)
      })
    },
    handleRemove (file, fileList) {
      alert(file.url)
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      alert(file.url)
      this.dialogVisible = true
    },
    uploadSuccess (response, file, fileList) {
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    feachdata () {
      this.$router.addRoutes({})
      selectAlllist().then(response => {
        if (response.data.statusCode === 200) {
          this.uploadlist = response.data.responseData
          this.loading = false
        }
        this.loading = false
      })
    }
  }
}
</script>
