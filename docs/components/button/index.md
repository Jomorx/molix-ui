<ml-button @click="handleClick" type="primary" >Primary</ml-button>

<ml-button @click="handleClick" type="danger" fall round>Primary</ml-button>
<ml-button @click="handleClick" type="info" fall>Primary</ml-button>
<ml-button @click="handleClick" type="warning" fall round disabled >Primary</ml-button>
<ml-button @click="handleClick" type="success" round>Primary</ml-button>
<ml-button @click="handleClick" type="text" round>Primary</ml-button>

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
