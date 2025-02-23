import UserList from "./UserList";
import { render, waitFor } from "@testing-library/react";

describe("UserList tests", () => {
  let mockFetch;

  beforeEach(() => {
    mockFetch = jest.spyOn(global, "fetch");
    mockFetch.mockClear();
  });

  afterEach(() => {
    mockFetch.mockRestore();
  });
  it("should renders loading state initially", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });
    const { getByText } = render(<UserList></UserList>);
    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
    await waitFor(() => {
      expect(loadingElement).not.toBeInTheDocument();
  })
  });

  it("should render error message when API request fails", async () => {
    mockFetch.mockRejectedValue(new Error("API request failed"));
    const { getByText } = render(<UserList></UserList>);
    await waitFor(() => {
      const errorElement = getByText("Error: API request failed");
      expect(errorElement).toBeInTheDocument();
    });
  });

  it("should renders the list of users", async () => {
    const mockUsers = [
      { id: 1, name: "John" },
      { id: 2, name: "Smith" },
    ];

    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUsers),
    });

    const { getByText } = render(<UserList></UserList>);
    await waitFor(() => {
      const userAElement = getByText("John");
      const userBElement = getByText("Smith");
      expect(userAElement).toBeInTheDocument();
      expect(userBElement).toBeInTheDocument();
    });
  });
});
