const BASE_URL = 'https://pokeapi.co/api/v2';

type FetchOptions = {
  signal?: AbortSignal;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export async function fetchPokemonList(
  limit = 20,
  offset = 0,
  options?: FetchOptions,
): Promise<PokemonListResponse> {
  const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url, { signal: options?.signal });

  if (!response.ok) {
    throw new Error('Falha ao buscar lista de Pokémon');
  }

  return response.json();
}

export type PokemonListItemUI = {
  id: number;
  name: string;
  url: string;       // ✅ ADICIONADO
  imageUrl: string;
  types: string[];   // ✅ ADICIONADO
};

function extractIdPokemon(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}

export async function fetchPokemonListPage(
  limit = 10,
  offset = 0,
  options?: FetchOptions
): Promise<{
  items: PokemonListItemUI[];
  count: number;
  next: string | null;
}> {
  const data = await fetchPokemonList(limit, offset, options);

  // 🔥 BUSCA DETALHES DE CADA POKEMON (para pegar types)
  const items = await Promise.all(
    data.results.map(async (pokemon) => {
      const id = extractIdPokemon(pokemon.url);

      const response = await fetch(pokemon.url, { signal: options?.signal });
      const details = await response.json();

      return {
        id,
        name: pokemon.name,
        url: pokemon.url,
        imageUrl:
          details.sprites.front_default ||
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        types: details.types.map((t: any) => t.type.name),
      };
    })
  );

  return {
    items,
    count: data.count,
    next: data.next,
  };
}

// ---------------- DETAIL ----------------

export type PokemonDetailResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

export async function fetchPokemonDetail(
  nameOrId: string | number,
  options?: FetchOptions,
): Promise<PokemonDetailResponse> {
  const url = `${BASE_URL}/pokemon/${nameOrId}`;
  const response = await fetch(url, { signal: options?.signal });

  if (!response.ok) {
    throw new Error('Falha ao buscar detalhes do Pokémon');
  }

  return response.json();
}

// ---------------- SPECIES ----------------

export type PokemonSpeciesResponse = {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    }
  }[];
};

export async function fetchPokemonSpecies(
  nameOrId: string | number,
  options?: FetchOptions,
): Promise<PokemonSpeciesResponse> {
  const url = `${BASE_URL}/pokemon-species/${nameOrId}`;
  const response = await fetch(url, { signal: options?.signal });

  if (!response.ok) {
    throw new Error('Falha ao buscar descrição do Pokémon');
  }

  return response.json();
}