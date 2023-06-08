import { SectionHeader } from "..";
import { cleanup, render } from "@testing-library/react";

const label = "General Information";

describe("SectionHeader", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<SectionHeader label={label}></SectionHeader>);
  });

  test("displays correct label", () => {
    const { getByText } = render(<SectionHeader label={label} />);
    expect(getByText(label)).toBeDefined();
  });
});
