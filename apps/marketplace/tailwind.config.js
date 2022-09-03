const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                primary: '#dd0115',
                secondary: '#fbd947',
                hover: '#2f4858',
            },
        },
    },
    plugins: [
        require('ps-scrollbar-tailwind'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.bg-full': {
                    backgroundSize: '100% 100%',
                },
                '.border-right': {
                    borderStyle: 'solid',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderRightWidth: 0,
                },
                '.border-down': {
                    borderStyle: 'solid',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomWidth: 0,
                },
                '.border-left': {
                    borderStyle: 'solid',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderLeftWidth: 0,
                },
                '.text-elite': {
                    textShadow: '0 0 10px #166edc, 0 0 5px #45d1f5',
                },
                '.text-legendary': {
                    textShadow: '0 0 10px #F9C20E, 0 0 5px #FFF901',
                },
                '.bg-gradient': {
                    background: 'linear-gradient(to bottom, #eb3349 , #f45c43)',
                },
                '.bg-blue-gradient': {
                    background: 'linear-gradient(180deg, #092477 0%, #3a529b 78.65%)',
                },
            });
        }),
    ],
};
