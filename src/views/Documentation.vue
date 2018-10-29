<template>
    <div class="container">
        <div class="info_doc">
            {{DOC}}
        </div>
        <vue-tabs>
            <v-tab title="First tab"
                   v-for="post in posts"
                   v-bind:key="post.id"
                   v-bind:title="post.title"
            >
                <div class="inlineInfoTabs">
                    <div class="column_number">1</div>
                    <div class="container_code">
                        <img class="size_img" src="/src/assets/images/exemple.png">
                    </div>
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
                DOC: 'Paragraphe introductif de la documentation',
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
    .container{
        width: 75%;
        margin: auto;
    }
    .inlineInfoTabs{
        display: flex;
        flex: 1;
        display: flex;
        /*padding: 18px;*/
        margin-top: -1px;
        border: 1px solid #ccc;
        border-radius: 0 6px 6px 6px;
        background-color: #fff;
        height: 100%;
        box-sizing: border-box;
    }
    .inlineInfoTabs div{
        display: flex;
        align-items: center;
    }
    .inlineInfoTabs .column_number{
        justify-content: flex-end;
    }
    .inlineInfoTabs .container_code{
        justify-content: flex-start;
    }
    .info_doc{
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        padding: 30px 0px ;
    }
    .column_number{
        width: 68px;
        height: auto;
        background-color: #c5c0c0;
        /*margin-right: 10px;*/
    }
    .container_code{
        width: 100%;
    }
    .size_img{
        width: 100%;
    }
</style>
