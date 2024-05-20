<template>
  <div class="drag-area" @dragover = "onDragOver" @dragleave="onDragLeave" @drop = "onDrop">
    <div v-if="previewImage" class="image-container">
        <span class="delete" @click="deleteImage" title="Delete image">&times;</span>
        <img :src="previewImage"/>
    </div>
    <div v-else-if="!isDragging">
        <span>Drag & drop image here or</span>
        <span class="browse" role="button" @click="selectFile">Browse</span>
    </div>
    <div v-else-if="isDragging">
        <span>Drop image here</span>
    </div>               
    <input type="file" class="file" name="file" ref="fileInput" @change="onFileSelect" accept=".png, .jpg, .jpeg"/>
  </div>
</template>

<script setup>
    const props = defineProps({
        imageSelected: String,
    });

    const emit = defineEmits(['update:imageSelected']);    
    const fileInput = ref(null);

    const previewImage = computed(() => props.imageSelected);

    //convert to base64 string b4 saving it into database
    const convertToBLOB = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };


    //open the file selection dialog
    const selectFile = () => {
        fileInput.value.click();
    }

    const onFileSelect = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            const imageUrl = await convertToBLOB(file);
            emit('update:imageSelected', imageUrl);
        } else {
            alert('Only image files are allowed.');
        }
    };

    //delete the  image and revoke the object URL
    const deleteImage = () => {
        if (previewImage.value) {
            emit('update:imageSelected', '');
        }
        if (fileInput.value) {
            fileInput.value.value = '';
        }
    };

    //For dragging purpose
    const isDragging = ref(false);

    const onDragOver = (event) => {
        event.preventDefault();
        isDragging.value = true;
    }

    const onDragLeave = (event) => {
        isDragging.value = false;
    }

    const onDrop = (event) => {
        event.preventDefault();
        isDragging.value = false;
        const file = event.dataTransfer.files[0];
        if (file.length > 1) {
            alert('Only one image is allowed. Please drag and drop only one image.');
            return;
        } 
        if(file.type.match('image.*')) {
            const imageUrl = URL.createObjectURL(file);
            emit('update:modelValue', file); 
        } else {
            alert('Only image files are allowed.');
        }
    }
</script>

<style>
    .drag-area {
        width: 100%;
        min-height: 100px;
        max-height: 100vh;
        margin-top: 10px;
        border: 1px dashed grey;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    .drag-area .browse {
        color: blue;
        margin-left: 5px;
        cursor: pointer;
        transition: 0.4s;
    }

    .drag-area .browse:hover {
        opacity: 0.6;
    }

    .drag-area .image-container img {
        max-height: 300px;
        max-height: 450px;
        margin: 0 auto;
    }

    .drag-area .image-container span {
        position: relative;
        top: -2px;
        right: 2rem;
        float: right;
        font-size: 30px;
        cursor: pointer;
    }

    .delete {
        z-index: 999; /*always on the top*/
        color: red;
    }

    .file {
        display: none;
    }
</style>