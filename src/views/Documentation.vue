<template>
    <div id="app">
        {{DOC}}

        <vue-tabs>
            <v-tab title="First tab"
                   v-for="post in posts"
                   v-bind:key="post.id"
                   v-bind:title="post.title"
            >
                <div class="inlineInfoTabs">
                    <div >1</div>
                    <div>First tab content</div>
                </div>


            </v-tab>

            <!--<v-tab title="Second tab">
                Second tab content
            </v-tab>-->

        </vue-tabs>

    </div>
</template>

<script>
    import {VueTabs, VTab} from 'vue-nav-tabs';
    import 'vue-nav-tabs/themes/vue-tabs.css'

    export default {
        name: 'documentation',
        data: () => {
            return{
                DOC: 'c\'est la doc',
                posts: [
                    { id: 1, title: 'Reac' },
                    { id: 2, title: 'Vue' }
                ]
            }
        },
        components: {
            VueTabs,
            VTab
        }
    }

</script>

<style scoped>
.inlineInfoTabs{
    display: flex;
}
.inlineInfoTabs div{
    margin-right: 10px;
}
</style>
