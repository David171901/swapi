import { SectionHeader } from "..";
import { cleanup, render } from "@testing-library/react";

describe("SectionHeader", () => {
  afterEach(cleanup)

  test("should render", () => {
    render(<SectionHeader label="General Information"></SectionHeader>);
  });

  test('displays correct label', () => {
    const label = 'General Information';
    const { getByText } = render(<SectionHeader label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<SectionHeader label="General Information" />);
    const loadingCell = container.firstChild as HTMLElement;
    const classAttribute = loadingCell.getAttribute('class');
    expect(classAttribute).toContain('sectionHeader');
  });

});