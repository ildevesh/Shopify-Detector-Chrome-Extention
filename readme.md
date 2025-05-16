# Shopify Store Detector Chrome Extension

## Description
This Chrome extension automatically detects if the current website is built using Shopify and displays a banner at the top of the page indicating the detection.

## Installation
1. Download or clone the repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing the extension files (`manifest.json` and `content.js`).

## Usage
- Visit any website.
- If the website is detected as Shopify-based, a green banner will appear at the top of the page stating **"Built with Shopify"**.
- The banner includes a close (×) button to dismiss it.
- The banner also displays the branding **"Designed by ildevesh"** below the main message.

## Files
- `manifest.json` — Extension configuration.
- `content.js` — Script that performs detection and injects the banner.

