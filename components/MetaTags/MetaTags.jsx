import Head from 'next/head';

export default function MetaTags() {
  return (
    <Head>
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />

      {/* Icons */}
      <link href="share/favicon.ico" rel="shortcut icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="share/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="share/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="share/favicon-16x16.png"
      />

      <link
        rel="mask-icon"
        href="share/safari-pinned-tab.svg"
        color="#0f4229"
      />

      <link rel="manifest" href="share/manifest.json" />

      {/* Open Graph */}
      <meta property="og:locale" content="ru-RU" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://smtexx.github.io/focus"
      />
      <meta
        property="og:title"
        content="GreenGard - Превратим Ваш участок в оазис!"
      />
      <meta
        property="og:description"
        content="GreenGard - ландшафтный дизайн и озеленение территории. Профессиональные услуги по созданию уникального дизайна сада вашей мечты. Установка систем полива, устройство водоемов и многое другое. Качественные материалы и индивидуальный подход к каждому проекту."
      />
      <meta
        property="og:image"
        content="https://smtexx.github.io/focus/share/ogg-image-wide.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Description */}
      <meta
        name="description"
        content="GreenGard - ландшафтный дизайн и озеленение территории. Профессиональные услуги по созданию уникального дизайна сада вашей мечты. Установка систем полива, устройство водоемов и многое другое. Качественные материалы и индивидуальный подход к каждому проекту."
      />
    </Head>
  );
}
