import { ReactNode } from 'react';
import { Phone } from '@assets/icons/Phone';
import { Rooms } from '@assets/icons/Rooms';
import { Search } from '@assets/icons/Search';
import { VideoCall } from '@assets/icons/VideoCall';

export type HeaderIconType = 'phone' | 'rooms' | 'search' | 'videocall';

export const headerIcons: Record<HeaderIconType, { icon: ReactNode }> = {
    phone: {
        icon: <Phone key='phone-icon' />
    },
    rooms: {
        icon: <Rooms key='rooms-icon' />
    },
    search: {
        icon: <Search key='search-icon' />
    },
    videocall: {
        icon: <VideoCall key='video-call-icon' />
    }
};
