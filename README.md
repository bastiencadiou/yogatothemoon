# YogaToTheMoon — Guide pour modifier le site

Ce dépôt contient le site de l’association YogaToTheMoon. Ce guide explique comment proposer une modification de texte ou de photo, même si vous n’avez jamais utilisé GitHub.

Le parcours : **récupérer le projet → créer une branche → modifier et vérifier → envoyer les changements → demander une validation**.

## 1. Comprendre les quelques mots utilisés

| Mot | Signification |
| --- | --- |
| Dépôt (*repository*) | Le dossier du projet sur GitHub, avec l’historique des modifications. |
| Cloner | Télécharger une copie du projet sur votre ordinateur, reliée à GitHub. |
| Branche | Une version de travail dans laquelle préparer vos changements. |
| `main` | La branche principale, qui contient la version de référence du site. |
| Commit | Un enregistrement de vos modifications dans l’historique local, accompagné d’un message. |
| Push | L’envoi de vos commits vers GitHub. |
| Pull request (PR) | Une demande de relecture et d’intégration de votre branche dans `main`. |
| Merge | L’intégration des modifications dans la branche principale. |

Enregistrer un fichier, créer un commit et envoyer ce commit sur GitHub sont trois actions différentes. Les modifications faites sur votre ordinateur ne changent pas à elles seules le site en ligne.

## 2. Créer votre compte et accepter l’invitation

1. Rendez-vous sur [github.com](https://github.com/) et cliquez sur **Sign up**.
2. Suivez les étapes pour choisir votre identifiant, votre adresse e-mail et votre mot de passe.
3. Validez votre adresse e-mail à l’aide du message reçu de GitHub.
4. Communiquez votre identifiant au responsable du site pour qu’il vous invite sur le dépôt, si ce n’est pas déjà fait.
5. Connectez-vous au bon compte et acceptez l’invitation reçue par e-mail ou dans vos notifications GitHub.
6. Vérifiez que vous pouvez ouvrir le [dépôt YogaToTheMoon](https://github.com/bastiencadiou/yogatothemoon).

Utilisez votre propre compte. Il n’est pas nécessaire de connaître le mot de passe du responsable du site. Il est recommandé d’activer la double authentification dans les paramètres de votre compte et de conserver vos codes de récupération.

## 3. Installer les outils — une seule fois

Ce guide utilise deux applications gratuites sur Windows ou macOS :

- [GitHub Desktop](https://desktop.github.com/) pour récupérer le projet, gérer votre branche et envoyer les changements, sans ligne de commande.
- [Visual Studio Code](https://code.visualstudio.com/) pour modifier les fichiers du site.

Installez-les, puis ouvrez GitHub Desktop. Choisissez **Sign in to GitHub.com** et connectez-vous avec le compte qui a accepté l’invitation. Si l’application demande un nom et une adresse e-mail pour les commits, utilisez les informations de votre compte ; vous pouvez choisir l’adresse de confidentialité fournie par GitHub dans les paramètres **Emails**.

## 4. Cloner le projet — une seule fois

1. Dans GitHub Desktop, ouvrez **File → Clone repository**.
2. Sélectionnez l’onglet **URL**.
3. Collez cette adresse :

   ```text
   https://github.com/bastiencadiou/yogatothemoon.git
   ```

4. Dans **Local path**, choisissez où conserver le projet, par exemple dans votre dossier Documents.
5. Cliquez sur **Clone**.

Le dossier `yogatothemoon` est maintenant sur votre ordinateur. Conservez-le pour vos prochaines modifications : il n’est pas nécessaire de cloner à nouveau le dépôt à chaque fois.

## 5. Créer une branche avant de modifier quoi que ce soit

À faire pour chaque nouvelle série de changements :

1. Dans GitHub Desktop, vérifiez que **Current repository** affiche `yogatothemoon`.
2. Dans **Current branch**, sélectionnez `main`.
3. Cliquez sur **Fetch origin**, puis sur **Pull origin** si ce bouton apparaît. Cela récupère les dernières modifications des autres personnes.
4. Ouvrez **Branch → New branch**.
5. Donnez un nom court et descriptif à votre branche, sans espace ni accent, par exemple `mise-a-jour-photos` ou `textes-rentree`.
6. Si un choix de branche de départ est proposé, choisissez `main`, puis cliquez sur **Create branch**.
7. Vérifiez que **Current branch** affiche votre nouvelle branche avant d’éditer les fichiers.

Travaillez toujours sur votre branche pour proposer des changements à la branche principale protégée. Si des modifications non enregistrées sont déjà présentes avant de changer de branche, ne les supprimez pas : demandez de l’aide au responsable pour les conserver au bon endroit.

## 6. Ouvrir les fichiers du site

Ouvrez Visual Studio Code, puis **File → Open Folder** (ou **Fichier → Ouvrir le dossier**) et sélectionnez le dossier `yogatothemoon` que vous avez cloné.

| Fichier ou dossier | Rôle |
| --- | --- |
| `index.html` | Les textes de la page, les liens et les références des photos. |
| `images/` | Les fichiers des photos utilisées sur le site. |
| `style.css` | Les couleurs, les tailles et la mise en page. |
| `contact.js` | Le fonctionnement du formulaire de contact. |
| `README.md` | Ce guide. |

Pour modifier uniquement les textes et les photos, vous travaillerez généralement dans `index.html` et `images/`.

### Modifier un texte

1. Dans Visual Studio Code, ouvrez `index.html`.
2. Utilisez **Ctrl + F** sur Windows ou **Cmd + F** sur Mac pour rechercher une phrase visible sur le site.
3. Modifiez le texte en conservant les balises HTML qui l’entourent.
4. Enregistrez avec **Ctrl + S** ou **Cmd + S**.

Par exemple, pour changer le texte d’un paragraphe :

```html
<!-- Avant -->
<p>Le club vous propose des tapis à prix coûtant.</p>

<!-- Après -->
<p>Des tapis sont disponibles auprès de l’association.</p>
```

Dans cet exemple, seules les phrases changent. Les éléments `<p>` et `</p>` sont conservés : ils délimitent le paragraphe. Ne recopiez pas les deux versions ; remplacez simplement le texte existant.

Repères pour trouver les sections dans `index.html` :

| Contenu à modifier | Texte à rechercher dans le fichier |
| --- | --- |
| Introduction et photo d’accueil | `id="accueil"` |
| Présentation de l’association | `id="presentation"` |
| Horaires et tarifs | `id="horaires-tarifs"` |
| Adresse et matériel | `id="lieu"` |
| Coordonnées et formulaire | `id="contact"` |
| Description pour les moteurs de recherche | `name="description"` |

Quelques points utiles :

- Un horaire, un tarif ou une saison peut apparaître plusieurs fois, notamment dans la description située en haut du fichier. Recherchez toutes les occurrences pour garder les informations cohérentes.
- Un numéro de téléphone comporte un texte visible et une cible de lien. Par exemple, dans `<a href="tel:+33612345678">06 12 34 56 78</a>`, il faut modifier les deux si le numéro change.
- Conservez les attributs comme `id`, `class` et les noms des champs du formulaire. Ils servent à la navigation, à la présentation ou au fonctionnement du site.
- Gardez l’encodage **UTF-8** dans Visual Studio Code pour préserver les accents. N’utilisez pas Word pour éditer le HTML.

### Remplacer une photo

Les photos actuellement utilisées sont :

| Emplacement | Fichier dans le dossier `images/` | Référence dans `index.html` |
| --- | --- | --- |
| Accueil | `yoga a la maison.jpg` | `images/yoga%20a%20la%20maison.jpg` |
| Présentation | `présentation.jpg` | `images/pr%C3%A9sentation.jpg` |

Les séquences `%20` et `%C3%A9` représentent respectivement un espace et un `é` dans l’adresse de l’image. Les fichiers sur votre ordinateur conservent leurs noms normaux.

**Méthode simple : conserver le nom du fichier existant.**

1. Préparez votre nouvelle photo au format JPEG.
2. Dans le dossier `images/` du projet cloné, remplacez la photo concernée par la nouvelle, en gardant exactement le même nom et l’extension `.jpg`.
3. Dans `index.html`, trouvez l’image et adaptez son attribut `alt` : il doit décrire brièvement la nouvelle photo pour les personnes qui ne peuvent pas la voir.

Renommer un fichier `.png` en `.jpg` ne convertit pas son format : utilisez la fonction d’export de votre logiciel d’image si nécessaire.

**Autre possibilité : ajouter une photo avec un nouveau nom.**

1. Placez la photo dans `images/`, par exemple `cours-yoga.jpg`. Préférez les noms sans espaces ni accents.
2. Modifiez la valeur de `src` dans la balise `<img>` concernée et adaptez `alt` :

   ```html
   src="images/cours-yoga.jpg"
   alt="Participants à un cours de yoga dans la salle de Lanrodec"
   ```

3. Conservez les autres attributs de l’image. Pour l’image de présentation, si la nouvelle photo a des proportions différentes, adaptez aussi `width` et `height` à ses dimensions en pixels.

Respectez exactement les majuscules, minuscules et extensions des fichiers. Utilisez un chemin comme `images/cours-yoga.jpg`, jamais une adresse locale comme `C:\Users\...`.

Choisissez une photo que l’association est autorisée à publier. Pour un chargement rapide, visez si possible quelques centaines de kilo-octets plutôt qu’une photo originale de plusieurs mégaoctets, en conservant une qualité suffisante.

## 7. Vérifier le résultat sur votre ordinateur

Le site est une page HTML simple : aucune commande, installation de dépendances ou compilation n’est nécessaire pour vérifier les textes et les photos.

1. Enregistrez vos fichiers dans Visual Studio Code.
2. Ouvrez le dossier du projet dans l’explorateur de fichiers ou le Finder.
3. Double-cliquez sur `index.html` pour l’ouvrir dans votre navigateur.
4. Après chaque modification enregistrée, actualisez la page du navigateur.
5. Réduisez aussi la largeur de la fenêtre pour vérifier la présentation sur un petit écran.

Avant d’envoyer vos changements, vérifiez :

- Les textes sont lisibles, sans faute, et les accents s’affichent correctement.
- Les horaires, tarifs et coordonnées sont cohérents partout.
- Les photos apparaissent et leur cadrage convient sur une fenêtre large et étroite.
- Les liens du menu fonctionnent toujours.
- Aucun autre élément de la page n’a été supprimé par erreur.

Cette prévisualisation reste locale. La carte nécessite une connexion Internet et le formulaire utilise un service externe réel ; n’envoyez pas de message simplement pour vérifier la mise en page. L’ouverture locale ne garantit pas le fonctionnement de ces services une fois le site publié.

## 8. Enregistrer les changements dans GitHub Desktop

1. Revenez dans GitHub Desktop.
2. Vérifiez que **Current branch** affiche votre branche de travail, et non `main`.
3. Dans **Changes**, consultez la liste des fichiers modifiés et cliquez sur chaque fichier pour relire les changements. Pour les textes, les lignes supprimées sont généralement rouges et les ajouts verts.
4. Vérifiez que les fichiers attendus sont cochés, y compris les nouvelles photos. N’ajoutez aucun fichier personnel sans rapport avec le site.
5. Dans **Summary**, écrivez un message court, par exemple `Actualise le texte de présentation et la photo d’accueil`.
6. Cliquez sur **Commit to [nom de votre branche]**.

Ce commit enregistre une étape sur votre ordinateur. Il n’est pas encore envoyé sur GitHub.

## 9. Envoyer la branche et ouvrir la pull request

1. Dans GitHub Desktop, cliquez sur **Publish branch** si votre branche n’a jamais été envoyée, sinon sur **Push origin**.
2. Ouvrez le [dépôt sur GitHub](https://github.com/bastiencadiou/yogatothemoon) dans votre navigateur.
3. Cliquez sur **Compare & pull request** si GitHub propose ce bouton. Sinon, ouvrez l’onglet **Pull requests**, puis **New pull request**.
4. Vérifiez le sens de la demande : **base : `main`** et **compare : votre branche**.
5. Consultez les modifications affichées pour vous assurer qu’elles correspondent à votre travail.
6. Renseignez un titre explicite et une description, par exemple :

   ```text
   Titre : Actualisation de la présentation de l’association

   Changements :
   - Mise à jour du texte de présentation.
   - Remplacement de la photo d’accueil et de sa description.

   Vérifications :
   - Page ouverte dans le navigateur sur mon ordinateur.
   - Textes et photos vérifiés en fenêtre large et étroite.
   ```

7. Cliquez sur **Create pull request**.
8. Dans **Reviewers**, sélectionnez `bastiencadiou` si cette option est disponible ; sinon, prévenez le responsable en lui transmettant le lien de la PR.

Votre proposition est maintenant prête à être relue. Laissez le responsable valider et intégrer la PR. L’ouverture d’une PR n’intègre pas les changements dans `main`. La mise en ligne dépend ensuite de la configuration de l’hébergement ; ne supposez pas qu’elle a déjà eu lieu.

### Si une correction est demandée

Restez sur la même branche dans GitHub Desktop. Modifiez les fichiers, vérifiez le résultat, créez un nouveau commit, puis cliquez sur **Push origin**. La PR existante sera automatiquement mise à jour : inutile d’en créer une autre. Si les approbations sont annulées après de nouveaux changements par les règles du dépôt, une nouvelle validation sera nécessaire.

## 10. Préparer la prochaine modification

Une fois la PR intégrée et votre travail enregistré et envoyé :

1. Dans GitHub Desktop, sélectionnez `main` dans **Current branch**.
2. Cliquez sur **Fetch origin**, puis **Pull origin** si proposé.
3. Pour la prochaine tâche, créez une nouvelle branche depuis cette version à jour de `main`.

Ne réutilisez pas une ancienne branche dont la PR a déjà été intégrée.

## En cas de problème

| Situation | Que faire ? |
| --- | --- |
| Le dépôt est inaccessible ou l’envoi est refusé | Vérifiez le compte connecté et l’acceptation de l’invitation. Demandez au responsable de vérifier votre accès. |
| GitHub Desktop propose de créer un *fork* | Pour ce guide, vous devez avoir un accès collaborateur au dépôt original. Faites vérifier cet accès avant de poursuivre. |
| Un envoi direct sur `main` est bloqué | La protection joue son rôle. Si vous avez déjà fait des commits sur `main`, conservez-les et demandez de l’aide pour les déplacer sur une branche de travail. |
| Une photo ne s’affiche pas | Vérifiez son nom, son extension et le chemin `src`. Vérifiez aussi que le fichier est bien dans `images/` et inclus dans le commit. |
| Une modification n’apparaît pas dans le navigateur | Enregistrez le fichier, actualisez la page et assurez-vous d’avoir ouvert le `index.html` du bon dossier. |
| La PR signale un conflit | Ne choisissez pas une version au hasard. Demandez au responsable de vous aider à conserver les changements de chacun. |
| GitHub indique qu’une approbation est nécessaire | Attendez la relecture ; ne désactivez pas la protection de la branche. |

## Documentation officielle

- [Débuter avec GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop)
- [Cloner un dépôt avec GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
- [Gérer les branches avec GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop)
- [Enregistrer et relire ses changements](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
- [Comprendre les protections de branche](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
