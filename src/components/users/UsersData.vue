<template>
    <div>
        <div class="tabla py-8 px-5 bg-white shadow-lg rounded-md">
              <div class="title-tabla">
                <p class="title-users text-gray-600 text-3xl font-extralight pb-6">Employees</p>
              </div>
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden pt-5 border border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200 pt-5 tabla-content">
                        <thead>
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500  tracking-normal">
                              Employee
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500  tracking-normal">
                              Last login
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500  tracking-normal">
                              Department
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500  tracking-normal">
                              Status
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white tbody divide-y divide-gray-200">
                          <tr v-for="(item, index) in users.slice(0, 5) " :key="index">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img class="h-10 w-10 rounded-full" src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1615654551~hmac=2e5242bad3bb026b87f6fb4dacdf3cb1" alt="">
                                  <!--
                                    Images no found
                                  <img class="h-10 w-10 rounded-full" v-bind:src="item.profile_img" alt="">
                                  -->
                                </div>
                                <div class="ml-4">
                                  <div class="txt-white text-sm font-medium text-gray-900">
                                    {{ item.first_name }} {{ item.last_name }}
                                  </div>
                                  <div class="txt-white text-xs font-light text-gray-400">
                                    {{ item.email }}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="txt-white text-sm text-gray-900">
                                {{ moment(item.sessions[2]).format('LL') }}</div>
                              <div class="text-xs font-light text-gray-500">
                              {{ moment(item.sessions[2]).fromNow()}}
                              </div>
                            </td>
                            <td class="txt-white px-6 py-4 font-light whitespace-nowrap text-sm text-black">
                              {{ item.department }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <span id="active" v-if="item.status === true" class="px-2 inline-flex text-sm leading-5 font-semibold " style="color: #5DCF5C;">
                                Active
                              </span>
                              <span v-else-if="item.status === false" class="px-2 inline-flex text-sm leading-5 font-semibold text-red-800">
                                Inactive
                              </span>

                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" class="text-indigo-600 hover:text-indigo-900" style="color: #949A9F;">
                                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
// Others
let moment = require('moment');

export default {
    name: 'UsersData',
    data(){
        return{
            users: [],
            moment: moment,
        }
    },
    async mounted() {

        // Users
        const userResponse = await fetch('/api/users');
        const dataUsers = await userResponse.json();
        this.users = Object.values(dataUsers.users);
        this.users.sessions = dataUsers.users[0].sessions[2];

        //Images no found => Check url
       
    },

}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body.dark-mode .tabla,
body.dark-mode tbody{
    background: #3F3F3F;
}
body.dark-mode .txt-white,
body.dark-mode .title-users,
body.dark-mode th{
    color: white;
}
.tabla{
  overflow: hidden;
}
@media (max-width: 800px){
 
}
</style>