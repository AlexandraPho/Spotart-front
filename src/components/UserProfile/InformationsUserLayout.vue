<template>
<main class="main-container">
            <h1>Modifier mon compte</h1>
    <form>
        <div class="account_section_creation">
        <fieldset class="right_section">
            <div class="field">
                <label class="field__label">Adresse électronique :</label>
                <input class="field__input" type="text" >
            </div>
            <div class="field">
                <label class="field__label">Mot de passe :</label>
                <input class="field__input" type="password" placeholder="Mot de passe">
            </div>
            <div class="field">
                <label class="field__label">Prénom :</label>
                <input class="field__input" type="text" placeholder="John">
            </div>
            <div class="field">
                <label class="field__label">Nom :</label>
                <input class="field__input" type="text" placeholder="Doe">
            </div>
            <div class="field">
                <label class="field__label">Pseudo :</label>
                <input class="field__input" type="text" v-bind:placeholder="nickname">
            </div>
        </fieldset>
        <fieldset class="left_section">
            <div class="field">
                <textarea v-bind:placeholder="description" class="field__input" rows="10" cols="50"></textarea>
            </div>
        </fieldset>
        </div> 
            <div class="div_button_submit">      
                <button type="submit" class="button">Modifier votre compte</button>
            </div>
      </form>
      </main>
</template>

<script>


export default {
    name: 'InformationsUserLayout',
    props: {

    nickname: String,
    description: String


    }
}

</script>

<style>



</style>

