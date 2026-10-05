import { describe, it, expect } from "vitest";
import { PAGES } from "./pages";

describe("PAGES", () => {
  it("should have at least one page", () => {
    expect(PAGES.length).toBeGreaterThan(0);
  });

  it("should have unique IDs", () => {
    const ids = PAGES.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  describe("each page", () => {
    PAGES.forEach((page) => {
      describe(`page "${page.id}"`, () => {
        it("should have a valid id", () => {
          expect(page.id).toBeTruthy();
          expect(typeof page.id).toBe("string");
        });

        it("should have a title", () => {
          expect(page.title).toBeTruthy();
          expect(typeof page.title).toBe("string");
        });

        it("should have a phrase", () => {
          expect(page.phrase).toBeTruthy();
          expect(typeof page.phrase).toBe("string");
        });

        it("should have a source with valid URL", () => {
          expect(page.source).toBeTruthy();
          expect(page.source.url).toBeTruthy();
          expect(page.source.url.startsWith("https://")).toBe(true);
        });

        it("should have explanation with intro and bullets", () => {
          expect(page.explain).toBeTruthy();
          expect(page.explain.intro).toBeTruthy();
          expect(Array.isArray(page.explain.bullets)).toBe(true);
          expect(page.explain.bullets.length).toBeGreaterThan(0);
        });

        it("should have code example", () => {
          expect(page.code).toBeTruthy();
          expect(typeof page.code).toBe("string");
        });

        it("should have memo", () => {
          expect(Array.isArray(page.memo)).toBe(true);
          expect(page.memo.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
