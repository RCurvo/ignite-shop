import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    gap: '3rem',
    width: "100%",
    maxWidth: 'calc(100vw - ((100vw -   1180px)/2))',
    marginLeft: 'auto'

})

export const Product = styled('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },
    footer: {
        position: 'absolute',
        bottom: "0.25rem",
        left: "0.25rem",
        right: "0.25rem",
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})