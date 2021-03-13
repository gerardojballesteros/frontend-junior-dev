<template>
    <div>
        <div class="link">
            <router-link id="link-to" to="/home">Home </router-link>
            <p class="separator">/</p>
            <router-link id="link-to" to="/reports" class="active">Reports &amp; Insights</router-link>
        </div>
        <div class="reports">
            <myCharts />
        </div>
    </div>
</template>
<script>
// Imports
import myCharts from '../components/charts/Charts';

export default {
    name: 'Reports',
    components: {myCharts},
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.reports{
    width: 100%;
    max-width: 700px;
    height: auto;
    margin: 0 auto;
}

</style>