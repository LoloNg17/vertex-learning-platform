import type { Metadata } from "next";
import DesignSystem from "./design-system";

export const metadata: Metadata = {
  title: "Vertex Design System",
  description:
    "Colors, typography, components, and principles for the Vertex learning platform.",
};

export default function DesignSystemPage() {
  return <DesignSystem />;
}
