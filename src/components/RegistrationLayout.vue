<template>
        <h1 class="compte">Créer un compte</h1>
        <p class="border-title"></p>
    

    <div class="container">
        <h1>Formulaire de contact</h1>
        <form action="/action_page.php">
            <div class="email">
                <label for="emailAddress">Email</label>
                <input type="emailAddress" id="email" name="email" placeholder="votre adresse electronique">
                <i class="fas fa-at"></i>
            </div>


            <div class="password">
                <label for="password">Password</label>
                <input type="password" id="pass" name="password" placeholder="votre mot de passe">
                <i class="fa fa-lock" aria-hidden="true"></i>
            </div>
            <div class="password">
                <label for="confirmation">Confirmation</label>
                <input id="confirmation" type="confirmation" name="confirmation" placeholder="Confirmation">
                <i class="fa fa-lock" aria-hidden="true"></i>
            </div>



            <div class="prénom">
                <label for="prenom">Prénom</label>
                <input id="prénom" type="prénom" name="prénom" placeholder="Votre prénom">
                <i class="fa fa-portrait"></i>
            </div>



            <div class="nom">
                <label for="nom">nom</label>
                <input id="nom" type="nom" name="nom" placeholder="Votre nom">
                <i class="fa fa-portrait"></i>
            </div>

            <label for="pseudo">Pseudo</label>
            <div class="pseudo">
                <input id="pseudo" type="pseudo" name="pseudo" placeholder="Votre pseudo">
                <i class="fa fa-smile"></i>
            </div>


            <select name="rôle" id="rôle">
                <option value="">--Quel est votre status--</option>
                <option value="dog">Abonnés</option>
                <option value="dog">Artiste</option>
            </select>


        </form>
    </div>






    <div class="second-container">
        <h2>Ajouter une photo</h2>

        <a href="">
            <img src="https://picsum.photos/200/300 " alt="img" />
        </a>

        <label for="story"></label>

        <textarea id="story" name="story" rows="5" cols="33">
Décrivez-vous...
Bonjour moi c'est John deboul , intermitant du spectacle , fan des red hot chili peppers , je fais des dessins quand je suis fonsdé 
</textarea>


        <button class="Créer un Compte" type="button">
            Créer un compte
        </button>
    </div>
</template>




<style  src="../assets/signup.css">
</style>