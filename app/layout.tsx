import "@/styles/globals.css"
import { HeaderSection } from "@/components/layout/header-section";
import { FooterSection } from "@/components/layout/footer-section";
import ReduxProvider from '@/lib/ReduxProvider';

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
	  
        <HeaderSection />
        <ReduxProvider>
          {children}
        </ReduxProvider>          
        <FooterSection />
	  </body>
    </html>
  )
}
