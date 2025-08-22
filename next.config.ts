import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindcss.com',
                port: '',
                pathname: '/plus-assets/img/ecommerce-images/**',
            },
            new URL( 'https://tailwindcss.com/plus-assets/img/ecommerce-images/**' ),
        ],
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl( nextConfig );
// module.exports = {
//     images: {
//         remotePatterns: [ new URL( 'https://tailwindcss.com/plus-assets/img/ecommerce-images/**' ) ],
//     },
// }