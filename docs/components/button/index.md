<ml-button @click="handleClick" type="primary" round>Primary</ml-button>
<ml-button @click="handleClick" type="danger" round>Primary</ml-button>
<ml-button @click="handleClick" type="info" round>Primary</ml-button>
<ml-button @click="handleClick" type="warning" round>Primary</ml-button>
<ml-button @click="handleClick" type="success" round>Primary</ml-button>


<script setup>
const handleClick = (e)=>{
    console.log(e)
}

</script>
