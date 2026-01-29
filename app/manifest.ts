import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Navagatha Mercantile Fleet Management',
        short_name: 'Navagatha',
        description: 'Premier Ship Management and Crewing Services active in global maritime trade.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/brand-logo.png?v=10',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
