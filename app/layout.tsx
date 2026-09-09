import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Surya Overseas | Premium Immigration Consultancy',
  description: 'Expert immigration guidance for study, permanent residency, settlement and global opportunities.',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Surya Overseas',
    description: 'Expert immigration guidance for study, permanent residency, settlement and global opportunities.',
    type: 'website',
    images: [{ url: '/logo.jpeg' }],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 1. Immediately strip browser extension attributes (Bitdefender, etc.)
                try {
                  var stripExtAttrs = function(el) {
                    if (!el || el.nodeType !== 1) return;
                    if (el.hasAttribute('bis_skin_checked')) el.removeAttribute('bis_skin_checked');
                    if (el.hasAttribute('bis_frame_id')) el.removeAttribute('bis_frame_id');
                    if (el.hasAttribute('bis_size')) el.removeAttribute('bis_size');
                  };

                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        if (m.attributeName && m.attributeName.indexOf('bis_') === 0) {
                          m.target.removeAttribute(m.attributeName);
                        }
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node.nodeType === 1) {
                            stripExtAttrs(node);
                            var matches = node.querySelectorAll ? node.querySelectorAll('[bis_skin_checked],[bis_frame_id],[bis_size]') : [];
                            for (var k = 0; k < matches.length; k++) {
                              stripExtAttrs(matches[k]);
                            }
                          }
                        }
                      }
                    }
                  });

                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    childList: true,
                    attributeFilter: ['bis_skin_checked', 'bis_frame_id', 'bis_size']
                  });
                } catch(e) {}

                // 2. Prevent Next.js DevOverlay popup from browser extension hydration false-positives
                try {
                  var origError = console.error;
                  console.error = function() {
                    var text = '';
                    for (var i = 0; i < arguments.length; i++) {
                      var arg = arguments[i];
                      if (typeof arg === 'string') text += ' ' + arg;
                      else if (arg && arg.message) text += ' ' + arg.message;
                    }
                    if (text.indexOf('bis_skin_checked') !== -1 || text.indexOf('bis_frame_id') !== -1) {
                      return; // suppress false-positive browser extension hydration mismatch
                    }
                    return origError.apply(console, arguments);
                  };
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans text-text-charcoal bg-primary-ivory" suppressHydrationWarning>
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen pt-20 lg:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
