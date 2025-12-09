import { useEffect } from 'react';
import { connect } from '@/lib/mongodb'; 
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    useEffect(() => {
        // Connect to MongoDB
        connect();

        // Load Razorpay script
        const loadRazorpayScript = () => {
            return new Promise<void>((resolve, reject) => {
                if (document.getElementById('razorpay-script')) {
                    resolve(); // Script already loaded
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.id = 'razorpay-script';
                script.async = true;
                script.onload = () => {
                    console.log('Razorpay script loaded successfully');
                    resolve();
                };
                script.onerror = () => {
                    console.error('Failed to load Razorpay script');
                    reject(new Error('Failed to load Razorpay script'));
                };
                document.body.appendChild(script);
            });
        };

        loadRazorpayScript().catch(error => {
            console.error(error);
        });

        // Cleanup script on component unmount
        return () => {
            const script = document.getElementById('razorpay-script');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
