import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

const FILES = {
    'index.js': `
module.exports = (req, res) => {
    res.send({
        msg: "Hello!",
        recipient: "World!",
    })
}
    `,
    'blog/a-new-beginning.jsx': `
export default class extends React.Component {
    static async getInitialProps(){
    var json = await fetch("/time")
        .then((resp) => resp.json())
    return {time: json.time}
    }
    render() {
    return <p>Current time is: {this.props.time}</p>
    }
}
    `,
    'profile.jsx': ``,

}

async function getFileContents(filename) {
    const resp = await fetch('/files/' + filename);
    return resp.text();
}

export default function MainEditor() {
    const [selectedFileName, setSelectedFileName] = useState('');
    const [fileNames, setFileNames] = useState([]);
    const [fileContent, setFileContent] = useState("");

    useEffect(() => {
        (async () => {
            const resp = await fetch('/files');
            const foundFileNames = await resp.json();
            setFileNames(foundFileNames);
        })();
    }, []);

    async function editFile(fileName) {
        const contents = await getFileContents(fileName);
        setFileContent(contents);
    }

    useEffect(() => {
        if (selectedFileName !== "") {
            editFile(selectedFileName);
        }
    }, [selectedFileName])

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexBasis: '300px', backgroundColor: '#333', color: '#eee', padding: '16px' }}>
                <h2 style={{ textAlign: "center" }}>Aspen Omni-Server</h2>
                <hr />
                <h3>▼ Code</h3>
                {fileNames.map(fileName => (
                    <div onClick={() => { setSelectedFileName(fileName) }} style={{ padding: '4px', marginLeft: '4px', cursor: 'pointer', backgroundColor: fileName === selectedFileName ? 'cornflowerblue' : '' }} key={fileName}>{fileName}</div>
                ))}
                <h3>► Data</h3>
                <h3>► Users</h3>
                <h3>► Analytics</h3>
            </div>
            <div style={{ flexGrow: 1 }}>
                <div style={{ height: '24px', width: '100%', borderBottom: "2px solid gray", padding: '4px 8px' }}>
                    Editing <span style={{ fontFamily: 'monospace' }}>{selectedFileName}</span>
                </div>
                <Editor height="100%" width="100%" value={fileContent} language="javascript"></Editor>
            </div>
        </div>
    )
}