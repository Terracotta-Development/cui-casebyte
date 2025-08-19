export interface Provider {
  id: string;    // Provider id
  name: string;  // Provider name
}

export type ProviderMap = Array<Provider>;

// Client-safe provider configuration
// This mirrors the server-side providers but without server dependencies
export const providerMap: ProviderMap = [
  {
    id: "resend",
    name: "Resend"
  }
];