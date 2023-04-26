import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fury Romania Roleplay - The Wiki",
  description: "FiveM Roleplay Server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/furyrp' },
      { icon: 'youtube', link: 'https://www.youtube.com/@FuryRomaniaRoleplay' },
      { icon: 'instagram', link: 'https://www.instagram.com/furyrp.ro/' },
    ]
  }
})
