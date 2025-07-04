import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const EditAboutUs = () => {
  const [title, setTitle] = useState("About Us");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste rerum voluptatum aut magni ipsam, eaque iure temporibus dolorum molestias id, optio doloribus a libero quos architecto? Cum, magni ullam."
  );

  const [CKEditorComp, setCKEditorComp] = useState(null);
  const ClassicEditorRef = useRef(null);

  useEffect(() => {
    Promise.all([
      import("@ckeditor/ckeditor5-react"),
      import("@ckeditor/ckeditor5-build-classic")
    ]).then(([ckeditorModule, classicEditorModule]) => {
      setCKEditorComp(() => ckeditorModule.CKEditor);
      ClassicEditorRef.current = classicEditorModule.default;
    });
  }, []);

  // Optional: Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_token", "B0v8yvd33pkhf4BL1syxY2BcAjS7O3EFGT43s3uW");
    formData.append("title", title);
    formData.append("description", description);

    console.log("Submitted:", {
      title,
      description,
    });
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <h4 className="m-0">Edit About Us</h4>
          <Link to="/admin/business/about-us" className="btn btn-sm btn-danger">
            <i className="fa fa-arrow-left"></i> Back
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card border-0 rounded-12">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  maxLength="255"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label className="fw-bold">Content</label>
                {CKEditorComp && ClassicEditorRef.current && (
                  <CKEditorComp
                    editor={ClassicEditorRef.current}
                    data={description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDescription(data);
                    }}
                    config={{
                      placeholder: "Write about your business...",
                    }}
                  />
                )}
              </div>
            </div>

            <div className="card-footer text-center">
              <button type="submit" className="btn btn-primary px-4 py-2">
                Save And Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAboutUs;
