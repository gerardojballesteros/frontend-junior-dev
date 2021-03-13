<template>
    <!-- Header -->
      <header>
        <nav class="bg-nav">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0 text-white text-lg font-semibold">
                  <router-link to="/home"><h1>LOGO</h1></router-link>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/home" class=" text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                    <router-link to="/users" class=" text-white px-3 py-2 rounded-md text-sm font-medium">Users</router-link>
                    <router-link to="/reports" class=" text-white px-3 py-2 rounded-md text-sm font-medium">Reports</router-link>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                    <div class="dark-mode">
                        <div class="bg-toggle">
                            <div @click="modeToggle" :class="darkDark" class="rounde-click"></div>
                        </div>
                    </div>
                  <!-- Profile dropdown -->
                  <div class="ml-3 relative" >
                    <div>
                      <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true"
                      @click="show = !show">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 rounded-full border-white-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                      </button>
                    </div>

                    <div class="panel origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" 
                    v-if="show" >

                      <div style="display: flex;">
                           <svg style="position: relative; top: -23px; left: 7px; margin: 0 10px; width: 25px;" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="#708097">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                      <a href="#" class="block px-4 py-1 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">My Profile <br>
                        <p class="block py-1 text-sm text-gray-400 hover:bg-gray-100" style="position: relative; top: -3px;" role="menuitem">Change setting of yor <br> account</p>
                      </a>
                      </div>
                      <hr>
                      <div style="display: flex; margin-left: 18px; padding-top: 10px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#E73C38">
                            <path  fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        <a href="#" class="block text-lg text-gray-700 hover:bg-gray-100" style="color: #E73C38; position: relative; top: -4px; margin-left: 22px;" role="menuitem">
                            Logout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden" >
                <!-- Mobile menu button -->
                <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" @click="show = !show" >
                  <span class="sr-only">Open main menu</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="md:hidden" id="mobile-menu" v-if="show" >
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3" v-if="show" >
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Menu</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu</a>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700">
              <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                
              </div>
              <div class="mt-3 px-2 space-y-1">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">My Profile</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
</template>

<script>
//Imports
import 'alpinejs';
export default {
    name: 'Header',
    data(){
        return {
            show: false,
            darkMode: false
        }
    },
    methods: {
        dark() {
            document.querySelector('body').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },

        light() {
            document.querySelector('body').classList.remove('dark-mode')
            this.darkMode = false
            this.$emit('light')
        },

        modeToggle() {
            if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
    },
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
    transition: 0.4s;
    background: #F7FAFC;
}

.bg-nav{
  background: #1E1ADD;
  border-radius: 5px;
}

.bg-toggle{
    width: 45px;
    height: 23px;
    background: white;
    border-radius: 100px;  
}
.rounde-click{
    position: relative;
    width: 21px;
    height: 21px;
    background: #808080;
    border-radius: 100px;
    cursor: pointer;
    left: 1px;
    top: 1px;
    transition: 0.4s;
}

body.dark-mode{
    background: black;
    transition: 0.4s;
}

body.dark-mode .bg-nav{
    background: rgb(89, 89, 89);
}

body.dark-mode .rounde-click{
    position: relative;
    left: 23px;
    background: #1E1BDD;
}

body.dark-mode .panel {
    background: rgb(152, 152, 152);
}

body.dark-mode .panel a{
    color: white;
}

body.dark-mode .panel a p{
    color: white;
}

</style>