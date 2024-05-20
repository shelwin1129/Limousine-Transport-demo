<template>
    <div class="collapse-section">
        <button class="button-collapse" @click.prevent='toggleCollapse'>
            {{ title }}
            <span class="material-symbols-outlined icon" :class="collapse ? 'rotate-90deg' : ''">expand_more</span>
        </button>
        <div class="collapsed-content" v-show="collapse">
            <slot name="collapseContent"></slot>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps({
        id: {
            type: Number, 
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        collapse: {
            type: Boolean,
            default: false,
        },
    })

    const emit = defineEmits(['toggle'])
    const toggleCollapse = () => {
        emit('toggle', props.id)
    };


</script>

<style>
    .collapse-section {
        border: solid 1px black; 
    }

    .button-collapse {
        width: 100%;
        padding: 14px 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3365BE;
        color: white;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        
    }

    .button-collapse .icon {
        color: white;
    }

    .rotate-90deg {
        transform: rotate(-180deg);
        transition: 0.3s ease-in-out;
    }

    .collapsed-content {
        padding: 18px;
        background-color: white;
    }
</style>