import { LoadingIndicator } from "..";
import { cleanup, render } from "@testing-library/react";

const label = 'Loading';

describe("LoadingIndicator", () => {
  afterEach(cleanup)

  test("should render", () => {
    render(<LoadingIndicator label="Loading"></LoadingIndicator>);
  });

  test('displays correct label', () => {
    const { getByText } = render(<LoadingIndicator label={label} />);
    expect(getByText(label)).toBeDefined();
  });
});
