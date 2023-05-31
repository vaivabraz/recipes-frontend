import { ChangeEvent, useState } from "react";

export default function Files() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  console.log("selected file:", file);

  return (
    <div>
      <form method="post" encType="multipart/form-data">
        <div>
          <label htmlFor="image_uploads">
            Choose images to upload (PNG, JPG)
          </label>
          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="preview">
          {file ? (
            <img src={URL.createObjectURL(file)} width={320} />
          ) : (
            <p>No files currently selected for upload</p>
          )}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
