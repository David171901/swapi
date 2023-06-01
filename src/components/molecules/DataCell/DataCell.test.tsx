import { DataCell } from "./DataCell";
import { cleanup, render } from "@testing-library/react";

describe("DataCell", () => {
  afterEach(cleanup);


  test("should render", () => {
    render(<DataCell leftText="Eye Color" rightText="Blue"></DataCell>);
  });

  test("displays correct left and right text", () => {
    const leftText = "Left";
    const rightText = "Right";
    const { getByText } = render(
      <DataCell leftText={leftText} rightText={rightText} />
    );
    expect(getByText(leftText)).toBeDefined();
    expect(getByText(rightText)).toBeDefined();
  });

  test("applies correct CSS classes", () => {
    const { container } = render(
      <DataCell leftText="Left" rightText="Right" />
    );
    const dataCell = container.firstChild as HTMLElement;
    const classAttribute = dataCell.getAttribute('class');
    expect(classAttribute).toContain("dataCell");
  });
});
