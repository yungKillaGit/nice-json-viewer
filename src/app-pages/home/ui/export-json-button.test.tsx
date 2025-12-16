import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ExportJsonButton } from './export-json-button';

describe('ExportJsonButton', () => {
  it('renders the button', () => {
    render(<ExportJsonButton text={JSON.stringify({ key: 'value' })} />);
    expect(screen.getByText(/Export JSON/i)).toBeInTheDocument();
  });

  it('disables the button when text is empty', () => {
    render(<ExportJsonButton text="" />);
    const button = screen.getByText(/Export JSON/i);
    expect(button).toBeDisabled();
  });

  it('enables the button when text is provided', () => {
    render(<ExportJsonButton text={JSON.stringify({ key: 'value' })} />);
    const button = screen.getByText(/Export JSON/i);
    expect(button).not.toBeDisabled();
  });

  it('triggers file download with correct content', () => {
    const createObjectURLMock = vi.fn(() => 'blob:http://localhost/fake-url');
    globalThis.URL.createObjectURL = createObjectURLMock;

    render(<ExportJsonButton text={JSON.stringify({ key: 'value' })} />);
    const button = screen.getByText(/Export JSON/i);

    const anchorSpy = vi.spyOn(document, 'createElement');

    fireEvent.click(button);

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(anchorSpy).toHaveBeenCalledWith('a');

    const anchorElement = anchorSpy.mock.results[0].value as HTMLAnchorElement;
    expect(anchorElement.href).toBe('blob:http://localhost/fake-url');
    expect(anchorElement.download).toMatch(/json-export-\d{4}-\d{2}-\d{2}\.json/);
  });
});
