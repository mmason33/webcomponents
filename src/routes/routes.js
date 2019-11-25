export default [
    {
        name: 'Home',
        path: '/',
        content: [
            {
                'header-nav': {
                    textcolor: 'white',
                    background: 'black',
                },
            },
            {
                'hero-section': {
                    textColor: 'black',
                    backgroundImage: '',
                },
            },
            {
                'grid-block': {
                    src: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    objectFit: 'cover',
                    imageOn: 'right',
                    textSectionBgColor: 'tan',
                }
            },
            {
                'grid-block': {
                    src: 'https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    objectFit: 'cover',
                    textSectionBgColor: 'red',
                }
            }
        ],
    },
    {
        name: 'About',
        path: '/about',
        content: [
            {
                'header-nav': {
                    textcolor: 'blue',
                    background: 'green',
                },
            },
            {
                'hero-section': {
                    textColor: 'orange',
                    backgroundImage: '',
                },
            },
            {
                'grid-block': {
                    src: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    objectFit: 'cover',
                    textSectionBgColor: 'blue',
                }
            },
            {
                'grid-block': {
                    src: 'https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    objectFit: 'cover',
                    textSectionBgColor: 'yellow',
                    imageOn: 'right',
                }
            }
        ],
    }
];