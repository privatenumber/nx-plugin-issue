export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
	className,
	children,
	...attrs
}) => (
	<button
		{...attrs}
	>
		{children}
	</button>
);
