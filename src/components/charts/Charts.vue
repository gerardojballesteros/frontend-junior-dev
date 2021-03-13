<template>
  <div class="charts-view rounded-lg shadow-lg ">
    <div class="wrap-chart">
      <div class="title-charts">
        <h1>Why do you create a startup?</h1>
        <p>Trends</p>
      </div>
      <div class="chart">
        <pie-chart :data="data"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data() {
    return {
      data: [
        {
          name: 'Primero',
          value: null,
        },
        {
          name: 'Segundo',
          value: null,
        },
        {
          name: 'Tercero',
          value: null,
        },
      ],
    }
  },
  async mounted () {

            // Api consumption
            const response = await fetch('/api/reports');
            const datos = await response.json();
            
            // Objects
            this.data[0].value = [datos.reports[0].total]
            this.data[1].value = [datos.reports[1].total]
            this.data[2].value = [datos.reports[2].total]
            this.data[0].name = [datos.reports[0].category]
            this.data[1].name = [datos.reports[1].category]
            this.data[2].name = [datos.reports[2].category]
        
    }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.charts-view{
  width: 100%;
  height: auto;
  background-color: white;
  padding: 20px;
}

.title-charts h1{
  color: #666F80;
  font-size: 25px;
}
.title-charts p{
  color: #ACB8C9;
  font-size: 21px;
}

.chart {
  width: 100%;
  height: 700px;
  max-height: 447px;
}

body.dark-mode .charts-view{
  background: #3f3f3f;
}

body.dark-mode .title-charts h1,
body.dark-mode .title-charts p{
  color: white;
}

</style>
