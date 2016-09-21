import Extension from '../../stanza-cli/src/extension';

/**
 * <%= extensionName %> representing an Extension
* */
export default class <%= extensionName %> extends Extension {
  constructor(name, registerWithObject, keyword) {
    super(name, registerWithObject, keyword, __dirname);

    this._extensionPath = __dirname;

    this.discoverCommands(`${this._extensionPath}/commands`);
  }
}
