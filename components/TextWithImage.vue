<template>
    <div>
        <h4>Text: Text With Image</h4>
        <label>Text Paragraphs</label>
        <textarea v-model="paragraph" placeholder="Enter your text paragraph here" rows="5"></textarea>
        
        <label>Image</label>
        <DragBrowseImage v-model:imageSelected="image"/><br>
    </div>
</template>

<script setup>
    //For initialising and displaying paragrahps and image string from database
    const props = defineProps({
        initialParagraph: String,
        initialImageString: String
    }); 

    const paragraph = ref(props.initialParagraph);
    const image = ref(props.initialImageString);

    const emit = defineEmits(['update:textWithImage']);

    watch([image, paragraph], () => {
        emit('update:textWithImage', { paragraph: paragraph.value, image: image.value });
    });
</script>

<style scoped>
    h4 {
        margin-bottom: 10px;
    }

    label::after {
        content: " *";
        color: red;
    }

    input, textarea {
        width: 100%;
        margin: 10px 0;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: #edeef0;
        font-size: 16px;
    }

    input, textarea {
        padding: 12px 8px;
        border: none;
    }

    textarea {
        resize: vertical;
        line-height: 1.5;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>