import { Upload } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '~/shadcn/ui/button';

interface ImportJsonButtonProps {
  onLoad: (content: string) => void;
}

export function ImportJsonButton({ onLoad }: ImportJsonButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportJson = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        const content = e.target?.result as string;
        onLoad(content);
      });
      reader.readAsText(file, 'utf8');
    }
  };

  return (
    <div className="mb-2 flex justify-end">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileChange}
        className="hidden"
        aria-label="hidden file input"
      />
      <Button variant="outline" size="sm" onClick={handleImportJson}>
        <Upload />
        Import JSON
      </Button>
    </div>
  );
}
