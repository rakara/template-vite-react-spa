import { describe, expect, it } from "vitest";
import { getSafeInternalPath } from "@/lib/navigation";

describe("getSafeInternalPath", () => {
  it("accepts a local application path", () => {
    expect(getSafeInternalPath("/app?tab=users#list")).toBe("/app?tab=users#list");
  });

  it("rejects external and protocol-relative destinations", () => {
    expect(getSafeInternalPath("https://attacker.example")).toBe("/app");
    expect(getSafeInternalPath("//attacker.example")).toBe("/app");
  });

  it("uses the fallback for malformed input", () => {
    expect(getSafeInternalPath(null, "/")).toBe("/");
    expect(getSafeInternalPath("/\\\\attacker.example")).toBe("/app");
  });
});
