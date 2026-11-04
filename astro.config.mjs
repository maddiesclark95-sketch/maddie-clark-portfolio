import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://maddieclark.com',
  integrations: [react()],
  // The dev toolbar docks bottom-centre, right over the sticky contact bar.
  devToolbar: { enabled: false },
});
