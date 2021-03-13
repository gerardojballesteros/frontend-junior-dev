<template>
  <div id="app" >
    <div class="wrap-app">
      <Header />
       <router-view></router-view>
    </div>
  </div>
</template>
<script>
// Imports
import Header from './components/header/Header'

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
}

#app{
  padding: 20px;
}

.wrap-app{
  padding-top: 30px;
  max-width: 1500px;
  margin: auto;
}

.active{
  text-decoration: underline;
}

.link{
    display: flex;
    padding: 20px;
    margin: 5px 0;
}

body.dark-mode #link-to,
body.dark-mode .link p{
  color: white;
}

#link-to,
.link p{
  color: #7C8A9F;
  font-size: 20px;
}

.separator{
   margin: auto 10px;
}

</style>
