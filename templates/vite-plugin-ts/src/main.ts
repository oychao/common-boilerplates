import { PluginOption } from 'vite';

export const VirtualPrefix = '\0';

export function plugin(): PluginOption {
  const MyPlugin: PluginOption = {
    name: 'vite-plugin-ts-demo',
    resolveId(source) {
      return source;
    },
    // load(id, options) {},
    // async transform(code, id, options) {},
  };

  return MyPlugin;
}
