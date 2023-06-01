import { TopBar } from "..";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("TopBar", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(
      <MemoryRouter>
        <TopBar label="People of Star Wars"></TopBar>
      </MemoryRouter>
    );
  });

  test("displays correct label", () => {
    const label = "People of Star Wars";
    const { getByText } = render(
      <MemoryRouter>
        <TopBar label={label}></TopBar>
      </MemoryRouter>
    );
    expect(getByText(label)).toBeDefined();
  });

  test("renders icon when showIcon is true", () => {
    const { container } = render(
      <MemoryRouter>
        <TopBar label="People of Star Wars" showIcon={true}></TopBar>
      </MemoryRouter>
    );
    const iconElement = container.querySelector("img");
    expect(iconElement).toBeDefined();
  });

    test('does not render icon when showIcon is false', () => {
      const { container } = render(
        <MemoryRouter>
          <TopBar label="People of Star Wars" showIcon={false}></TopBar>
        </MemoryRouter>
      );
      const iconElement = container.querySelector('img');
      expect(iconElement).toBeNull();
    });
});
