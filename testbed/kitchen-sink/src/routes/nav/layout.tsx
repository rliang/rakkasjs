import { ReactNode, Suspense, useState } from "react";
import { StyledLink, StyledLinkProps, useLocation } from "rakkasjs";

export default function NavLayout({ children }: { children: ReactNode }) {
	const [clicked, setClicked] = useState(0);
	const { current: url } = useLocation();

	const linkProps: StyledLinkProps = {
		activeStyle: {
			fontWeight: "bold",
		},

		pendingStyle: {
			color: "red",
		},
	};

	return (
		<>
			<button onClick={() => setClicked((old) => old + 1)}>
				State test: {clicked}
			</button>

			<div
				style={url.searchParams.get("scroll") ? { height: "200vh" } : undefined}
			/>

			<nav>
				<ul>
					<li>
						<StyledLink {...linkProps} href="/nav">
							Nav Home
						</StyledLink>
					</li>
					<li>
						<StyledLink {...linkProps} href="/nav/a">
							Page A
						</StyledLink>
					</li>
					<li>
						<StyledLink {...linkProps} href="/nav/b">
							Page B
						</StyledLink>
					</li>
				</ul>
			</nav>
			<Suspense fallback="Loading...">{children}</Suspense>
		</>
	);
}
