export async function loadPlugin() {
  const response = await fetch("/plugins.json");
  const plugins = await response.json();

  const enabledPlugin = plugins.find(
    (p: any) => p.enabled === true
  );

  if (!enabledPlugin) {
    return null;
  }

  const module = await import(
    "../../plugins/LabPluginDemo/index.tsx"
  );

  return module.default;
}