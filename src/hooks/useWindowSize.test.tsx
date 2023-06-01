
import { renderHook } from "@testing-library/react";
import { WindowSize, useWindowSize } from "./useWindowSize ";
import { act } from "react-dom/test-utils";

let useWindowSizeResult: {
  result: {
    current: WindowSize;
  };
};

describe("useWindowSize hook", () => {
  beforeEach(() => {
    useWindowSizeResult = renderHook(() => useWindowSize());
  });

  test("renders correctly", () => {
    expect(useWindowSizeResult.result.current).toBeDefined();
  });

  test("should return initial window size", () => {
    expect(useWindowSizeResult.result.current.width).toEqual(window.innerWidth);
    expect(useWindowSizeResult.result.current.height).toEqual(window.innerHeight);
  });

  test("handles large window sizes", () => {
    const largeWidth = 1024;
    const largeHeight = 768;

    window.innerWidth = largeWidth;
    window.innerHeight = largeHeight;

    expect(useWindowSizeResult.result.current.width).toEqual(largeWidth);
    expect(useWindowSizeResult.result.current.height).toEqual(largeHeight);
  });

  test("handles window size changes", () => {
    const newWidth = 800;
    const newHeight = 600;
  
    act(() => {
      window.innerWidth = newWidth;
      window.innerHeight = newHeight;
      window.dispatchEvent(new Event("resize"));
    });
  
    expect(useWindowSizeResult.result.current.width).toEqual(newWidth);
    expect(useWindowSizeResult.result.current.height).toEqual(newHeight);
  });
});
