export default class ExtensionGenerator {
  constructor(extensionPath) {
    this.description = 'Generate Stanza Extension Generator';
    this.namespace = `${extensionPath}:generator`;
    this.path = `${__dirname}/generator/index.js`;

    this.command = `${extensionPath}:generate:generator <name>`;
  }

  action(arg, yeomanEnv, options = {}) {
    yeomanEnv.run(this.namespace, { name: arg });
  }
}
