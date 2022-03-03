# Tableau de routes SpotArt

## Routes Back

| URL                               | HTTP Method | Title                   | Content                                 | Comment                                                           |
| --------------------------------- | ----------- | ----------------------- | --------------------------------------- | ----------------------------------------------------------------- |
| `/`                               | `GET`       | Accueil                 | Get 4 artists and artworks              | -                                                                 |
| `/artwork/sculptureList`          | `GET`       | Liste des sculptures    | Get all sculptures                      | -                                                                 |
| `/artwork/paintingList`           | `GET`       | Liste des peintures     | Get all paintings                       | -                                                                 |
| `/artwork/drawingList`            | `GET`       | Liste des dessins       | Get all drawings                        | -                                                                 |
| `/artwork/photographyList`        | `GET`       | Liste des photographies | Get all photographies                   | -                                                                 |
| `/artwork/[i:artworkID]`          | `GET`       | Une oeuvre              | Get an artwork                          | [i:artworkID] is the artwork to get                               |
| `/signup`                         | `POST`      | Créer un compte         | Create an account on the web app        | -                                                                 |
| `/login`                          | `GET`       | Connexion               | Connect to an account on the wep app    | -                                                                 |
| `/logout`                         | `GET`       | Déconnexion             | Logout and redirection to the home page | -                                                                 |
| `/profile/[i:profileID]/edit`     | `PUT`       | Modifier mon profil     | Update the profile informations(s)      | [i:profileID] is the profile to update                            |
| `/profile/[i:profileID]`          | `GET`       | Profil d'un utilisateur | Get the profile page of a user          | [i:profileID] is the profile to get                               |
| `/profile/[i:profileID]/artworks` | `GET`       | Mes oeuvres             | Get a list of all my artworks           | [i:profileID] is the target profile to get the his/her artworks   |
| `/favorites/[i:profileID]`        | `GET`       | Mes favoris             | List of favorites                       | [i:profileID] is the target profile to get the favorites artworks |
| `/artwork/create`                 | `POST`      | Publier une oeuvre      | Artwork create                          | -                                                                 |
| `/artwork/delete/[i:artworkID]`   | `DELETE`    | Supprimer une oeuvre    | Delete an artwork                       | [i:artworkID] is the artwork to delete                            |
| `/artwork/[i:artworkID]/edit`     | `PUT`       | Modifier une oeuvre     | Artwork update                          | [i:artworkID] is the artwork to update                            |
| `/artwork/favorite/[i:artworkID]` | `POST`      | Favoriser une oeuvre    | Favorite an Artwork                     | [i:artworkID] is the artwork to favorite                          |
| `/contact`                        | `POST`      | Contact                 | Send a contact form                     | -                                                                 |

## Routes Front

### Utilisation de VueRouter

| URL                               | HTTP Method | Title                   | Content                                                      | Comment                                                         |
| --------------------------------- | ----------- | ----------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `/`                               | `GET`       | Accueil                 | Access to 4 artists and artworks                             | -                                                               |
| `/artwork/sculptureList`          | `GET`       | Liste des sculptures    | List of sculptures                                           | -                                                               |
| `/artwork/paintingList`           | `GET`       | Liste des peintures     | List of paintings                                            | -                                                               |
| `/artwork/drawingList`            | `GET`       | Liste des dessins       | List of drawings                                             | -                                                               |
| `/artwork/photographyList`        | `GET`       | Liste des photographies | List of photographies                                        | -                                                               |
| `/artwork/[i:artworkID]`          | `GET`       | Une oeuvre              | Post of either a sculpture, painting, photography or drawing | [i:artworkID] is the artwork to get                             |
| `/login`                          | `GET`       | Connexion               | Form to connect to an account on the wep app                 | -                                                               |
| `/signup`                         | `GET`       | Créer un compte         | Form to create an account on the web app                     | -                                                               |
| `/profile/[i:profileID]`          | `GET`       | Profil d'un utilisateur | Profil page of a user                                        | [i:profileID] is the profile to get                             |
| `/profile/[i:profileID]/edit`     | `GET`       | Modifier mon profil     | Form to update the profile informations(s)                   | [i:profileID] is the profile to get                             |
| `/profile/[i:profileID]/artworks` | `GET`       | Mes oeuvres             | Page with a list of all my artworks                          | [i:profileID] is the target profile to get the his/her artworks |
| `/artwork/create`                 | `GET`       | Publier une oeuvre      | Form to create/publish an artwork                            | -                                                               |
| `/artwork/update/[i:artworkID]`   | `GET`       | Modifier une oeuvre     | Form to update an artwork                                    | [i:artworkID] is the artwork to get                             |
| `/mentions-legales`               | `GET`       | Mentions légales        | Page of legal notice                                         | -                                                               |
| `/sitemap`                        | `GET`       | Plan du site            | Page for the sitemap                                         | -                                                               |
| `/contact`                        | `GET`       | Contact                 | Page to get contact informations and form of contact         | -                                                               |
| `/about`                          | `GET`       | A propos du site        | About page                                                   | -                                                               |
