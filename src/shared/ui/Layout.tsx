// src/shared/layout/Layout.tsx
import { ReactNode } from "react";
import { cn } from "@shared/utils";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <header className="p-4 shadow-md border-b">
        <h1 className="text-2xl font-bold">📊 Marketing Dashboard</h1>
      </header>
      <main className="p-6 container mx-auto">{children}</main>
    </div>
  );
};