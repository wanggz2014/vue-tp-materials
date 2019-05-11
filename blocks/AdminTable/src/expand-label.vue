<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row"  v-for="(items,index) in details" v-bind:key="items" :class="{'active': index==0}">
            <Col span="8" v-for="(value, name) in items" v-bind:key="value" >
                <span class="expand-key">{{name}}：</span>
                <span class="expand-value">{{value}}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            details: Object
        },
        created(){
            console.log(this.details)
        }
    };
</script>