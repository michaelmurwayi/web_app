import { describe, expect, it } from "vitest";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navigation } from "./Navigation";

import { renderWithProviders } from "@/tests/renderWithProviders";

const mockConfig = {
  brand: {
    name: "CEBBA",
    logo: "/logo.png",
  },

  menuItems: [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "about",
      label: "About",
      path: "/about",
    },
  ],

  resources: [
    {
      id: "calendar",
      label: "Coffee Calendar",
      fileUrl: "/calendar.pdf",
    },
    {
      id: "tariffs",
      label: "Coffee Tariffs",
      fileUrl: "/tariffs.pdf",
    },
  ],
};

describe("Navigation", () => {
  it("renders brand name", () => {
    renderWithProviders(<Navigation config={mockConfig} />);

    expect(screen.getByText("CEBBA")).toBeInTheDocument();
  });

  it("renders logo", () => {
    renderWithProviders(<Navigation config={mockConfig} />);

    expect(screen.getByAltText("CEBBA")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    renderWithProviders(<Navigation config={mockConfig} />);

    expect(screen.getByText("Home")).toBeInTheDocument();

    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders resources button", () => {
    renderWithProviders(<Navigation config={mockConfig} />);

    expect(
      screen.getByRole("button", {
        name: /resources/i,
      }),
    ).toBeInTheDocument();
  });

  it("opens resource menu", async () => {
    const user = userEvent.setup();

    renderWithProviders(<Navigation config={mockConfig} />);

    await user.click(
      screen.getByRole("button", {
        name: /resources/i,
      }),
    );

    expect(screen.getByText("Coffee Calendar")).toBeInTheDocument();

    expect(screen.getByText("Coffee Tariffs")).toBeInTheDocument();
  });

  it("renders downloadable links", async () => {
    const user = userEvent.setup();

    renderWithProviders(<Navigation config={mockConfig} />);

    await user.click(
      screen.getByRole("button", {
        name: /resources/i,
      }),
    );

    const calendar = screen.getByRole("menuitem", {
      name: /coffee calendar/i,
    });

    expect(calendar).toHaveAttribute("href", "/calendar.pdf");
  });
});
