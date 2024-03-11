import React, { FC, useState } from 'react';
import axios from 'axios';

interface AllFilesProps {
    name: string;
    size: number;
    type: string;
}

const InputItem: FC = () => {
    const [allFiles, setAllFiles] = useState<AllFilesProps[]>([]);

    const changeFileInput = (event: any) => {
        let files = event.target.files;
        setAllFiles(files);
    }

    const uploadMultipleFiles = () => {

        let uploadedFiles = allFiles;
        let files = [];

        for (let i = 0; i < uploadedFiles.length; i++) files.push({ name: uploadedFiles[i].name })

        axios({
            url: "http://localhost:8000/api/uploadFile",
            method: "POST",
            data: { allFiles: files },
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div>
            <h2>Using the <i> axios </i> to upload multiple files on NodeJs server.</h2>
            <input type="file" multiple onChange={(event) => changeFileInput(event)} />
            <button onClick={() => uploadMultipleFiles()}>Upload Files</button>
        </div>
    );
};

export default InputItem;