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

  test("applies correct CSS classes", () => {
    const { container } = render(<SectionHeader label={label} />);
    const loadingCell = container.firstChild as HTMLElement;
    const classAttribute = loadingCell.getAttribute("class");
    expect(classAttribute).toContain("sectionHeader");
  });
});
