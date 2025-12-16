import { Download } from 'lucide-react';
import { Button } from '~/shadcn/ui/button';

interface ExportJsonButtonProps {
  text?: string;
  disabled?: boolean;
}

export function ExportJsonButton({ text, disabled }: ExportJsonButtonProps) {
  const handleExportJson = () => {
    if (!text) {
      return;
    }

    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `json-export-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mb-2 flex justify-end">
      <Button variant="outline" size="sm" onClick={handleExportJson} disabled={disabled || !text}>
        <Download />
        Export JSON
      </Button>
    </div>
  );
}
