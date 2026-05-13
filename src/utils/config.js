import RecaptchaProvider from '@/components/RecaptchaProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecaptchaProvider>
          {children}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
