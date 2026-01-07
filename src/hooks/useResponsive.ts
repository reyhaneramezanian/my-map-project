import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type QueryType = 'up' | 'down' | 'between' | 'only';

export function useResponsive(query: QueryType, key: Breakpoint, start?: Breakpoint, end?: Breakpoint) {
	const theme = useTheme();

	const mediaUp = useMediaQuery(theme.breakpoints.up(key));
	const mediaDown = useMediaQuery(theme.breakpoints.down(key));
	const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

	const mediaBetween =
		start !== undefined && end !== undefined ? useMediaQuery(theme.breakpoints.between(start, end)) : false;

	if (query === 'up') return mediaUp;
	if (query === 'down') return mediaDown;
	if (query === 'only') return mediaOnly;
	if (query === 'between') return mediaBetween;
}
