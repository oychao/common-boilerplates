import { PluginOption } from 'vite';

export function plugin(): PluginOption {
  const MyPlugin: PluginOption = {
    name: 'vite-plugin-demo',
  };

  return MyPlugin;
}
