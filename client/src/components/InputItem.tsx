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
        if (!allFiles[0]) {
            alert("Нужно выбрать файл")
            return
        }

        let uploadedFiles = allFiles;
        let files = [];
        const RashireniaPhoto = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".tif", ".raw", ".psd", ".webp", ".heic"];

        for (let i = 0; i < uploadedFiles.length; i++) {
            let status = false;
            for (let j = 0; j < RashireniaPhoto.length; j++) {
                if (uploadedFiles[i].name.includes(RashireniaPhoto[j])) {
                    status = true;
                }
            }
            if (status) files.push({ name: uploadedFiles[i].name })
        }

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