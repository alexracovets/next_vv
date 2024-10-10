'use client';

import dynamic from 'next/dynamic';
const Scrollbars = dynamic(() => import('react-custom-scrollbars-2'), { ssr: false });

export const Scroll: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Scrollbars
            autoHeight
            autoHeightMin={'100dvh'}
            renderTrackVertical={props => <div {...props} className={'bg-[#ebd7b22c] top-0 right-0 h-full rounded-[1rem]'} />}
            renderThumbVertical={props => <div {...props} className={'bg-regal-beige rounded-[1rem]'} />}
            universal={true}
        >
            {children}
        </Scrollbars>
    );
}; 