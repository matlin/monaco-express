import React from 'react';
import ReactDOM from 'react-dom';
import MainEditor from './editor.jsx';

// console.log("I'm a script!!");

// import * as monaco from 'monaco-editor';

// self.MonacoEnvironment = {
//   getWorkerUrl: function(moduleId, label) {
//     if (label === 'json') {
//       return './json.worker.js';
//     }
//     if (label === 'css') {
//       return './css.worker.js';
//     }
//     if (label === 'html') {
//       return './html.worker.js';
//     }
//     if (label === 'typescript' || label === 'javascript') {
//       return './ts.worker.js';
//     }
//     return './editor.worker.js';
//   },
// };

// const editor = monaco.editor.create(document.getElementById('container'), {
//   value: [
//     'function x() {',
//     '\tconsole.log("Hello world!");',
//     '}'
//   ].join('\n'),
//   language: 'javascript'
// });

// editor.setValue(`console.log("A new model!")`);

// // editor.setModel({
// //     value: [
// //       'function x() {',
// //       '\tconsole.log("A new model!");',
// //       '}'
// //     ].join('\n'),
// //     language: 'javascript'
// //   });

ReactDOM.render(<MainEditor />, document.getElementById('app'));