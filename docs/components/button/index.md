<ml-button @click="handleClick" type="primary" >Primary</ml-button>

<ml-button @click="handleClick" type="danger" >Primary</ml-button>
<ml-button @click="handleClick" type="info" >Primary</ml-button>
<ml-button @click="handleClick" type="warning" disabled >Primary</ml-button>
<ml-button @click="handleClick" type="success" round>Primary</ml-button>

<script setup>
const handleClick = (e)=>{
    console.log(e)
}

</script>
<style>
button{
    margin-left:20px;
}
</style>
