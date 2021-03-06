'use babel';

import ZoteroPickerView from './zotero-picker-view';
import { CompositeDisposable } from 'atom';
import * as request from "request-promise";

export default {

  zoteroPickerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.zoteroPickerView = new ZoteroPickerView(state.zoteroPickerViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.zoteroPickerView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'zotero-picker:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.zoteroPickerView.destroy();
  },

  serialize() {
    return {
      zoteroPickerViewState: this.zoteroPickerView.serialize()
    };
  },

  toggle() {
    console.log('ZoteroPicker was toggled!');
    let editor = atom.workspace.getActiveTextEditor()
    // var req = new XMLHttpRequest();
    // req.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //      editor.insertText('@'+req.responseText.split(',').join('; @'))
    //   }else {
    //     console.error(req.statusText)
    //   }
    //   atom.focus()
    // };
    // req.open('GET', "http://localhost:23119/better-bibtex/cayw", true)
    // req.send()
    request.get({ uri: "http://localhost:23119/better-bibtex/cayw", headers: { 'User-Agent': 'atom-zotero-picker' } })
      .then(citekeys => {
         editor.insertText('@'+citekeys.split(',').join('; @'))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        atom.focus()
      })
  }

};
