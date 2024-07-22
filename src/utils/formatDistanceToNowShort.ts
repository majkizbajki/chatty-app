import { formatDistanceToNowStrict } from 'date-fns';

export const formatDistanceToNowShort = (date: string) => {
    const distance = formatDistanceToNowStrict(date);

    return `${distance.replace(' minutes', 'm').replace(' minute', 'm').replace(' hours', 'h').replace(' hour', 'h')} ago`;
};
