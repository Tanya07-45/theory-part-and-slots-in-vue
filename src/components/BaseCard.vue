<template>
   <div>
       <!-- here content should be anything we want -->
        <header v-if="$slots.header">
           <!-- with $slot we can check that whether we  receive the data for a specific slot or if not
          we could use this info to not render a certain element -->
            <slot name="header">
                <!-- <h2> The default</h2> -->
            </slot>
        </header>
        <slot></slot>
<!-- {{ content}} -->
    </div> 
</template>

<script>

export default {
    mounted(){
        console.log(this.$slots.header);//everytime we use slot mount is called and $slot is builtin property provided by vue and it holds information about the slot data
    }
}
</script>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
