import * as React from 'react';
import { render } from 'react-dom';

const defaultTheme = 'white';
type ThemeContextType = {
	theme: string;
	setTheme: (value: string) => void;
};
const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

type Props = {
	children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = React.useState(defaultTheme);

	React.useEffect(() => {
		// We'd get the theme from a web API / local storage in a real app
		// We've hardcoded the theme in our example
		const currentTheme = 'lightblue';
		setTheme(currentTheme);
	}, []);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);

const Header = () => {
	const { theme, setTheme } = useTheme()!;
	return (
		<div style={{ backgroundColor: theme }}>
			<select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
				<option value="white">White</option>
				<option value="lightblue">Blue</option>
				<option value="lightgreen">Green</option>
			</select>
			<span>Hello!</span>
		</div>
	);
};

const UseContextExample = () => (
	<ThemeProvider>
		<Header />
	</ThemeProvider>
);
export default UseContextExample;