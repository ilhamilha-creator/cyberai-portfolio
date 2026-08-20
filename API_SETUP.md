# Configuration de l'API Anthropic pour le Chat CyberAI

## Problème actuel
Le chat ne fonctionne pas car la clé API dans `.env.local` est `test_key` au lieu d'une vraie clé Anthropic.

## Solution : Obtenir une vraie clé API

### Étape 1 : Créer un compte Anthropic
1. Allez sur [https://console.anthropic.com](https://console.anthropic.com)
2. Créez un compte avec votre email
3. Vérifiez votre email

### Étape 2 : Obtenir la clé API
1. Connectez-vous à la console Anthropic
2. Allez dans la section "API Keys"
3. Cliquez sur "Create Key"
4. Copiez la clé générée (elle commence par `sk-ant-...`)

### Étape 3 : Configurer la clé dans le projet
1. Ouvrez le fichier `.env.local` dans le dossier du projet
2. Remplacez `test_key` par votre vraie clé API
3. Le fichier devrait ressembler à :
   ```
   ANTHROPIC_API_KEY=sk-ant-votre_clé_ici
   ```

### Étape 4 : Redémarrer le serveur
1. Arrêtez le serveur de développement (Ctrl+C)
2. Relancez-le avec `npm run dev`
3. Le chat devrait maintenant fonctionner

## Note importante
- **Ne partagez jamais votre clé API** avec personne
- **Ne commitez jamais** le fichier `.env.local` sur GitHub
- Le fichier `.env.local` est déjà dans `.gitignore` pour protéger votre clé

## Alternative : Mode démo
Si vous n'avez pas de clé API, vous pouvez modifier le fichier `src/app/api/chat/route.ts` pour retourner une réponse simulée pour les tests.

## Test du chat
Une fois configuré :
1. Allez sur `http://localhost:3000/agent`
2. Tapez un message comme "Bonjour"
3. Le chat devrait répondre avec l'assistant CyberAI

## Support
Si vous rencontrez des problèmes :
- Vérifiez que la clé API est correcte
- Assurez-vous d'avoir des crédits sur votre compte Anthropic
- Consultez les logs du serveur pour les erreurs
