<template>
    <div>
        <HeaderLayout/>
        <RegistrationLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderLayout from "@/components/template/HeaderLayout.vue";
    import FooterLayout from "@/components/template/FooterLayout.vue";
    import RegistrationLayout from "@/components/user/RegistrationLayout.vue";

    export default {
        name: "RegistrationApp",
        components: {
            HeaderLayout,
            RegistrationLayout,
            FooterLayout
        },
    };
</script>

<style>
    .create-account-container {
        display: flex;
        flex-direction: column;
        font-size: 1.5em;
    }
    .create-account-container .title{
        display: flex;
        justify-content: center;
    }
    .create-account-container .form {
        display: flex;
        justify-content: space-around;
    }
    .profil-info .email,
    .password,
    .password-confirmation,
    .username {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1em;
        position: relative;
    }
    label {
        height: 1.5em;
        align-self: center;
    }
    input {
        height: 3em;
        width: 25em;
        border-radius: 0.3em;
    }
    .create-account-container .profil-info .icon {
        background: white;
        color: black;
        position: absolute;
        margin-right: -12em;
        top: 2em;
    } 
    .create-account-container .profil-description {
        align-self: center;
    }
    .profil-description .field,
    .role {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }
    .field textarea {
        height: 5em;
        width: 25em;
        border-radius: 0.3em;
    }
    .role select {
        width: 15em;
        height: 3em;
        align-self: center;
        border-radius: 0.3em;
    }
    .role option {
        font-size: 1.5em;
    }
    .create-account-container .send-button {
        align-self: center;
    }
    .create-account-container .send-button button {
        font-size: 0.8em;
        width: 10em;
        height: 1.9em;
        margin: 2em;
        background-color: black;
        color: #ffde59;
        border-radius: 0.3em;
    }
    .create-account-container button:hover {
        background-color: #ffde59;
        color: black;
  }
</style>