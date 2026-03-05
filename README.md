## My Pokédex

Aplicativo mobile em React Native com Expo, usado em aulas práticas de desenvolvimento mobile, no formato de uma Pokédex.

Atualmente o projeto contém:

- **Tela de Login** (`LoginScreen`)
- **Tela de Listagem de Pokémon** (`PokemonListScreen`) com dados mockados
- **Tela de Detalhe de Pokémon** (`PokemonDetailScreen`) com dados mockados
- **Serviço de API** (`pokeapi.ts`) já estruturado para consumir a [PokéAPI](https://pokeapi.co)

> Atenção: neste momento as telas ainda **não estão conectadas entre si** (sem navegação) e os dados mostrados são estáticos. A integração com a API será feita nas aulas.

---

## Pré-requisitos

- **Node.js** (versão LTS recomendada)
- **npm** (vem junto com o Node.js)
- **Expo Go** instalado no celular  
  - Android: disponível na Google Play Store  
  - iOS: disponível na App Store

Opcional (para emuladores):

- Android Studio (emulador Android)
- Xcode (emulador iOS, apenas em macOS)

---

## Como rodar o projeto localmente

1. **Clonar o repositório**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd my-pokedex
   ```

2. **Instalar as dependências**

   ```bash
   npm install
   ```

3. **Iniciar o servidor do Expo**

   ```bash
   npx expo start
   ```

   Isso irá abrir a interface do Expo no navegador e/ou no terminal.

4. **Rodar no celular (recomendado)**

   - Conecte o celular e o computador **na mesma rede Wi‑Fi**.
   - Abra o aplicativo **Expo Go** no celular.
   - No navegador/terminal, leia o **QR Code** com o aplicativo Expo Go.
   - Aguarde o bundle carregar e o app será aberto.

5. **Rodar em emulador (opcional)**

   Com o servidor Expo rodando (`npx expo start`):

   - Para Android:

     ```bash
     npx expo start --android
     ```

   - Para iOS (apenas macOS):

     ```bash
     npx expo start --ios
     ```

---

## Estrutura básica do projeto

```text
my-pokedex/
  App.tsx          # Ponto de entrada, hoje exibindo a tela de Login
  src/
    screens/
      LoginScreen.tsx          # Tela de login
      PokemonListScreen.tsx    # Tela de listagem (mock)
      PokemonDetailScreen.tsx  # Tela de detalhes (mock)
    services/
      pokeapi.ts               # Funções para consumir a PokéAPI (ainda não usadas nas telas)
```

---

## Próximos passos (para as aulas)

- Adicionar **navegação** entre as três telas (por exemplo, usando React Navigation).
-.Substituir os dados mockados pela resposta real da **PokéAPI**:
  - Listagem de Pokémon com paginação.
  - Detalhamento de um Pokémon (stats, tipos, altura, peso etc.).
- Evoluir o layout e a experiência de uso.

