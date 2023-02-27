<script setup>
    import { MlMessage } from "@molix/components/message"
    const handleDefaultClick = ()=>{
        MlMessage({
            message: 'this is a message.',
            type: 'default',
        })
    }
    const handleSuccessClick = ()=>{
        MlMessage({
            message: 'this is a message.',
            type: 'success',
        })
    }
    const handlePrimaryClick = ()=>{
        MlMessage({
            message: 'this is a message.',
            type: 'primary',
        })
    }
    const handleInfoClick = ()=>{
        const close = MlMessage.info({
            message: 'this is a message.',
            showClose:true
        })
    }
    const closeAll = ()=>{
        MlMessage.closeAll("success")
    }
</script>

<ml-button @click="handleDefaultClick" type="default" fall round>default</ml-button>
<ml-button @click="handleSuccessClick" type="success" round>success</ml-button>
<ml-button @click="handlePrimaryClick" type="primary" round>primary</ml-button>
<ml-button @click="handleInfoClick" type="info" fall round>info</ml-button>
<ml-button @click="closeAll" type="info" fall round>closeAll</ml-button>

