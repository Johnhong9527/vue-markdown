<template>
    <div>
        111
        <Markdown
            v-model="val"
            @on-ready="onReady"
            @on-copy="onCopy"
            @on-save="onSave"
            isUseUpload
            :useUploadFn="updateFile"
            :toolbars="{ uploadImage: true }"
            :height="500"
        />
    </div>
</template>

<script>
// import Markdown from './dist/simple';
// import Markdown from 'vue-meditor';
    import Markdown from './src/pro';
    // import Markdown from './src/simple';
    import axios from 'axios';

    export default {
        components: {
            Markdown,
        },
        data: function () {
            return {
                val: '',
            };
        },
        methods: {
            onReady(data) {
                console.log(data);
            },
            onCopy(text) {
                console.log(text);
            },
            onUpladImage(file) {
                console.log(file);
            },
            onSave(data) {
                console.log(data);
            },
            updateFile(file) {
                const param = new FormData(); // 创建form对象
                param.append('file', file); // 通过append向form对象添加数据
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: false,
                }; // 添加请求头
                return new Promise((resolve, reject) => {
                    axios
                        .post(
                            'http://文件上传地址',
                            param,
                            config
                        )
                        .then((response) => {
                            if (response.status === 200) {
                                return resolve( '文件下载路径' );
                            }
                            reject(response);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });
            },
        },
    };
</script>

<style lang="less"></style>
