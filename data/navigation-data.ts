export const navigation = {
    categories: [
        {
            id: 'categore',
            name: 'categore',
            featured: [
                {
                    name: 'Cases',
                    href: '/cases',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNtYXJ0cGhvbmUtaWNvbiBsdWNpZGUtc21hcnRwaG9uZSI+PHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSIyIiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMTIgMThoLjAxIi8+PC9zdmc+',
                    imageAlt:
                        'Black phone case with a white geometric pattern on the back.',
                },
                {
                    name: 'Straps',
                    href: '/straps',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdhdGNoLWljb24gbHVjaWRlLXdhdGNoIj48cGF0aCBkPSJNMTIgMTB2Mi4ybDEuNiAxIi8+PHBhdGggZD0ibTE2LjEzIDcuNjYtLjgxLTQuMDVhMiAyIDAgMCAwLTItMS42MWgtMi42OGEyIDIgMCAwIDAtMiAxLjYxbC0uNzggNC4wNSIvPjxwYXRoIGQ9Im03Ljg4IDE2LjM2LjggNGEyIDIgMCAwIDAgMiAxLjYxaDIuNzJhMiAyIDAgMCAwIDItMS42MWwuODEtNC4wNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjYiLz48L3N2Zz4=',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
                {
                    name: 'Power Banks',
                    href: '/power-banks',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNtYXJ0cGhvbmUtY2hhcmdpbmctaWNvbiBsdWNpZGUtc21hcnRwaG9uZS1jaGFyZ2luZyI+PHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjIwIiB4PSI1IiB5PSIyIiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMTIuNjY3IDggMTAgMTJoNGwtMi42NjcgNCIvPjwvc3ZnPg==',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
                {
                    name: 'Cables',
                    href: '/cables',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhYmxlLWljb24gbHVjaWRlLWNhYmxlIj48cGF0aCBkPSJNMTcgMTlhMSAxIDAgMCAxLTEtMXYtMmEyIDIgMCAwIDEgMi0yaDJhMiAyIDAgMCAxIDIgMnYyYTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE3IDIxdi0yIi8+PHBhdGggZD0iTTE5IDE0VjYuNWExIDEgMCAwIDAtNyAwdjExYTEgMSAwIDAgMS03IDBWMTAiLz48cGF0aCBkPSJNMjEgMjF2LTIiLz48cGF0aCBkPSJNMyA1VjMiLz48cGF0aCBkPSJNNCAxMGEyIDIgMCAwIDEtMi0yVjZhMSAxIDAgMCAxIDEtMWg0YTEgMSAwIDAgMSAxIDF2MmEyIDIgMCAwIDEtMiAyeiIvPjxwYXRoIGQ9Ik03IDVWMyIvPjwvc3ZnPg==',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
                {
                    name: 'MagSafe ',
                    href: '/magsafe',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhc3NvLWljb24gbHVjaWRlLWxhc3NvIj48cGF0aCBkPSJNMy43MDQgMTQuNDY3QTEwIDggMCAwIDEgMiAxMGExMCA4IDAgMCAxIDIwIDAgMTAgOCAwIDAgMS0xMCA4IDEwIDggMCAwIDEtNS4xODEtMS4xNTgiLz48cGF0aCBkPSJNNyAyMmE1IDUgMCAwIDEtMi0zLjk5NCIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxNiIgcj0iMiIvPjwvc3ZnPg==',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
                {
                    name: 'Chargers',
                    href: '/chargers',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXphcC1pY29uIGx1Y2lkZS16YXAiPjxwYXRoIGQ9Ik00IDE0YTEgMSAwIDAgMS0uNzgtMS42M2w5LjktMTAuMmEuNS41IDAgMCAxIC44Ni40NmwtMS45MiA2LjAyQTEgMSAwIDAgMCAxMyAxMGg3YTEgMSAwIDAgMSAuNzggMS42M2wtOS45IDEwLjJhLjUuNSAwIDAgMS0uODYtLjQ2bDEuOTItNi4wMkExIDEgMCAwIDAgMTEgMTR6Ii8+PC9zdmc+',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
            ],
        },
        {
            id: 'menu',
            name: 'menu',
            featured: [
                {
                    name: 'Demos',
                    href: '/demos',
                },
                {
                    name: 'Shop',
                    href: '/shop',
                },
                {
                    name: 'Blog',
                    href: '/blog',
                },
                {
                    name: 'About Us',
                    href: '/about-us',
                },
                {
                    name: 'Contact Us',
                    href: '/contact-us',
                },
                {
                    name: 'Privacy Policy',
                    href: '/privacy-policy',
                },
                {
                    name: 'Shipping',
                    href: '/shipping',
                },
                {
                    name: 'Track Order',
                    href: '/track-order',
                },
                {
                    name: 'FAQs',
                    href: '/faqs',
                },
                {
                    name: 'WishList',
                    href: '/wishlist',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0LWljb24gbHVjaWRlLWhlYXJ0Ij48cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIvPjwvc3ZnPg==',
                    imageAlt:
                        'Black phone strap with a white geometric pattern on the back.',
                },
                {
                    name: 'Compare',
                    href: '/compare',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1jb21wYXJlLWFycm93cy1pY29uIGx1Y2lkZS1naXQtY29tcGFyZS1hcnJvd3MiPjxjaXJjbGUgY3g9IjUiIGN5PSI2IiByPSIzIi8+PHBhdGggZD0iTTEyIDZoNWEyIDIgMCAwIDEgMiAydjciLz48cGF0aCBkPSJtMTUgOS0zLTMgMy0zIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxOCIgcj0iMyIvPjxwYXRoIGQ9Ik0xMiAxOEg3YTIgMiAwIDAgMS0yLTJWOSIvPjxwYXRoIGQ9Im05IDE1IDMgMy0zIDMiLz48L3N2Zz4=',
                    imageAlt: 'compare.',
                },
                {
                    name: 'Login / Register',
                    href: '/login',
                    imageSrc:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQtaWNvbiBsdWNpZGUtdXNlci1yb3VuZCI+PGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSI1Ii8+PHBhdGggZD0iTTIwIDIxYTggOCAwIDAgMC0xNiAwIi8+PC9zdmc+',
                    imageAlt: 'login icon with a user silhouette inside a circle.',
                },
            ],
        },
    ],
};