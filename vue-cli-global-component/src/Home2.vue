<template>
<div>
    <p>Name: {{first}} {{last}}</p>
</div>

</template>

<script>
    export default {
        data: function() {
            return {
                first: 'Jane',
                last:   'Doe'
            }
        }
    }

</script>