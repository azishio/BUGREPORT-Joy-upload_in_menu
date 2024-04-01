import { CssBaseline, CssVarsProvider } from "@mui/joy";
import type { ReactNode } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<CssVarsProvider>
				<CssBaseline />
				<body>{children}</body>
			</CssVarsProvider>
		</html>
	);
}
