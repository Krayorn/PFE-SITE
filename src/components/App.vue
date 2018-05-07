<template>
<div id="app">

    <home ref='home' ></home>
    <concept ref='concept' ></concept>
    <partner ref='partner' ></partner>
    <contact ref='contact' ></contact>
    <div class='nav' >
        <div class='nav-item' v-bind:class="{'active': scroll < homeHeight}" >
            <!-- <span class='title' >Acceuil</span> -->
            <a v-smooth-scroll href='#home' class='round' />
        </div>
        <div class='nav-item' v-bind:class="{'active': scroll >= homeHeight && scroll < conceptHeight}" >
            <!-- <span class='title' >Concept</span> -->
            <a v-smooth-scroll href='#concept' class='round' />
        </div>
        <div class='nav-item' v-bind:class="{'active': scroll >= conceptHeight && scroll < partnerHeight}" >
            <!-- <span class='title' >Partenaire</span> -->
            <a v-smooth-scroll href='#partner' class='round' />
        </div>
        <div class='nav-item' v-bind:class="{'active': scroll >= partnerHeight && scroll < contactHeight}" >
            <!-- <span class='title' >Contact</span> -->
            <a v-smooth-scroll href='#contact' class='round' />
        </div>
    </div>
</div>
</template>

<script>
    import Home from '../components/home.vue'
    import Concept from '../components/concept.vue'
    import Partner from '../components/partner.vue'
    import Contact from '../components/contact.vue'

    export default {
        name: 'app',
        data: () => {
            return{
                scroll: 0,
                homeHeight: 0,
                conceptHeight: 0,
                partnerHeight: 0,
                contactHeight: 0
            }
        },
        methods: {
            getWindowScroll(event) {
                this.scroll = window.scrollY
            },
            getHeight() {
                console.log('refs', this.$refs)
                this.homeHeight = this.$refs.home.$refs.home.clientHeight
                this.conceptHeight = this.homeHeight + this.$refs.concept.$refs.concept.clientHeight
                this.partnerHeight = this.conceptHeight + this.$refs.partner.$refs.partner.clientHeight
                this.contactHeight = this.partnerHeight + this.$refs.contact.$refs.contact.clientHeight
            }
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('scroll', this.getWindowScroll)
                this.getWindowScroll()
                this.getHeight()
            })
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.getWindowScroll)
        },
        components : {
            Home,
            Concept,
            Partner,
            Contact
        },
    }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .nav {
        position: fixed;
        right: 0%;
        top: 40%;
        height: 20%;
    }
    .nav-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
    }
    .active {
        transition: 0.5s;
        color: gold;
    }
    .round {
            width: 8px;
            height: 8px;
            border-radius: 100%;
            border: 2px solid;
            margin: 10px 5px;
            color: initial;
    }
    .active > .round {
        background-color: gold;
        box-shadow: 0px 0px 1px 1px gold;
        border-color: gold;
    }
</style>
