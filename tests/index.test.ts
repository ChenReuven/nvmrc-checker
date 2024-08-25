import { checkNvmrc } from "../src/index";
import fs from "fs";
import path from "path";

jest.mock("fs");
jest.mock("path");

describe("checkNvmrc", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return true if .nvmrc exists in the current directory", () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (path.join as jest.Mock).mockReturnValue("/test/.nvmrc");

    expect(checkNvmrc("/test")).toBe(true);
  });

  it("should return true if .nvmrc exists in a subdirectory", () => {
    (fs.existsSync as jest.Mock)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    (fs.readdirSync as jest.Mock).mockReturnValue([
      { name: "subdir", isDirectory: () => true },
    ]);
    (path.join as jest.Mock)
      .mockReturnValueOnce("/test/.nvmrc")
      .mockReturnValueOnce("/test/subdir");

    expect(checkNvmrc("/test")).toBe(true);
  });

  it("should return false if .nvmrc does not exist in the directory or subdirectories", () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    (fs.readdirSync as jest.Mock).mockReturnValue([]);

    expect(checkNvmrc("/test")).toBe(false);
  });
});
