import { LoadingIndicator } from "..";
import { cleanup, render } from "@testing-library/react";

describe("LoadingIndicator", () => {
  afterEach(cleanup)

  test("should render", () => {
    render(<LoadingIndicator label="Loading"></LoadingIndicator>);
  });

  test('displays correct label', () => {
    const label = 'Loading';
    const { getByText } = render(<LoadingIndicator label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<LoadingIndicator label="Loading" />);
    const loadingIndicator = container.firstChild as HTMLElement;
    const classAttribute = loadingIndicator.getAttribute('class');
    expect(classAttribute).toContain('loadingIndicator');
  });

});
