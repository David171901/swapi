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
});
