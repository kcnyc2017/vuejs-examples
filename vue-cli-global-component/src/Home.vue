<template>
<div>
    <p>Name: {{first}} {{last}}</p>
    <hr>
    <button v-on:click="changeMe">Change name</button>
</div>

</template>

<script>
    export default {
        data: function() {
            return {
                first: 'George',
                last:   'Lee'
            }
        },
        methods: {
                changeMe() {
                    this.first = 'Joe',
                    this.last = 'Doe'
                }

        
        }

    }

</script>