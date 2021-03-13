<template>
    <div>
        <div class="link">
            <router-link id="link-to" to="/home" class="active">Home </router-link>
        </div>
        <div class="content-all">
            <div class="wrap-content">
                <div class="one">
                    <Charts />
                </div>
                <div class="two">
                    <UserData />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//Imports
import Charts from '../components/charts/Charts'
import UserData from '../components/users/UsersData'

export default {
    name: 'Home',
    components: {
        Charts,
        UserData
    }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.content-all{
    width: 100%;
    height: auto;
}
.wrap-content{
    display: grid;
    grid-template-columns: 30% 70%;
}
.one{
    margin-right: 20px;
}
.two{
    margin-left: 20px;
}

@media (max-width: 1200px){
    .wrap-content{
        display: grid;
        grid-template-columns: 100%;
    }
    .one{
        margin-right: 0;
        margin-bottom: 20px;
    }
    .two{
        margin-left: 0;
    }
}

</style>