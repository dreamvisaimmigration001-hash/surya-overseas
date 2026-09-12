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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Surya Overseas',
    description: 'Expert immigration guidance for study, permanent residency, settlement and global opportunities.',
    type: 'website',
    images: [{ url: '/logo.png' }],
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

                // 2. Prevent Next.js DevOverlay popup from browser extension hydration false-positives and runtime crashes
                try {
                  var isExtError = function(msg, url, stack) {
                    var str = (msg || '') + ' ' + (url || '') + ' ' + (stack || '');
                    return str.indexOf('chrome-extension://') !== -1 ||
                           str.indexOf('moz-extension://') !== -1 ||
                           str.indexOf('safari-extension://') !== -1 ||
                           str.indexOf('M_ID') !== -1 ||
                           str.indexOf('bis_skin_checked') !== -1 ||
                           str.indexOf('bis_frame_id') !== -1;
                  };

                  var origError = console.error;
                  console.error = function() {
                    var text = '';
                    for (var i = 0; i < arguments.length; i++) {
                      var arg = arguments[i];
                      if (typeof arg === 'string') text += ' ' + arg;
                      else if (arg && arg.message) text += ' ' + arg.message;
                      else if (arg && arg.stack) text += ' ' + arg.stack;
                    }
                    if (isExtError(text)) {
                      return; // suppress false-positive browser extension error
                    }
                    return origError.apply(console, arguments);
                  };

                  // Intercept unhandled window errors thrown by browser extension scripts (e.g. Urban VPN / 200.js)
                  window.addEventListener('error', function(event) {
                    var msg = event.message || '';
                    var url = event.filename || '';
                    var stack = (event.error && event.error.stack) || '';
                    if (isExtError(msg, url, stack)) {
                      event.stopImmediatePropagation();
                      event.preventDefault();
                      return true;
                    }
                  }, true);

                  // Intercept unhandled promise rejections from extensions
                  window.addEventListener('unhandledrejection', function(event) {
                    var reason = event.reason || {};
                    var msg = reason.message || (typeof reason === 'string' ? reason : '');
                    var stack = reason.stack || '';
                    if (isExtError(msg, '', stack)) {
                      event.stopImmediatePropagation();
                      event.preventDefault();
                    }
                  }, true);

                  // Wrap window.onerror as fallback
                  var prevOnError = window.onerror;
                  window.onerror = function(msg, url, line, col, error) {
                    var stack = (error && error.stack) || '';
                    if (isExtError(msg, url, stack)) {
                      return true;
                    }
                    if (typeof prevOnError === 'function') {
                      return prevOnError.apply(window, arguments);
                    }
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
