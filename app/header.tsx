import ThemeController from '@/app/themeChoosing/themeController'
interface CustomCSSProperties extends React.CSSProperties {
    '--header-height'?: string;
}
export default function Header(){
    return (
        <header className="flex justify-between items-center p-4" style={{ '--header-height': '4rem' } as CustomCSSProperties}>
            <h1 className="text-4xl">Header Title</h1>
            <ThemeController/>
        </header>
    );
}
