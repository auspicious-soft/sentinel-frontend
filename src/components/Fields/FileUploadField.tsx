import { FORM_LABELS } from "@/styles/assets";
import { Upload } from "lucide-react";
import { useState } from "react";
import { GlobalButton } from "../Buttons/GlobalButton";

interface FileUploadFieldProps {
  label?: string;
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  className?: string;
  required?: boolean;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  onFileSelect,
  accept = 'image/*',
  className = '',
  required = false,
}) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
      onFileSelect?.(file);
    }
  };

  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-2 ${className}`}>
      {/* {label && (
        <label className={FORM_LABELS}>
          {label}
          {required && <span className="text-red ml-1">*</span>}
        </label>
      )} */}
      <div className="self-stretch flex flex-col gap-4">
        {/* Logo Preview Area */}
        <div className="w-full h-80 bg-white rounded-[10px] border border-zinc-100 flex items-center justify-center">
          <div className="text-Paragraph text-center">
            <p className="text-sm">Upload Logo</p>
            {fileName && (
              <p className="text-xs mt-1 text-gray-600">{fileName}</p>
            )}
          </div>
        </div>
        
        {/* Upload Button */}
        <div className="relative">
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="sr-only"
            id="logo-upload"
            required={required}
          />
     <GlobalButton
                text={"Upload Images"}
                bgColor="bg-primary-blue"
              />
        </div>
      </div>
    </div>
  );
};

export default FileUploadField