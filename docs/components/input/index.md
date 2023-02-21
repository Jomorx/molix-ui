<ml-input v-model="input" placeholder="Please input" />
<span>当前值:{{input}}</span>
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
