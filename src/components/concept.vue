<template>
    <section ref='concept' id='concept' class="bg_concept">
        <div class="content_concept">
            <div class="description_concept_mobile">
                EXEMPLE est une application qui propose de vous
                faire découvrir de nouveaux endroits, de diversifier
                vos sorties et de les partager.<br>
                Qui et où que vous soyez, seul ou accompagné,
                EXEMPLE et sa communauté vous offrent des
                balades plus différentes les une que les autres
                pour répondre à vos envies.<br>
            </div>
            <div class="description_concept_desktop">
                EXEMPLE est une application qui propose de vous
                faire découvrir de nouveaux endroits, de diversifier
                vos sorties et de les partager.<br>
                Qui et où que vous soyez, seul ou accompagné,
                EXEMPLE et sa communauté vous offrent des
                balades plus différentes les une que les autres
                pour répondre à vos envies.<br>
                EXEMPLE met à votre disposition autant de choix
                de promenade qu’il en existe.<br>
                Rejoignez la communauté et interagissez avec elle,
                partagez vos propres promenades, enregistrez
                celle d’autres membres, découvrez ce qui vous
                entoure, participez à des évènements, profitez
                d’avantages sur du matériel et bien plus encore !
            </div>
            <div class="flex_display_iphone">
                <img class="size_gif" src="../assets/images/iphone.png">
            </div>
        </div>
        <div class="row_img_bottom_concept">
            <img class="first_picture size_same_house_desktop" src="../assets/images/Maison_1_1_.svg">
            <img class="img_seconde" src="../assets/images/Mall_1_.svg">
            <img class="img_status" src="../assets/images/Statue_1_.svg">
            <img src="../assets/images/Maison_1_1_.svg">
            <img class="img_last" src="../assets/images/Maison_2_1_.svg">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'concept',
        data: function() {
            return{
                //concept: 'Ici c\'est le concept',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .bg_concept{
        background-color: #fcfcfc;
        color: #343434;
    }
    .content_concept{
        display: flex;
        flex-direction: column;
    }
    .description_concept_mobile{
        font-size: 16px;
        font-family: Helvetica Neue;
        padding: 35px 20px;
    }
    .description_concept_desktop{
        display: none;
    }
    .flex_display_iphone{
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
    }
    .row_img_bottom_concept{
        display: flex;
        justify-content: space-around;
        align-items: baseline;
    }
    .row_img_bottom_concept img{
        width: 20%;
        height: 100%;
    }
    .first_picture{
        display: none;
    }
    .img_status{
        height: 110px;
    }

    @media (min-width: 900px) {
        .bg_concept{
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .content_concept{
            flex-direction: row;
            width: 70%;
            align-items: center;
            margin: auto;
            padding-top: 75px;
        }
        .description_concept_mobile{
            display: none;
        }
        .description_concept_desktop{
            display: flex;
            width: 52%;
            font-family: "Helvetica Neue";
            font-weight: lighter;
            line-height: 1.5;
            font-size: 15px;
            padding: 20px 20px;
        }
        .flex_display_iphone{
            padding-bottom: 0;
            margin-left: 80px;
        }
        .first_picture{
            display: flex;
        }
        .row_img_bottom_concept{
            width: 75%;
            margin: auto;
            margin-bottom: 0;
        }
        .row_img_bottom_concept img{
            width: 15%;
            height: 80px;
        }
        .row_img_bottom_concept .img_status{
            height: 200px;
        }
        .row_img_bottom_concept .img_seconde{
            height: 103px;
            width: 24%;
        }
        .row_img_bottom_concept .img_last{
            height: 90px;
        }
        .size_same_house_desktop{
            height: 60px;
            width: 15%;
        }
    }
</style>
