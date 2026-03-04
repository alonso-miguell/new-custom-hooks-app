import React from 'react';

interface Props {
    title: string;
}

/**
 * We can use memo to avoid re-rendering components
 * when the parent component changes or to avoid re-rendering
 * the father when the child changes, on this way we can re-render each
 * component when really required
 *
 * just add:
 * React.memo( the whole component here );
 */

export const MyTitle =
    React.memo(
        ({title}: Props) => {
            console.log('MyTitle re-render');

            return <h1 className="text-3xl">{title}</h1>;
        }
    );