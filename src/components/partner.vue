<template>
    <section ref='partner' id='partner' class='bg_partner'>
        <!--{{ partner }}-->
        <div class="title_partner">
            DEVENEZ PARTENAIRE
        </div>
        <div class="content_partner">
            <div class="description_partner">
                Chez EXEMPLE nous sommes ouvert à tout
                partenariat qui pourrait être intéressant pour
                les trois parties, vous, nous et nos
                utilisateurs. Qui que vous soyez si votre savoir
                faire ou votre activité pourrait participer à
                compléter ou améliorer EXEMPLE alors
                n’hésitez pas à nous contacter !<br>
                Pour plus d’informations sur notre clientèle et
                les options que nous proposons, remplissez le
                formulaire et nous rentrerons directement en
                contact avec vous dans les plus brefs délais !

            </div>
            <div class="flex_form_partner">
                <div>
                    <label>Nom</label>
                    <input type="text" placeholder="placeholder">
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="placeholder">
                </div>
                <div>
                    <label>Entreprise</label>
                    <input type="text" placeholder="placeholder">
                </div>
                <div>
                    <label>Message</label>
                    <textarea  placeholder="placeholder"></textarea>
                </div>
                <div>
                    <input type="submit" value="ENVOYER">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'partner',
        data: function() {
            return{
                partner: 'Ici c\'est le partner',
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

    .bg_partner{
        background-color: #23a4d3;
        color: #fcfcfc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 15px;
    }
    .title_partner{
        text-transform: uppercase;
        font-size: 20px;
        font-family: "MES Bold";
        margin-bottom: 20px;
    }
    .content_partner{
        display: flex;
        flex-direction: column;
    }
    .description_partner{
        font-size: 15px;
        font-family: Helvetica Neue;
    }
    .flex_form_partner{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 20px;
    }
    .flex_form_partner div{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }
    .flex_form_partner div label{
        font-family: Helvetica Neue;
        margin-bottom: 15px;
        font-size: 16px;
    }
    input[type=text],textarea{
        border-color: #f8c61d;
        height: 38px;
        border-radius: 10px;
        padding-left: 15px;
        border-style: solid;
        font-weight: lighter;
    }
    textarea{
        padding-top: 10px;
        border: 2px solid #f8c61d;
        height: 228px;
    }
    input[type=submit]{
        color: #fcfcfc;
        background-color: #f8c61d;
        height: 37px;
        width: 150px;
        margin: auto;
        border-radius: 10px;
        border-style: solid;
        border-color: #f8c61d;
        font-size: 11px;
        font-family: "MES Bold";
        margin-top: 30px;
    }

    @media (min-width: 900px) {
        .content_partner{
            width: 78%;
            flex-direction: row;
        }
        /*.title_partner{
            font-size: 20px;
            font-family: "MES Bold";
            margin-bottom: 20px;
        }*/
        .description_partner{
            width: 32%;
            margin-right: 5%;
            line-height: 1.6;
            padding-top: 90px;
        }
        .flex_form_partner{
            width: 50%;
        }
        input[type=text], textarea {
            border-color: inherit;
            height: 30px;
            border-radius: 0px;
            padding-left: 15px;
            border-style: none;
            font-weight: lighter;
        }
        textarea{
            border: 0;
            height: 228px;
        }
        input[type=text]::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder{ /* WebKit browsers */
            color: transparent;
        }
        input[type=text]:-moz-placeholder,
        textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: transparent;
        }
        input[type=text]::-moz-placeholder,
        textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: transparent;
        }
        input[type=text]:-ms-input-placeholder,
        textarea:-ms-input-placeholder{ /* Internet Explorer 10+ */
            color: transparent;
        }
    }
</style>
