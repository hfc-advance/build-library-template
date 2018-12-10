<template>
  <div>
    <div v-for="(menu,index) in docConfig" :key="`menu${index}`">
      <router-link :to="`/doc/${menu.bridgeName}`">{{menu.bridgeName}}</router-link>
    </div>
  </div>
</template>

<script>
import { docs as docConfig } from '../../config/bridge.doc.js'
export default {
  name: 'Menu',
  data () {
    return {
      docConfig
    }
  }
}
</script>
