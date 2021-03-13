<template>
    <div>
        <div class="link">
            <router-link id="link-to" to="/home">Home </router-link>
            <p class="separator">/</p>
            <router-link id="link-to" to="/users" class="active">Users</router-link>
        </div>
        <div class="users">
            <UsersData />
        </div>
    </div>
</template>

<script>
//Imports
import UsersData from '../components/users/UsersData'

export default {
    name: 'Users',
    components: { UsersData }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;



</style>