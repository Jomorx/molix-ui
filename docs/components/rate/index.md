<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(0);
const rate2 = ref(0);

</script>

# Rate 评分

用于评分

## 基础用法

通过 `max` 控制星星数量
<ml-rate :max='10' v-model='rate'></ml-rate>
{{rate}}


## 允许半星

通过 `allow-half` 控制是否出现半星
<ml-rate :max='10' v-model='rate2' allow-half></ml-rate>
{{rate2}}