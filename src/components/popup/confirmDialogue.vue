<template>
    <popup-modal ref="popup">
        <h2 style="margin-top: 0">{{ title }}</h2>

        <div class="btns">
            <router-link to="/"><button class="ok-btn" @click="OK">{{ OKButton }}</button></router-link>
            <!--<span class="ok-btn" @click="confirm">{{ okButton }}</span>-->
        </div>
    </popup-modal>
</template>

<script>
import popupModal from '../popup/popupModal.vue'

export default {
    name: 'confirmDialogue',

    components: { popupModal },

    data: () => ({
        // Parameters that change depending on the type of dialogue
        title: undefined,
        //okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        OKButton: 'OK', // text for cancel button
        
        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            this.title = opts.title
            //this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
                //this.$router.push({ name: 'Home' });
            }
            // Once we set our config, we tell the popup modal to open
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User cancelled the dialogue'))
        },
    },
}
</script>

<style scoped>

    .btns {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    /*.ok-btn {
        color: red;
        text-decoration: underline;
        line-height: 2.5rem;
        cursor: pointer;
    }*/

    .ok-btn {
        padding: 1em 1em;
        background-color: white;
        color: black;
        border: 2px solid black;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
    }

</style>