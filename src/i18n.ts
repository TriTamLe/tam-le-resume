import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hero: {
      title: 'Hi, I am Tâm Lê.',
      body:
        'Clean starter layout without default Vite placeholders. Tailwind v4 + DaisyUI are ready for your resume/portfolio.',
      primary: 'View Resume',
      secondary: 'Contact',
    },
    summary: {
      heading: 'Summary',
      role: 'Front-end Engineer',
      desc: 'Focus on UX, performance, and accessibility.',
    },
    tools: {
      heading: 'Stack',
      body: 'Vue · Vite · TypeScript with Tailwind v4 and DaisyUI themes.',
    },
    status: {
      heading: 'Status',
      body: 'Available for new projects. Try switching themes and languages.',
    },
    navbar: {
      theme: 'theme',
      lang: 'Language',
    },
  },
  vi: {
    hero: {
      title: 'Xin chào, tôi là Tâm Lê.',
      body:
        'Bố cục khởi đầu sạch, đã bỏ placeholder mặc định Vite. Tailwind v4 + DaisyUI sẵn sàng cho CV/portfolio.',
      primary: 'Xem CV',
      secondary: 'Liên hệ',
    },
    summary: {
      heading: 'Tóm tắt',
      role: 'Front-end Engineer',
      desc: 'Ưu tiên trải nghiệm người dùng, tốc độ và khả năng truy cập.',
    },
    tools: {
      heading: 'Công cụ',
      body: 'Vue · Vite · TypeScript cùng Tailwind v4 và DaisyUI theme.',
    },
    status: {
      heading: 'Trạng thái',
      body: 'Sẵn sàng nhận dự án. Thử đổi theme và ngôn ngữ.',
    },
    navbar: {
      theme: 'giao diện',
      lang: 'Ngôn ngữ',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages,
})

export type AppLocale = keyof typeof messages
