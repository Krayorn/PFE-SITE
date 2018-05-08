<template>
    <section ref='home' id='home' class="bg_home">
        <!--{{ accueil }}-->
        <div class="row_menu_logo">
            <div>1</div>
            <div>LOGO</div>
        </div>
        <div class="content_home">
            <div class="title_section_home">
                Laissez vous guider le temps
                d’une promenade
            </div>

            <div class="flex_display_gif">
                <img class="size_gif" src="../assets/images/anim-iphone.gif">
            </div>

            <div class="btn_home">
                découvrir
            </div>
        </div>

        <div class="content_home_desktop">
            <div>
                <div class="title_section_home">
                    Laissez vous guidez le temps
                    d’une promenade
                </div>
                <div class="btn_home">
                    découvrir
                </div>
            </div>

            <div class="flex_display_gif">
                <img class="size_gif" src="../assets/images/anim-iphone.gif">
            </div>
        </div>


    </section>
</template>

<script>
    export default {
        name: 'home',
        data: function() {
            return{
                //accueil: 'Ici c\'est l\'accueil',
            }
        }
    }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    @font-face {
        font-family: "MES Bold";
        src: url('../assets/fonts/MadeEvolve Sans/MADE Evolve Sans Bold (PERSONAL USE).otf');
    }

    .row_menu_logo{
        display: flex;
        padding: 25px 15px;
    }
    .bg_home{
        background-color: #23a4d3;
        color: #fcfcfc;
        padding-bottom: 50px;
        height: 100vh;
    }
    .content_home{
        display: flex;
        flex-direction: column;
    }
    .content_home_desktop{
        display: none;
    }
    .title_section_home{
        font-weight: bold;
        font-size: 25px;
        text-align: center;
        font-family: "MES Bold";
    }
    .flex_display_gif{
        display: flex;
        justify-content: center;
        height: 316px;
    }
    .size_gif{
        width: 80%;
    }
    .btn_home{
        width: 193px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8c61d;
        border-radius: 15px;
        text-transform: uppercase;
        margin: auto;
        font-family: "MES Bold";
        font-size: 16px;
    }

    @media (min-width: 900px) {
        .content_home{
            display: none;
        }
        .content_home_desktop{
            display: flex;
            width: 70%;
            margin: auto;
            align-items: center;
        }
        .btn_home{
            margin-top: 55px;
        }
    }

</style>
