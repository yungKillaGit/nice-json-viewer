import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ImportJsonButton } from './import-json-button';

describe('ImportJsonButton', () => {
  it('renders the button', () => {
    render(<ImportJsonButton onLoad={vi.fn()} />);
    expect(screen.getByText(/Import JSON/i)).toBeInTheDocument();
  });

  it('opens file input dialog on button click', () => {
    render(<ImportJsonButton onLoad={vi.fn()} />);
    const fileInput = screen.getByLabelText(/hidden file input/i);
    const button = screen.getByText(/Import JSON/i);

    const clickSpy = vi.spyOn(fileInput, 'click');
    fireEvent.click(button);

    expect(clickSpy).toHaveBeenCalled();
  });

  it('calls onLoad with file content when a file is selected', async () => {
    const mockOnLoad = vi.fn();
    render(<ImportJsonButton onLoad={mockOnLoad} />);

    const fileInput = screen.getByLabelText(/hidden file input/i);
    const file = new File(['{"key":"value"}'], 'test.json', { type: 'application/json' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mockOnLoad).toHaveBeenCalledWith('{"key":"value"}');
  });
});
