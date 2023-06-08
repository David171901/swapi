import { NoticeCell } from "..";
import { cleanup, render } from "@testing-library/react";

const label = "Failed to Load Data";

describe("NoticeCell", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<NoticeCell label={label}></NoticeCell>);
  });

  test("displays correct label", () => {
    const { getByText } = render(<NoticeCell label={label} />);
    expect(getByText(label)).toBeDefined();
  });
});
