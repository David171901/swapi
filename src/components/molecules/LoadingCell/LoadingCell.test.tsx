import { LoadingCell } from "..";
import { cleanup, render } from "@testing-library/react";

const label = "Loading";

describe("LoadingCell", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<LoadingCell label="Loading"></LoadingCell>);
  });

  test("displays correct label", () => {
    const { getByText } = render(<LoadingCell label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test("applies correct CSS classes", () => {
    const { container } = render(<LoadingCell label={label} />);
    const loadingCell = container.firstChild as HTMLElement;
    const classAttribute = loadingCell.getAttribute("class");
    expect(classAttribute).toContain("loadingCell");
  });
});
