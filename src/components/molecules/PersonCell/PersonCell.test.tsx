import { PersonCell } from "..";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const name = "Luke Skywalker";
const description = "Human from Tatooine";
const id = "1";

describe("PersonCell", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(
      <MemoryRouter>
        <PersonCell name={name} description={description} id={id}></PersonCell>
      </MemoryRouter>
    );
  });

  test("displays correct name and description text", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PersonCell name={name} description={description} id={id}></PersonCell>
      </MemoryRouter>
    );
    expect(getByText(name)).toBeDefined();
    expect(getByText(description)).toBeDefined();
  });

  test("applies correct CSS classes", () => {
    const name = "Luke Skywalker";
    const description = "Human from Tatooine";
    const { container } = render(
      <MemoryRouter>
        <PersonCell name={name} description={description} id={id}></PersonCell>
      </MemoryRouter>
    );
    const personCell = container.firstChild?.firstChild as HTMLElement;
    const classAttribute = personCell.getAttribute("class");
    expect(classAttribute).toContain("personCell");
  });
});
