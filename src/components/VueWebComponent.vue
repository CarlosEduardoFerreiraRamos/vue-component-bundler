<style scoped>
    button.count-button {
        background-color: #43B885;
    }
</style>

<template>
    <div>
        <h1>My Vue Web Component</h1>
        <div>{{ msg }} {{ count }}</div>
        <button class="count-button mdc-button mdc-button--raised" v-on:click="onIncresceCount()"> Count </button>
    </div>
</template>

<script>
export default {
    props: [
        'msg'
        ],
    data: function(){
        return {'count': 0}
    },
    methods: {
        onIncresceCount() {
            this.count ++;
            this.$emit('count', this.count);
        }
    }
    
}
</script>
