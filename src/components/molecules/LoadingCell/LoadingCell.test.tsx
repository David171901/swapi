import { LoadingCell } from "..";
import { cleanup, render } from "@testing-library/react";

describe("LoadingCell", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<LoadingCell label="Loading"></LoadingCell>);
  });

  test("displays correct label", () => {
    const label = "Loading";
    const { getByText } = render(<LoadingCell label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test("applies correct CSS classes", () => {
    const { container } = render(<LoadingCell label="Loading" />);
    const loadingCell = container.firstChild as HTMLElement;
    const classAttribute = loadingCell.getAttribute("class");
    expect(classAttribute).toContain("loadingCell");
  });
});
