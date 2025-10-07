declare module "prompt-sync" {
  interface Options { sigint?: boolean; }
  type Prompt = (msg?: string) => string;
  export default function PromptSync(opts?: Options): Prompt;
}
