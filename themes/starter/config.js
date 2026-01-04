/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-white.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Engineered to Endure', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Delivered by OFHardware & Sino-mag', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Brochure ', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '/article/brochure', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Follow US', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://www.facebook.com/ofhardware', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/facebook-transparent-custom.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: 'Contact US',
  STARTER_NAV_BUTTON_2_URL: '/article/contact',
  
  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Feature', // 特性
  STARTER_FEATURE_TEXT_1: 'Engineered to Endure', // 特性
  STARTER_FEATURE_TEXT_2:
    'We sell hardwares over different countries as a “value” oriented Manufacturer-Distributor of High quality architectural hardware. While balancing the quality and competitive pricing, we also keep a high level of customer service. ', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Precision Engineering & Durability', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'We implement a rigorous multi-stage inspection process to ensure every hinge meets exacting standards. Utilizing high-precision automated production lines, we maintain strict tolerances and structural integrity. Each batch undergoes 50,000+ cycle tests and salt spray testing, guaranteeing smooth operation and long-term durability in any environment.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Superior Material Integrity', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'Our hinges are forged from high-grade cold-rolled steel or premium stainless steel, providing exceptional load-bearing capacity. We utilize advanced electroplating and anti-oxidation coatings to prevent rust and corrosion. This commitment to material excellence ensures our products maintain their aesthetic finish and functional strength for decades.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Customization & OEM/ODM', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Recognizing that every project is unique, we offer flexible OEM and ODM services to meet specific design requirements. Our R&D team works closely with clients to develop custom sizes, finishes, and soft-close mechanisms. We transform your concepts into market-ready hardware solutions with rapid prototyping and scalable production.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'After-Sales & Warranty', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'We stand firmly behind our products with a proactive after-sales service system. From technical installation guidance to a hassle-free replacement warranty, we prioritize customer peace of mind. Our dedicated support team responds to inquiries within 24 hours, ensuring that any operational issues are resolved swiftly and professionally.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'OFHardware',
  STARTER_ABOUT_TEXT:
    'OFHardware (Pinghu SinoMag Hardware Co.,Ltd) located in the beautiful scenery of the Hangjiahu,Suilun Industrial District. <br /> <br /> We supply high quality brand goods and let our customers feel best goods with best price and service.',
  STARTER_ABOUT_BUTTON_TEXT: 'Read More',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: 'Customers',
  STARTER_ABOUT_TIPS_3: 'Are using our products',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Customer Feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What our customers say',
  STARTER_TESTIMONIALS_TEXT_2:
    'Hundreds of companies from various industries have used our hinges and provided positive feedback.',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The quality of these door hinges is outstanding. We’ve been sourcing them for our luxury apartment projects, and the durability is unmatched. The smooth movement and sleek finish have significantly improved our door installations. Truly a reliable partner for high-end hardware needs.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback1.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer A',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Construction & Development',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Impressive lead times and excellent customer service! As a large-scale furniture manufacturer, we need a consistent supply. Their hinges are precision-engineered and arrive on schedule every time. The team is professional and always goes the extra mile to meet our specific technical requirements.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback2.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer B',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Furniture Manufacturer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'We switched to this factory for our commercial door line, and the results have been fantastic. Their hinges offer the perfect balance of competitive pricing and industrial-grade strength. Our retail clients have noted the improved sturdiness. We highly recommend them to any global distributor.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback3.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer C',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Hardware Wholesaler',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Detail matters in our custom home builds, and these hinges deliver. The precision in the screw holes and the silent operation are exactly what we look for. They provide a premium feel that elevates the entire room aesthetic. We will definitely continue our long-term partnership.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback4.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer D',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Interior Design Firm',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Reliable international shipping and top-tier product quality. We’ve ordered thousands of hinges for our overseas network, and the feedback has been 100% positive. The stainless steel finish is highly corrosion-resistant and looks great. A fantastic choice for anyone seeking a professional OEM manufacturer.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback5.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer E',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'International Trading Company',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'These hinges are a dream for our installation teams. The alignment is consistently perfect, which reduces our labor time significantly. We have tested many suppliers, but the build quality and structural integrity here are superior. They are now our exclusive hinge provider for all upcoming projects.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/about/feedback6.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Customer F',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Engineering & Installation',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'Q&A',
  STARTER_FAQ_TEXT_1: 'Frequently asked questions',
  STARTER_FAQ_TEXT_2: 'Ask us anything about our brand and products, and get factual responses.',

  STARTER_FAQ_1_QUESTION: 'Which shipping methods do you support?',
  STARTER_FAQ_1_ANSWER:
    'We support sea freight (FCL/LCL), air freight, and express delivery (DHL/FedEx/UPS). We are experienced in international trade and provide all necessary export documents.',

  STARTER_FAQ_2_QUESTION: 'Can I request samples before placing a bulk order?',
  STARTER_FAQ_2_ANSWER:
    'Yes, we encourage customers to test our quality first. We provide free samples for our standard hinge models. Typically, the buyer only needs to cover the international express shipping cost, which can be deducted from your first formal mass-production order.',

  STARTER_FAQ_3_QUESTION: 'Do you offer OEM or ODM services?',
  STARTER_FAQ_3_ANSWER:
    'Absolutely. As a professional hardware manufacturer, we provide full OEM and ODM services. We can laser-etch your logo on the hinges, design custom packaging, or even develop new molds based on your specific technical drawings or samples to meet your local market demands.',

  STARTER_FAQ_4_QUESTION: 'How do you ensure the quality and durability of your door hinges?',
  STARTER_FAQ_4_ANSWER:
    'Quality is our priority. Our hinges undergo rigorous testing, including salt spray tests (for corrosion resistance) and cycle tests (up to 200,000 openings/closings). We follow ISO9001 standards, and every batch is inspected before shipment to ensure finish consistency and structural integrity.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Company News',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Latest News',
  STARTER_BLOG_TEXT_2:
    'Explore the latest news, tips, and insights from OFhardware to enhance your construction projects.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact US',
  STARTER_CONTACT_TEXT: 'Have questions? Contact US!',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'Zhejiang, China',
  STARTER_CONTACT_EMAIL_TITLE: 'Contact US',
  STARTER_CONTACT_EMAIL_TEXT: 'service@ofhardware.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-6rploe', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Engineered to Endure',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Company',
      LINK_GROUP: [
        { TITLE: 'Home', URL: '/#home' },
        { TITLE: 'News', URL: '/archive' },
        {
          TITLE: '中文',
          URL: '/cnindex'
        }
      ]
    },
    {
      TITLE: 'Product',
      LINK_GROUP: [
        {
          TITLE: 'Brochure',
          URL: '/article/brochure'
        },
//        {
//          TITLE: '升级指南',
//          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
//        },
//        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    }
//    {
//      TITLE: 'Notion写作',
//      LINK_GROUP: [
//       {
//          TITLE: 'Notion开始写作',
//          URL: 'https://docs.tangly1024.com/article/start-to-write'
//        },
//        {
//          TITLE: '快捷键提升效率',
//          URL: 'https://docs.tangly1024.com/article/notion-short-key'
//        },
//        {
//          TITLE: '中国大陆使用Notion',
//          URL: 'https://docs.tangly1024.com/article/notion-faster'
//        }
//      ]
//   }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legalnotice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Use',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: 'Page not found',
  STARTER_404_TEXT: 'Oops! This page seems to be missing.',
  STARTER_404_BACK: 'Back to Home',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: false,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
