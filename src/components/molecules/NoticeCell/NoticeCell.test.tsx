import { NoticeCell } from "..";
import { cleanup, render } from "@testing-library/react";

describe("NoticeCell", () => {
  afterEach(cleanup)

  test("should render", () => {
    render(<NoticeCell label="Failed to Load Data"></NoticeCell>);
  });

  test('displays correct label', () => {
    const label = 'Failed to Load Data';
    const { getByText } = render(<NoticeCell label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<NoticeCell label="Failed to Load Data" />);
    const loadingCell = container.firstChild as HTMLElement;
    const classAttribute = loadingCell.getAttribute('class');
    expect(classAttribute).toContain('noticeCell');
  });

});