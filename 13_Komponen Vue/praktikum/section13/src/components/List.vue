<template>
    <div>
        <ol>
            <li v-for="(todo, index) in todos" :key="index">
                <div>
                    <span>{{ todo }}</span>
                    <button @click="deleteList(index)">Delete</button>
                    <button @click="editList(index)">Edit</button>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>

export default{
    props: {
        todos: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        deleteList(index) {
            this.$emit('deleteList', index)
        },
    }
}
</script>

<style>
button{
    float: right;
}
</style>
