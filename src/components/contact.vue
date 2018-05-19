<template>
    <section ref='contact' id='contact' class="bg_contact">
        <!--{{ partner }}-->
        <div class="title_partner">
            CONTACTEZ-NOUS
        </div>
        <div v-if="res" >
            {{res}}
        </div>
        <form v-on:submit.prevent='submitContact' class="flex_form_partner">
            <div>
                <label>Nom</label>
                <input v-model="name" type="text" placeholder="placeholder">
            </div>
            <div>
                <label>Email</label>
                <input v-model="email" type="text" placeholder="placeholder">
            </div>
            <div>
                <label>Message</label>
                <textarea v-model="message" placeholder="placeholder"></textarea>
            </div>
            <div>
                <input type="submit" value="ENVOYER">
            </div>
        </form>
    </section>
</template>

<script>

    import { restPost } from '../services/api'

    export default {
        name: 'contact',
        data: () => ({
            name: '',
            email: '',
            message: '',
            res: ''
        }),
        methods: {
            submitContact(e) {
                restPost('/contact', {name: this.name, email: this.email, message: this.message})
                .then(res => this.res = res.response)
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

    .bg_contact{
        background-color: #fcfcfc;
        color: #343434;
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
        margin-top: 20px;
        color: #23a4d3;
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

        .bg_contact{
            height: 100vh;
        }
        .flex_form_partner{
            width: 57%;
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
