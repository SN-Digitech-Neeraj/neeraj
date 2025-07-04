import React, { useState, useEffect, useRef } from 'react';

const DescriptionEditor = () => {
  const [description, setDescription] = useState('');
  const [CKEditorComp, setCKEditorComp] = useState(null);
  const ClassicEditorRef = useRef(null);

  useEffect(() => {
    // Dynamically import both CKEditor and ClassicEditor only on client side
    Promise.all([
      import('@ckeditor/ckeditor5-react'),
      import('@ckeditor/ckeditor5-build-classic'),
    ]).then(([ckeditorModule, classicEditorModule]) => {
      setCKEditorComp(() => ckeditorModule.CKEditor);
      ClassicEditorRef.current = classicEditorModule.default;
    });
  }, []);

  return (
    <div className="mt-3">
      <label htmlFor="description">
        Description <span className="text-danger">*</span>
      </label>

      {/* CKEditor */}
      <div className="ck ck-reset ck-editor ck-rounded-corners" role="application">
        {CKEditorComp && ClassicEditorRef.current && (
          <CKEditorComp
            editor={ClassicEditorRef.current}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            config={{
              placeholder: "Enter description...",
            }}
          />
        )}
      </div>

      {/* Hidden textarea for form submission */}
      <textarea
        name="description"
        id="description"
        value={description}
        style={{ display: 'none' }}
        readOnly
      />
    </div>
  );
};

export default DescriptionEditor;
