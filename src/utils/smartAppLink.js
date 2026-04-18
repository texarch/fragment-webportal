/**
 * Smart App Link Utility for Fragment App
 * 
 * On mobile devices, attempts to open the Fragment app directly.
 * - If the app is installed → opens the app
 *     • Login mode: app checks auth state internally
 *       – Already logged in → user goes straight inside the app
 *       – Not logged in    → login screen is shown
 *     • Signup mode: opens the signup page in the app
 * - If the app is NOT installed → redirects to Play Store (Android) or App Store (iOS)
 * 
 * On desktop, falls back to the web URL as usual.
 */

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.thefragmentapp';
const APP_STORE_URL = 'https://apps.apple.com/in/app/fragment-app/id6476188267';
const FRAGMENT_DEEP_LINK_HOST = 'my.thefragment.app';
const FRAGMENT_UNIVERSAL_LINK = 'https://my.thefragment.app';
const APP_PACKAGE = 'com.thefragmentapp';

const BUSINESS_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.thefragmentbusinessapp';
const BUSINESS_APP_STORE_URL = 'https://apps.apple.com/in/app/fragment-business/id6479656621';
const BUSINESS_UNIVERSAL_LINK = 'https://business.thefragment.app';
const BUSINESS_APP_PACKAGE = 'com.thefragmentbusinessapp';



/**
 * Detect if the current device is a mobile device.
 * Uses both user agent detection AND screen width for reliability
 * (works even in Chrome DevTools responsive mode).
 */
export function isMobileDevice() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

  // Check user agent first
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (mobileUA) return true;

  // Also check for touch support + small screen (catches DevTools responsive mode)
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const smallScreen = window.innerWidth <= 991;
  if (hasTouch && smallScreen) return true;

  // Fallback: just check screen width to match the CSS mobile breakpoint
  return smallScreen;
}

/**
 * Detect if the device is iOS
 */
export function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPad detection
}

/**
 * Detect if the device is Android
 */
export function isAndroid() {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
}

/**
 * Get the appropriate store URL based on the device platform.
 * Defaults to Play Store if platform can't be determined.
 */
export function getStoreUrl() {
  if (isIOS()) return APP_STORE_URL;
  return PLAY_STORE_URL;
}

/**
 * Handle Individual login/signup on mobile.
 * Tries to open the Fragment app; falls back to app store.
 *
 * @param {string} mode - 'login' or 'signup'
 *
 * Flow:
 *   Login  → deep links to app root ("/")
 *            • App is installed & user is logged in  → straight inside the app
 *            • App is installed & user is NOT logged in → login screen
 *            • App is NOT installed → Play Store / App Store
 *
 *   Signup → deep links to "/signup"
 *            • App is installed → signup page opens
 *            • App is NOT installed → Play Store / App Store
 */
export function openFragmentApp(mode = 'login') {
  // ── Desktop: just open the web URL ──
  if (!isMobileDevice()) {
    const webPath = mode === 'login' ? '/login' : '/signup';
    window.open(`${FRAGMENT_UNIVERSAL_LINK}${webPath}`, '_blank');
    return;
  }

  // ── Mobile: try app, fallback to store ──
  const storeUrl = getStoreUrl();
  const appPath = mode === 'login' ? '/login' : '/signup';

  if (isAndroid()) {
    // Android Intent:
    // Opens the app using its custom scheme, which bypasses the strict verification
    // required for HTTPS App Links on Android.
    // If the app is NOT installed, S.browser_fallback_url handles the Play Store redirect.
    const intentPath = mode === 'login' ? 'login' : 'signup';
    const intentUrl =
      `intent://${intentPath}#Intent;` +
      `scheme=thefragmentapp;` +
      `package=${APP_PACKAGE};` +
      `action=android.intent.action.VIEW;` +
      `S.browser_fallback_url=${encodeURIComponent(storeUrl)};` +
      `end;`;

    window.location.href = intentUrl;

  } else if (isIOS()) {
    // iOS: Try the universal link first.
    const universalLink = `${FRAGMENT_UNIVERSAL_LINK}${appPath}`;
    let appOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden || document.webkitHidden) {
        appOpened = true;
        cleanup();
      }
    };

    const handleBlur = () => {
      appOpened = true;
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    // Try opening via universal link
    window.location.assign(universalLink);

    // Fallback: if app didn't open within 2.5s, go to App Store
    setTimeout(() => {
      cleanup();
      if (!appOpened && !document.hidden) {
        window.location.assign(storeUrl);
      }
    }, 2500);

  } else {
    // Unknown mobile platform → go straight to Play Store
    window.location.assign(storeUrl);
  }
}

/**
 * Handle Organiser login/signup on mobile.
 * Tries to open the Fragment Business app; falls back to app store.
 */
export function openFragmentBusinessApp(mode = 'login') {
  if (!isMobileDevice()) {
    const webPath = mode === 'login' ? '/login' : '/signup';
    window.open(`${BUSINESS_UNIVERSAL_LINK}${webPath}`, '_blank');
    return;
  }

  const storeUrl = isIOS() ? BUSINESS_APP_STORE_URL : BUSINESS_PLAY_STORE_URL;
  const appPath = mode === 'login' ? '/login' : '/signup';

  if (isAndroid()) {
    const intentPath = mode === 'login' ? 'login' : 'signup';
    const intentUrl =
      `intent://${intentPath}#Intent;` +
      `scheme=fragmentbusiness;` +
      `package=${BUSINESS_APP_PACKAGE};` +
      `action=android.intent.action.VIEW;` +
      `S.browser_fallback_url=${encodeURIComponent(storeUrl)};` +
      `end;`;

    window.location.href = intentUrl;

  } else if (isIOS()) {
    const universalLink = `${BUSINESS_UNIVERSAL_LINK}${appPath}`;
    let appOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden || document.webkitHidden) {
        appOpened = true;
        cleanup();
      }
    };

    const handleBlur = () => {
      appOpened = true;
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    window.location.assign(universalLink);

    setTimeout(() => {
      cleanup();
      if (!appOpened && !document.hidden) {
        window.location.assign(storeUrl);
      }
    }, 2500);

  } else {
    window.location.assign(storeUrl);
  }
}
