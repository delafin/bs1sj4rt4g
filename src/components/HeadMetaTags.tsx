
import Head from 'next/head';
import { type NextPage } from 'next';

type TChildren = {
    children?: React.ReactNode;
}

const HeadMetaTags: NextPage<TChildren> = ({children}) => {
    
    return (
            < Head >
                {/* <!-- IF favicon.html not include --> */}
                <link rel='icon' href='../../public/favicon.ico'/>
                
                {/* <!-- Use Only and Always in `app.tsx` --> */}
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                
                <title>Currency Converter</title>
                
                <meta name='title' content='Currency Converter'/>
                <meta name='description' content='Currency Converter with Next.js, React and Typescript, Redux'/>
                
                {/* <!-- Open Graph / Facebook --> */}
                <meta property='og:type' content='website'/>
                <meta property='og:url' content=''/>
                <meta property='og:title' content='Currency Converter'/>
                <meta property='og:description' content='Currency Converter with Next.js, React and Typescript, Redux'/>
                <meta property='og:image' content='../../public/meta.jpg'/>
                
                {/* <!-- Twitter --> */}
                <meta property='twitter:card' content='summary_large_image'/>
                <meta property='twitter:url' content=''/>
                <meta property='twitter:title' content='Currency Converter'/>
                <meta property='twitter:description' content='Currency Converter with Next.js, React and Typescript, Redux'/>
                <meta property='twitter:image' content='../../public/meta.jpg'/>
            {children}
            </ Head >
    );
}

export default HeadMetaTags;




