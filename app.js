/* ============ i18n ============ */

const translations = {
  en: {
    'nav.search': 'Search',
    'nav.results': 'Capacity',
    'nav.list': 'List your capacity',
    'nav.standby': 'Standby',

    'search.title': 'Find freight space. Millions of kilos of it.',
    'search.sub': 'Compare real departures from Chinese forwarders and book remaining capacity instantly — China → UK & Australia.',
    'search.from': 'From',
    'search.to': 'To',
    'search.mode': 'Mode',
    'search.space': 'Space needed',
    'search.any': 'Anywhere in China',
    'search.anyDest': 'All destinations',
    'search.anyMode': 'Sea & Air',
    'search.cta': 'Search space',
    'search.point1': '✓ Live remaining CBM & kg',
    'search.point2': '✓ Standby space up to 40% off',
    'search.point3': '✓ Book before cut-off, instantly',
    'search.dealsTitle': 'Departing soon from China',

    'city.shenzhen': '🇨🇳 Shenzhen',
    'city.guangzhou': '🇨🇳 Guangzhou',
    'city.ningbo': '🇨🇳 Ningbo',
    'city.felixstowe': '🇬🇧 Felixstowe (Sea)',
    'city.heathrow': '🇬🇧 Heathrow (Air)',
    'city.sydney': '🇦🇺 Sydney (Sea)',
    'city.melbourne': '🇦🇺 Melbourne (Sea)',
    'city.sydneyair': '🇦🇺 Sydney (Air)',
    'mode.sea': 'Sea LCL',
    'mode.air': 'Air freight',

    'results.edit': 'Edit search',
    'results.summary': 'departures with space',
    'results.departs': 'Departs',
    'results.cutoff': 'Cut-off',
    'results.remaining': 'Remaining',
    'results.select': 'Select',
    'results.none': 'No departures match these filters.',

    'filters.title': 'Filter',
    'filters.mode': 'Mode',
    'filters.type': 'Capacity type',
    'filters.guaranteed': 'Guaranteed',
    'filters.standby': 'Standby (discounted)',
    'filters.note': 'Standby space may be rolled to the next departure or refunded if regular bookings fill it first.',
    'filters.service': 'Service',
    'service.label': 'Service',
    'service.p2p': 'Port to port',
    'service.p2d': 'Port to door',
    'service.d2d': 'Door to door',
    'service.doorAvailable': 'Door delivery',
    'service.doorFee': 'door delivery',

    'sort.best': 'Best',
    'sort.cheapest': 'Cheapest',
    'sort.fastest': 'Fastest',

    'detail.back': '← Back to results',
    'detail.departs': 'Departure',
    'detail.arrives': 'Est. arrival',
    'detail.remaining': 'Remaining space',
    'detail.transit': 'Transit time',
    'detail.cutoff': 'Booking cut-off',
    'detail.reserve': 'Reserve this space',
    'detail.standbyNote': 'This is Standby Capacity: discounted because it may be reassigned. If regular bookings fill the space first, this booking automatically rolls to the next departure or is refunded.',
    'detail.departsIn': 'Departs in',
    'detail.cutoffIn': 'Booking closes in',
    'detail.closed': 'Closed',

    'confirm.title': 'Space reserved',
    'confirm.note': 'In the real product the forwarder is notified instantly and confirms in their dashboard — no email chains.',
    'confirm.cta': 'Back to results',
    'confirm.detail': 'departing',

    'list.title': 'List your capacity',
    'list.sub': 'The forwarder side — putting spare space in front of UK buyers takes about two minutes.',
    'list.field.type': 'Freight type',
    'list.field.date': 'Departure date',
    'list.field.capacity': 'Remaining space',
    'list.field.price': 'Price',
    'list.field.cutoff': 'Cut-off before departure',
    'list.field.standby': 'List as Standby Capacity (discounted, may roll or refund)',
    'list.submit': 'Publish listing',
    'list.published.title': '✓ Published — live in the marketplace',
    'list.published.body': 'Buyers searching this lane can find and reserve it immediately. Open "Capacity" to see it at the top of the results.',

    'nav.quote': 'Request quotes',
    'quote.title': 'Get bespoke quotes for your load',
    'quote.sub': 'The buyer side — post your load details once and forwarders come back with competitive quotes, instead of you chasing them one by one.',
    'quote.field.ready': 'Cargo ready date',
    'quote.field.volume': 'Volume (CBM)',
    'quote.field.weight': 'Weight (kg)',
    'quote.field.cargo': 'Cargo description',
    'quote.field.postcode': 'Delivery postcode (door services)',
    'calc.toggle': 'CBM calculator',
    'calc.len': 'Length (cm)',
    'calc.wid': 'Width (cm)',
    'calc.hei': 'Height (cm)',
    'calc.qty': 'Cartons',
    'calc.total': 'Total volume',
    'calc.volWeight': 'Volumetric weight (air)',
    'calc.use': 'Use in form',
    'calc.hint': '1 CBM = 100 × 100 × 100 cm. Air freight charges whichever is greater: actual weight or volumetric weight (L×W×H ÷ 6000 per carton).',
    'quote.submit': 'Post load & get quotes',
    'quote.liveTitle': '✓ Load posted — forwarders are quoting',
    'quote.liveBody': 'In the real product, quotes arrive over the next few hours. Here are the first responses:',
    'quote.transit': 'Transit',
    'quote.total': 'Est. total',
    'quote.accept': 'Accept quote',
    'quote.validity': 'Valid for 48h',

    'standby.title': 'How Standby Capacity works',
    'standby.sub': 'Monetise the uncertainty — not just guaranteed empty space.',
    'standby.step1.title': 'Your container is 80% full',
    'standby.step1.body': "You expect ~15% will probably remain empty at departure — but you're not certain.",
    'standby.step2.title': 'List it as Standby, discounted',
    'standby.step2.body': "A buyer books that uncertain space cheaply, knowing it isn't guaranteed.",
    'standby.step3a.title': 'If it ships — everyone wins',
    'standby.step3a.body': 'You sold space you thought would go empty. The buyer got a discount.',
    'standby.step3b.title': 'If regular bookings fill it',
    'standby.step3b.body': 'The booking rolls to the next departure automatically, or refunds. No awkward conversation.',
    'standby.cta': 'See standby space in results',

    'footer.tagline': 'The freight capacity marketplace — China → UK & Australia.',
    'footer.contact': 'Contact',

    'net.au.title': 'Australia network',
    'net.au.body': 'Destination handling and door delivery run through our established Australian partner network.',
    'net.cn.title': 'China network',
    'net.cn.body': 'Origin coverage across Shenzhen, Guangzhou and Ningbo is being built right now. All rates shown are forwarder estimates until launch.',
    'net.live': 'Live',
    'soon.badge': 'Coming soon',
    'soon.notice': 'China lanes launch soon — all rates shown are estimates from partner forwarders.',
    'soon.est': 'est. rate',
    'soon.detailNote': 'Estimated rate — the China network is launching soon. Reserve now to hold your place in the queue for this departure.',

    'auth.signIn': 'Sign in',
    'auth.register': 'Register',
    'auth.signOut': 'Sign out',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.fullName': 'Full name',
    'auth.company': 'Company (optional)',
    'auth.accountType': 'I am a…',
    'auth.importer': 'Importer / buyer',
    'auth.forwarder': 'Freight forwarder',
    'auth.createAccount': 'Create account',
    'auth.gateNote': 'Sign in or create a free account to continue.',
    'auth.checkEmail': 'Account created — check your inbox and click the confirmation link, then sign in.',
    'auth.welcome': 'Signed in',
    'auth.working': 'Working…',

    unit_cbm: 'CBM', unit_kg: 'kg',
    unit_usd_cbm: '/CBM', unit_usd_kg: '/kg',
    dur_day: 'day', dur_days: 'days', dur_hours: 'hours',
    standby: 'Standby',
  },
  zh: {
    'nav.search': '搜索',
    'nav.results': '舱位',
    'nav.list': '发布舱位',
    'nav.standby': '候补舱位',

    'search.title': '搜索货运舱位，数百万公斤任您选。',
    'search.sub': '比较中国货代的真实班期，即时预订剩余舱位——中国 → 英国和澳大利亚。',
    'search.from': '起运地',
    'search.to': '目的地',
    'search.mode': '运输方式',
    'search.space': '所需舱位',
    'search.any': '中国任意城市',
    'search.anyDest': '任意目的地',
    'search.anyMode': '海运和空运',
    'search.cta': '搜索舱位',
    'search.point1': '✓ 实时剩余立方米和公斤数',
    'search.point2': '✓ 候补舱位最高优惠40%',
    'search.point3': '✓ 截关前即时预订',
    'search.dealsTitle': '即将从中国出发',

    'city.shenzhen': '🇨🇳 深圳',
    'city.guangzhou': '🇨🇳 广州',
    'city.ningbo': '🇨🇳 宁波',
    'city.felixstowe': '🇬🇧 费利克斯托（海运）',
    'city.heathrow': '🇬🇧 希思罗（空运）',
    'city.sydney': '🇦🇺 悉尼（海运）',
    'city.melbourne': '🇦🇺 墨尔本（海运）',
    'city.sydneyair': '🇦🇺 悉尼（空运）',
    'mode.sea': '海运拼箱',
    'mode.air': '空运',

    'results.edit': '修改搜索',
    'results.summary': '个班期有舱位',
    'results.departs': '出发',
    'results.cutoff': '截关',
    'results.remaining': '剩余',
    'results.select': '选择',
    'results.none': '没有符合筛选条件的班期。',

    'filters.title': '筛选',
    'filters.mode': '运输方式',
    'filters.type': '舱位类型',
    'filters.guaranteed': '确定舱位',
    'filters.standby': '候补舱位（折扣价）',
    'filters.note': '如果正常订舱先填满，候补舱位将自动延期至下一班或全额退款。',
    'filters.service': '服务',
    'service.label': '服务',
    'service.p2p': '港到港',
    'service.p2d': '港到门',
    'service.d2d': '门到门',
    'service.doorAvailable': '送货上门',
    'service.doorFee': '送货上门',

    'sort.best': '推荐',
    'sort.cheapest': '最便宜',
    'sort.fastest': '最快',

    'detail.back': '← 返回结果',
    'detail.departs': '出发时间',
    'detail.arrives': '预计到达',
    'detail.remaining': '剩余舱位',
    'detail.transit': '运输时长',
    'detail.cutoff': '订舱截止',
    'detail.reserve': '预订此舱位',
    'detail.standbyNote': '这是候补舱位：因可能被重新分配而享有折扣。如果正常订舱先填满该舱位，此预订将自动延期至下一班，或全额退款。',
    'detail.departsIn': '距出发',
    'detail.cutoffIn': '距订舱截止',
    'detail.closed': '已截止',

    'confirm.title': '舱位已预订',
    'confirm.note': '在实际产品中，货代会立即收到通知并在后台确认——无需邮件往返。',
    'confirm.cta': '返回结果',
    'confirm.detail': '出发日期',

    'list.title': '发布您的舱位',
    'list.sub': '货代端——将剩余舱位展示给英国买家，大约两分钟即可完成。',
    'list.field.type': '货运类型',
    'list.field.date': '出发日期',
    'list.field.capacity': '剩余舱位',
    'list.field.price': '价格',
    'list.field.cutoff': '截关时间',
    'list.field.standby': '标记为候补舱位（折扣价，可能延期或退款）',
    'list.submit': '发布舱位',
    'list.published.title': '✓ 已发布——已在平台上线',
    'list.published.body': '搜索此航线的买家可以立即查找并预订。打开"舱位"即可在结果顶部看到。',

    'nav.quote': '询价',
    'quote.title': '为您的货物获取定制报价',
    'quote.sub': '买家端——只需发布一次货物信息，货代主动为您提供有竞争力的报价，无需逐家询问。',
    'quote.field.ready': '备货日期',
    'quote.field.volume': '体积（立方米）',
    'quote.field.weight': '重量（公斤）',
    'quote.field.cargo': '货物描述',
    'quote.field.postcode': '收货邮编（门到门服务）',
    'calc.toggle': '体积计算器',
    'calc.len': '长（厘米）',
    'calc.wid': '宽（厘米）',
    'calc.hei': '高（厘米）',
    'calc.qty': '箱数',
    'calc.total': '总体积',
    'calc.volWeight': '空运体积重',
    'calc.use': '填入表单',
    'calc.hint': '1 立方米 = 100 × 100 × 100 厘米。空运按实际重量与体积重（长×宽×高 ÷ 6000/箱）中较大者计费。',
    'quote.submit': '发布货物并获取报价',
    'quote.liveTitle': '✓ 货物已发布——货代正在报价',
    'quote.liveBody': '在实际产品中，报价会在几小时内陆续到达。以下是最先收到的报价：',
    'quote.transit': '运输时长',
    'quote.total': '预计总价',
    'quote.accept': '接受报价',
    'quote.validity': '48小时内有效',

    'standby.title': '候补舱位如何运作',
    'standby.sub': '让不确定的舱位也能产生收益，而不仅仅是确定空置的舱位。',
    'standby.step1.title': '您的集装箱已装载80%',
    'standby.step1.body': '您预计开船时大约还有15%可能空置——但并不确定。',
    'standby.step2.title': '以折扣价发布为候补舱位',
    'standby.step2.body': '买家以较低价格预订这部分不确定的舱位，且知晓其不被保证。',
    'standby.step3a.title': '如果最终装船——双方都受益',
    'standby.step3a.body': '您卖出了原本以为会空置的舱位，买家获得了折扣价。',
    'standby.step3b.title': '如果正常订舱先填满',
    'standby.step3b.body': '预订将自动延期至下一班，或全额退款。无需尴尬的沟通。',
    'standby.cta': '查看结果中的候补舱位',

    'footer.tagline': '货运舱位交易平台——中国 → 英国和澳大利亚。',
    'footer.contact': '联系我们',

    'net.au.title': '澳大利亚网络',
    'net.au.body': '目的地操作与送货上门服务由我们成熟的澳大利亚合作伙伴网络提供。',
    'net.cn.title': '中国网络',
    'net.cn.body': '深圳、广州和宁波的起运地网络正在搭建中。正式上线前，所示价格均为货代预估报价。',
    'net.live': '已运营',
    'soon.badge': '即将上线',
    'soon.notice': '中国航线即将开通——所示价格均为合作货代的预估报价。',
    'soon.est': '预估价',
    'soon.detailNote': '预估价格——中国网络即将上线。现在预订可提前锁定该班期的排位。',

    'auth.signIn': '登录',
    'auth.register': '注册',
    'auth.signOut': '退出登录',
    'auth.email': '邮箱',
    'auth.password': '密码',
    'auth.fullName': '姓名',
    'auth.company': '公司（选填）',
    'auth.accountType': '我是…',
    'auth.importer': '进口商 / 买家',
    'auth.forwarder': '货运代理',
    'auth.createAccount': '创建账户',
    'auth.gateNote': '登录或免费注册后继续。',
    'auth.checkEmail': '账户已创建——请查收邮件并点击确认链接，然后登录。',
    'auth.welcome': '已登录',
    'auth.working': '处理中…',

    unit_cbm: '立方米', unit_kg: '公斤',
    unit_usd_cbm: '/立方米', unit_usd_kg: '/公斤',
    dur_day: '天', dur_days: '天', dur_hours: '小时',
    standby: '候补',
  }
};

let lang = 'en';
function t(key) { return translations[lang][key] || key; }

/* ============ Currency ============ */

const currencies = [
  { code: 'usd', symbol: '$', label: '$ USD', rate: 1 },
  { code: 'gbp', symbol: '£', label: '£ GBP', rate: 0.79 },
  { code: 'aud', symbol: 'A$', label: 'A$ AUD', rate: 1.52 },
  { code: 'cny', symbol: '¥', label: '¥ CNY', rate: 7.2 },
];
let currencyIdx = 0;
function cur() { return currencies[currencyIdx]; }
function money(usd) {
  const v = usd * cur().rate;
  const num = v < 10 ? (Math.round(v * 100) / 100).toFixed(2).replace(/\.?0+$/, '') : Math.round(v);
  return `${cur().symbol}${num}`;
}

/* ============ Mock data ============ */

const cityShort = {
  shenzhen:   { en: 'Shenzhen',   zh: '深圳' },
  guangzhou:  { en: 'Guangzhou',  zh: '广州' },
  ningbo:     { en: 'Ningbo',     zh: '宁波' },
  felixstowe: { en: 'Felixstowe', zh: '费利克斯托' },
  heathrow:   { en: 'Heathrow',   zh: '希思罗' },
  sydney:     { en: 'Sydney',     zh: '悉尼' },
  melbourne:  { en: 'Melbourne',  zh: '墨尔本' },
  sydneyair:  { en: 'Sydney',     zh: '悉尼' },
};

/* dest → mode + typical transit days */
const destInfo = {
  felixstowe: { mode: 'sea', transit: 28 },
  heathrow:   { mode: 'air', transit: 1 },
  sydney:     { mode: 'sea', transit: 14 },
  melbourne:  { mode: 'sea', transit: 16 },
  sydneyair:  { mode: 'air', transit: 2 },
};

const forwarders = [
  { en: 'Pacific Bridge Forwarding', zh: '太平洋桥货运' },
  { en: 'Golden Delta Logistics',    zh: '金三角物流' },
  { en: 'Swift Harbor Cargo',        zh: '顺达港货运' },
  { en: 'Silk Route Forwarding',     zh: '丝路货运' },
  { en: 'Nova Consolidators',        zh: '诺瓦拼箱' },
  { en: 'BlueWave Air & Sea',        zh: '蓝波空海联运' },
  { en: 'Union Bridge Logistics',    zh: '联桥物流' },
  { en: 'Canton Star Freight',       zh: '穗星货运' },
];

/* price: number; wasPrice: optional pre-discount price for standby rows */
let listings = [
  { id: 1, type: 'sea', standby: false, origin: 'shenzhen',  dest: 'felixstowe', forwarder: forwarders[0], date: '2026-08-18', transitDays: 28, cutoff: { v: 2, u: 'days' },  capacity: '6.2', capUnit: 'cbm', price: 55,   wasPrice: null, priceUnit: 'usd_cbm', service: 'd2d', doorFee: 130 },
  { id: 2, type: 'sea', standby: true,  origin: 'shenzhen',  dest: 'felixstowe', forwarder: forwarders[1], date: '2026-08-20', transitDays: 29, cutoff: { v: 1, u: 'day' },   capacity: '3.4', capUnit: 'cbm', price: 38,   wasPrice: 58,   priceUnit: 'usd_cbm', service: 'p2p', doorFee: null },
  { id: 3, type: 'air', standby: false, origin: 'shenzhen',  dest: 'heathrow',   forwarder: forwarders[2], date: '2026-08-12', transitDays: 1,  cutoff: { v: 18, u: 'hours' }, capacity: '410', capUnit: 'kg',  price: 6.20, wasPrice: null, priceUnit: 'usd_kg', service: 'd2d', doorFee: 90 },
  { id: 4, type: 'air', standby: true,  origin: 'shenzhen',  dest: 'heathrow',   forwarder: forwarders[3], date: '2026-08-13', transitDays: 1,  cutoff: { v: 12, u: 'hours' }, capacity: '180', capUnit: 'kg',  price: 4.10, wasPrice: 6.40, priceUnit: 'usd_kg', service: 'p2d', doorFee: 70 },
  { id: 5, type: 'sea', standby: false, origin: 'guangzhou', dest: 'felixstowe', forwarder: forwarders[4], date: '2026-08-22', transitDays: 30, cutoff: { v: 3, u: 'days' },  capacity: '9.8', capUnit: 'cbm', price: 52,   wasPrice: null, priceUnit: 'usd_cbm', service: 'd2d', doorFee: 140 },
  { id: 6, type: 'air', standby: false, origin: 'guangzhou', dest: 'heathrow',   forwarder: forwarders[5], date: '2026-08-15', transitDays: 1,  cutoff: { v: 1, u: 'day' },   capacity: '260', capUnit: 'kg',  price: 5.80, wasPrice: null, priceUnit: 'usd_kg', service: 'p2p', doorFee: null },
  { id: 7, type: 'sea', standby: true,  origin: 'ningbo',    dest: 'felixstowe', forwarder: forwarders[6], date: '2026-08-25', transitDays: 32, cutoff: { v: 2, u: 'days' },  capacity: '5.1', capUnit: 'cbm', price: 41,   wasPrice: 60,   priceUnit: 'usd_cbm', service: 'p2d', doorFee: 110 },
  { id: 8, type: 'air', standby: true,  origin: 'shenzhen',  dest: 'heathrow',   forwarder: forwarders[7], date: '2026-08-11', transitDays: 1,  cutoff: { v: 9, u: 'hours' },  capacity: '95',  capUnit: 'kg',  price: 3.60, wasPrice: 6.00, priceUnit: 'usd_kg', service: 'p2p', doorFee: null },
  { id: 9,  type: 'sea', standby: false, origin: 'shenzhen',  dest: 'sydney',    forwarder: forwarders[2], date: '2026-09-08', transitDays: 14, cutoff: { v: 2, u: 'days' },  capacity: '7.5', capUnit: 'cbm', price: 42,   wasPrice: null, priceUnit: 'usd_cbm', service: 'd2d', doorFee: 120 },
  { id: 10, type: 'sea', standby: true,  origin: 'guangzhou', dest: 'melbourne', forwarder: forwarders[5], date: '2026-09-10', transitDays: 16, cutoff: { v: 2, u: 'days' },  capacity: '4.2', capUnit: 'cbm', price: 29,   wasPrice: 45,   priceUnit: 'usd_cbm', service: 'p2p', doorFee: null },
  { id: 11, type: 'air', standby: false, origin: 'shenzhen',  dest: 'sydneyair', forwarder: forwarders[6], date: '2026-09-04', transitDays: 2,  cutoff: { v: 1, u: 'day' },   capacity: '320', capUnit: 'kg',  price: 5.40, wasPrice: null, priceUnit: 'usd_kg', service: 'p2d', doorFee: 80 },
  { id: 12, type: 'sea', standby: false, origin: 'ningbo',    dest: 'sydney',    forwarder: forwarders[1], date: '2026-09-12', transitDays: 15, cutoff: { v: 3, u: 'days' },  capacity: '11.0', capUnit: 'cbm', price: 39,  wasPrice: null, priceUnit: 'usd_cbm', service: 'p2d', doorFee: 110 },
  { id: 13, type: 'air', standby: true,  origin: 'guangzhou', dest: 'sydneyair', forwarder: forwarders[3], date: '2026-09-05', transitDays: 2,  cutoff: { v: 14, u: 'hours' }, capacity: '140', capUnit: 'kg',  price: 3.90, wasPrice: 5.80, priceUnit: 'usd_kg', service: 'p2p', doorFee: null },
];

let nextId = listings.length + 1;
let activeSort = 'best';
let searchFilters = { origin: 'any', dest: 'any', mode: 'any' };
let selectedListingId = null;

/* ============ Helpers ============ */

function city(key) { return cityShort[key][lang]; }
function fwd(f) { return f[lang]; }

const cityCountry = {
  shenzhen: 'cn', guangzhou: 'cn', ningbo: 'cn',
  felixstowe: 'gb', heathrow: 'gb',
  sydney: 'au', melbourne: 'au', sydneyair: 'au',
};
function flagImg(key, cls) {
  const c = cityCountry[key];
  if (!c) return '';
  return `<img class="flag${cls ? ' ' + cls : ''}" src="https://flagcdn.com/w20/${c}.png" srcset="https://flagcdn.com/w40/${c}.png 2x" alt="${c.toUpperCase()}">`;
}
function u(key) { return t('unit_' + key); }

function addDays(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d + days);
  const pad = n => String(n).padStart(2, '0');
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}
function shortDate(dateStr) {
  const [, m, d] = dateStr.split('-').map(Number);
  if (lang === 'zh') return `${m}月${d}日`;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d} ${months[m - 1]}`;
}
function durLabel(days) {
  if (days === 1) return `1 ${t('dur_day')}`;
  return `${days} ${t('dur_days')}`;
}
function cutoffLabel(c) {
  const unit = c.u === 'hours' ? t('dur_hours') : (c.v === 1 ? t('dur_day') : t('dur_days'));
  return `${c.v} ${unit}`;
}
function priceLabel(l) { return money(l.price); }
function wasLabel(l) { return money(l.wasPrice); }

/* ============ Countdown ============ */

let cdTimer = null;
function stopCountdown() { if (cdTimer) { clearInterval(cdTimer); cdTimer = null; } }

function departureTime(l) {
  const [y, m, d] = l.date.split('-').map(Number);
  return new Date(y, m - 1, d, 9, 0, 0).getTime();   // assume 09:00 local departure
}
function cutoffTime(l) {
  const ms = l.cutoff.u === 'hours' ? l.cutoff.v * 3600e3 : l.cutoff.v * 86400e3;
  return departureTime(l) - ms;
}
function fmtCountdown(ms) {
  if (ms <= 0) return t('detail.closed');
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600),
        m = Math.floor((s % 3600) / 60), sec = s % 60;
  if (lang === 'zh') {
    return (d ? `${d}天 ` : '') + `${h}小时 ${m}分 ${sec}秒`;
  }
  return (d ? `${d}d ` : '') + `${h}h ${m}m ${sec}s`;
}

/* ============ Filtering & sorting ============ */

function filteredListings() {
  const fSea = document.getElementById('f_sea').checked;
  const fAir = document.getElementById('f_air').checked;
  const fG = document.getElementById('f_guaranteed').checked;
  const fS = document.getElementById('f_standbyOnly').checked;
  const fPort = document.getElementById('f_svc_port').checked;
  const fDoor = document.getElementById('f_svc_door').checked;
  let out = listings.filter(l => {
    if (l.type === 'sea' && !fSea) return false;
    if (l.type === 'air' && !fAir) return false;
    if (l.standby && !fS) return false;
    if (!l.standby && !fG) return false;
    if (l.service === 'p2p' && !fPort) return false;
    if (l.service !== 'p2p' && !fDoor) return false;
    if (searchFilters.origin !== 'any' && l.origin !== searchFilters.origin) return false;
    if (searchFilters.dest !== 'any' && l.dest !== searchFilters.dest) return false;
    if (searchFilters.mode !== 'any' && l.type !== searchFilters.mode) return false;
    return true;
  });
  if (activeSort === 'cheapest') {
    out.sort((a, b) => (a.price / (a.priceUnit === 'usd_cbm' ? 55 : 6)) - (b.price / (b.priceUnit === 'usd_cbm' ? 55 : 6)));
  } else if (activeSort === 'fastest') {
    out.sort((a, b) => a.transitDays - b.transitDays || a.price - b.price);
  } else {
    out.sort((a, b) => b.id - a.id);
  }
  return out;
}

/* ============ Rendering ============ */

function renderResultRow(l) {
  const arrive = addDays(l.date, l.transitDays);
  const icon = l.type === 'sea' ? '🚢' : '✈️';
  return `
  <div class="result-row" data-id="${l.id}">
    <div class="leg-main">
      <div class="leg-head">
        <span class="mode-pill ${l.type}">${icon} ${t('mode.' + l.type)}</span>
        <span class="carrier-name">${fwd(l.forwarder)}</span>
        ${l.service !== 'p2p' ? `<span class="svc-pill">🚚 ${t('service.' + l.service)}</span>` : ''}
        ${l.standby ? `<span class="standby-badge">★ ${t('standby')}</span>` : ''}
        <span class="soon-badge">${t('soon.badge')}</span>
      </div>
      <div class="journey">
        <div class="j-end">
          <div class="j-date">${shortDate(l.date)}</div>
          <div class="j-city">${flagImg(l.origin)} ${city(l.origin)}</div>
        </div>
        <div class="j-line">
          <span class="j-duration">${durLabel(l.transitDays)}</span>
          <div class="j-track"><span class="j-dot"></span><span class="j-rule"></span><span class="j-icon">${icon}</span><span class="j-rule"></span><span class="j-dot"></span></div>
        </div>
        <div class="j-end">
          <div class="j-date">${shortDate(arrive)}</div>
          <div class="j-city">${flagImg(l.dest)} ${city(l.dest)}</div>
        </div>
      </div>
      <div class="leg-meta">
        <span>${t('results.remaining')}: <b>${l.capacity} ${u(l.capUnit)}</b></span>
        <span>${t('results.cutoff')}: <b>${cutoffLabel(l.cutoff)}</b></span>
      </div>
    </div>
    <div class="price-col">
      ${l.wasPrice ? `<span class="pc-was">${wasLabel(l)}${u(l.priceUnit)}</span>` : ''}
      <span class="pc-price">${priceLabel(l)}<small>${u(l.priceUnit)}</small></span>
      <span class="est-tag">${t('soon.est')}</span>
      <button class="pc-btn">${t('results.select')}</button>
    </div>
  </div>`;
}

function renderResults() {
  const items = filteredListings();
  const listEl = document.getElementById('resultsList');
  if (!items.length) {
    listEl.innerHTML = `<div class="no-results">${t('results.none')}</div>`;
  } else {
    listEl.innerHTML = items.map(renderResultRow).join('');
    listEl.querySelectorAll('.result-row').forEach(row => {
      row.addEventListener('click', () => {
        selectedListingId = Number(row.dataset.id);
        showView('detail');
      });
    });
  }

  const o = searchFilters.origin === 'any' ? t('search.any') : city(searchFilters.origin);
  const d = searchFilters.dest === 'any' ? t('search.anyUK') : city(searchFilters.dest);
  document.getElementById('resultsSummary').textContent = `${o} → ${d} · ${items.length} ${t('results.summary')}`;

  const all = filteredAllForTabs();
  document.getElementById('st_best').textContent = all.length ? `${all.length}` : '—';
  const cheap = all.slice().sort((a, b) => (a.price / (a.priceUnit === 'usd_cbm' ? 55 : 6)) - (b.price / (b.priceUnit === 'usd_cbm' ? 55 : 6)))[0];
  document.getElementById('st_cheapest').textContent = cheap ? `${priceLabel(cheap)}${u(cheap.priceUnit)}` : '—';
  const fast = all.slice().sort((a, b) => a.transitDays - b.transitDays)[0];
  document.getElementById('st_fastest').textContent = fast ? durLabel(fast.transitDays) : '—';
}

function filteredAllForTabs() {
  const saved = activeSort;
  activeSort = 'best';
  const out = filteredListings();
  activeSort = saved;
  return out;
}

function renderDeals() {
  const el = document.getElementById('dealCards');
  const deals = listings.slice(0, 8).filter(l => l.standby).concat(listings.filter(l => !l.standby)).slice(0, 4);
  el.innerHTML = deals.map(l => `
    <div class="deal-card" data-id="${l.id}">
      <div class="deal-band deal-band-${cityCountry[l.dest]}">
        ${flagImg(l.origin, 'flag-lg')}
        <span class="deal-band-arrow">→</span>
        ${flagImg(l.dest, 'flag-lg')}
        <span class="deal-band-icon">${l.type === 'sea' ? '🚢' : '✈️'}</span>
      </div>
      <div class="deal-body">
        <div class="deal-route">${city(l.origin)} → ${city(l.dest)}</div>
        <div class="deal-mode">${t('mode.' + l.type)}${l.standby ? ` · ★ ${t('standby')}` : ''}</div>
        <div class="deal-bottom">
          <span class="deal-price">${priceLabel(l)}<small>${u(l.priceUnit)}</small></span>
          <span class="deal-date">${shortDate(l.date)}</span>
        </div>
      </div>
    </div>`).join('');
  el.querySelectorAll('.deal-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedListingId = Number(card.dataset.id);
      showView('detail');
    });
  });
}

function renderDetail() {
  const l = listings.find(x => x.id === selectedListingId);
  const container = document.getElementById('detailContent');
  if (!l) { container.innerHTML = ''; return; }
  const arrive = addDays(l.date, l.transitDays);
  const icon = l.type === 'sea' ? '🚢' : '✈️';
  container.innerHTML = `
  <div class="detail-card">
    <span class="mode-pill ${l.type}">${icon} ${t('mode.' + l.type)}</span>
    ${l.standby ? ` <span class="standby-badge">★ ${t('standby')}</span>` : ''}
    <div class="detail-route">${flagImg(l.origin, 'flag-md')} ${city(l.origin)} → ${flagImg(l.dest, 'flag-md')} ${city(l.dest)}</div>
    <div class="detail-forwarder">${fwd(l.forwarder)}</div>
    <div class="countdown-row">
      <div class="cd-chip">
        <span class="cd-label">${t('detail.departsIn')}</span>
        <span class="cd-value" id="cd_depart">—</span>
      </div>
      <div class="cd-chip cd-urgent">
        <span class="cd-label">${t('detail.cutoffIn')}</span>
        <span class="cd-value" id="cd_cutoff">—</span>
      </div>
    </div>
    <div class="detail-grid">
      <div class="meta-item"><span class="meta-label">${t('detail.departs')}</span><span class="meta-value">${l.date}</span></div>
      <div class="meta-item"><span class="meta-label">${t('detail.arrives')}</span><span class="meta-value">${arrive}</span></div>
      <div class="meta-item"><span class="meta-label">${t('detail.remaining')}</span><span class="meta-value">${l.capacity} ${u(l.capUnit)}</span></div>
      <div class="meta-item"><span class="meta-label">${t('detail.transit')}</span><span class="meta-value">${durLabel(l.transitDays)}</span></div>
      <div class="meta-item"><span class="meta-label">${t('detail.cutoff')}</span><span class="meta-value">${cutoffLabel(l.cutoff)}</span></div>
      <div class="meta-item"><span class="meta-label">${t('service.label')}</span><span class="meta-value">${t('service.' + l.service)}${l.doorFee ? ` (+${money(l.doorFee)} ${t('service.doorFee')})` : ''}</span></div>
    </div>
    ${l.standby ? `<div class="standby-note">⚠ ${t('detail.standbyNote')}</div>` : ''}
    <div class="soon-note"><span class="soon-badge">${t('soon.badge')}</span> ${t('soon.detailNote')}</div>
    <div class="detail-footer">
      <div>
        ${l.wasPrice ? `<div class="pc-was">${wasLabel(l)}${u(l.priceUnit)}</div>` : ''}
        <span class="pc-price">${priceLabel(l)}<small>${u(l.priceUnit)}</small></span>
        <span class="est-tag">${t('soon.est')}</span>
      </div>
      <button class="btn btn-primary" id="reserveBtn">${t('detail.reserve')}</button>
    </div>
  </div>`;

  stopCountdown();
  const tick = () => {
    const now = Date.now();
    const dEl = document.getElementById('cd_depart');
    const cEl = document.getElementById('cd_cutoff');
    if (!dEl || !cEl) { stopCountdown(); return; }
    dEl.textContent = fmtCountdown(departureTime(l) - now);
    cEl.textContent = fmtCountdown(cutoffTime(l) - now);
  };
  tick();
  cdTimer = setInterval(tick, 1000);

  document.getElementById('reserveBtn').addEventListener('click', () => requireAuth(() => {
    document.getElementById('confirmDetail').textContent =
      `${city(l.origin)} → ${city(l.dest)} · ${fwd(l.forwarder)} · ${t('confirm.detail')} ${l.date}`;
    showView('confirm');
  }));
}

/* ============ RFQ (buyer quote requests) ============ */

let lastQuote = null;

function buildQuotes(req) {
  const aus = req.dest === 'sydney' || req.dest === 'melbourne' || req.dest === 'sydneyair';
  const seaDays = aus ? 14 : 30;
  const airDays = aus ? 2 : 1;
  const seaRates = aus ? [34, 38, 42] : [44, 48, 52];
  const airRates = aus ? [4.3, 4.8, 5.5] : [4.9, 5.4, 6.1];
  const mk = (fwdIdx, type, unitPrice, transitDays) => ({
    forwarder: forwarders[fwdIdx], type, unitPrice, transitDays,
    qty: type === 'sea' ? req.volume : req.weight,
    unit: type === 'sea' ? 'usd_cbm' : 'usd_kg',
    qtyUnit: type === 'sea' ? 'cbm' : 'kg',
    service: req.service,
    doorFee: req.service === 'p2p' ? 0 : (type === 'sea' ? 140 : 90),
  });
  if (req.mode === 'sea') return [mk(4, 'sea', seaRates[0], seaDays), mk(0, 'sea', seaRates[1], seaDays - 2), mk(6, 'sea', seaRates[2], seaDays - 4)];
  if (req.mode === 'air') return [mk(3, 'air', airRates[0], airDays), mk(2, 'air', airRates[1], airDays), mk(5, 'air', airRates[2], airDays)];
  return [mk(4, 'sea', seaRates[0], seaDays), mk(0, 'sea', seaRates[1], seaDays - 2), mk(3, 'air', airRates[0], airDays)];
}

function renderQuotes() {
  const box = document.getElementById('quoteResult');
  if (!lastQuote) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  const total = q => q.unitPrice * q.qty + q.doorFee;
  const cheapestTotal = Math.min(...lastQuote.quotes.map(total));
  box.innerHTML = `
    <div class="publish-success" style="margin-bottom:14px;">${t('quote.liveTitle')}<br><span>${t('quote.liveBody')}</span></div>
    ${lastQuote.quotes.map((q, i) => `
      <div class="result-row quote-row" data-qi="${i}">
        <div class="leg-main">
          <div class="leg-head">
            <span class="mode-pill ${q.type}">${q.type === 'sea' ? '🚢' : '✈️'} ${t('mode.' + q.type)}</span>
            <span class="carrier-name">${fwd(q.forwarder)}</span>
            ${q.service !== 'p2p' ? `<span class="svc-pill">🚚 ${t('service.' + q.service)}</span>` : ''}
            ${total(q) === cheapestTotal ? `<span class="standby-badge">★ ${t('sort.cheapest')}</span>` : ''}
          </div>
          <div class="leg-meta" style="margin-top:0;">
            <span>${t('quote.transit')}: <b>${durLabel(q.transitDays)}</b></span>
            <span>${money(q.unitPrice)}${u(q.unit)} × ${q.qty} ${u(q.qtyUnit)}${q.doorFee ? ` + ${money(q.doorFee)} ${t('service.doorFee')}` : ''}</span>
            <span>${t('quote.validity')}</span>
          </div>
        </div>
        <div class="price-col">
          <span class="cd-label" style="color:var(--ink-faint);">${t('quote.total')}</span>
          <span class="pc-price">${money(total(q))}</span>
          <button class="pc-btn">${t('quote.accept')}</button>
        </div>
      </div>`).join('')}
  `;
  box.querySelectorAll('.quote-row').forEach(row => {
    row.addEventListener('click', () => requireAuth(() => {
      const q = lastQuote.quotes[Number(row.dataset.qi)];
      document.getElementById('confirmDetail').textContent =
        `${city(lastQuote.origin)} → ${city(lastQuote.dest)} · ${fwd(q.forwarder)} · ${t('service.' + q.service)} · ${money(q.unitPrice * q.qty + q.doorFee)}`;
      showView('confirm');
    }));
  });
}

/* ============ Auth (Supabase) ============ */

const SUPABASE_URL = 'https://gfmjqwgbtramqrizebfp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_mKVgSusMD01nK5xV_UU1PA_ZxTkm491';
const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

let currentUser = null;
let pendingAction = null;

function userLabel() {
  if (!currentUser) return '';
  return (currentUser.user_metadata && currentUser.user_metadata.full_name) || currentUser.email;
}

function renderAuthArea() {
  const area = document.getElementById('authArea');
  if (!area) return;
  if (currentUser) {
    area.innerHTML = `
      <span class="auth-user" title="${currentUser.email}">${userLabel()}</span>
      <button class="auth-btn" id="signOutBtn">${t('auth.signOut')}</button>`;
    document.getElementById('signOutBtn').addEventListener('click', () => { if (sb) sb.auth.signOut(); });
  } else {
    area.innerHTML = `
      <button class="auth-btn" id="signInBtn">${t('auth.signIn')}</button>
      <button class="auth-btn auth-btn-primary" id="registerBtn">${t('auth.register')}</button>`;
    document.getElementById('signInBtn').addEventListener('click', () => openAuthModal('signin', false));
    document.getElementById('registerBtn').addEventListener('click', () => openAuthModal('register', false));
  }
}

function setAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.toggle('active', b.dataset.authtab === tab));
  document.getElementById('signinForm').classList.toggle('hidden', tab !== 'signin');
  document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
  hideAuthMsg();
}

function openAuthModal(tab, gated) {
  document.getElementById('authModal').classList.remove('hidden');
  document.getElementById('authGateNote').classList.toggle('hidden', !gated);
  setAuthTab(tab);
}

function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
  pendingAction = null;
}

function showAuthMsg(text, isError) {
  const el = document.getElementById('authMsg');
  el.textContent = text;
  el.classList.remove('hidden');
  el.classList.toggle('auth-msg-error', !!isError);
}
function hideAuthMsg() {
  const el = document.getElementById('authMsg');
  el.classList.add('hidden');
  el.classList.remove('auth-msg-error');
}

function requireAuth(fn) {
  if (currentUser || !sb) { fn(); return; }
  pendingAction = fn;
  openAuthModal('signin', true);
}

function wireAuth() {
  renderAuthArea();
  if (!sb) return;

  sb.auth.getSession().then(({ data }) => {
    currentUser = data.session ? data.session.user : null;
    renderAuthArea();
  });
  sb.auth.onAuthStateChange((_event, session) => {
    currentUser = session ? session.user : null;
    renderAuthArea();
  });

  document.getElementById('authClose').addEventListener('click', closeAuthModal);
  document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('authModal')) closeAuthModal();
  });
  document.querySelectorAll('.auth-tab').forEach(b =>
    b.addEventListener('click', () => setAuthTab(b.dataset.authtab)));

  document.getElementById('signinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    showAuthMsg(t('auth.working'), false);
    const { error } = await sb.auth.signInWithPassword({
      email: document.getElementById('si_email').value.trim(),
      password: document.getElementById('si_password').value,
    });
    if (error) { showAuthMsg(error.message, true); return; }
    const action = pendingAction;
    pendingAction = null;
    document.getElementById('authModal').classList.add('hidden');
    e.target.reset();
    if (action) action();
  });

  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    showAuthMsg(t('auth.working'), false);
    const { data, error } = await sb.auth.signUp({
      email: document.getElementById('rg_email').value.trim(),
      password: document.getElementById('rg_password').value,
      options: {
        data: {
          full_name: document.getElementById('rg_name').value.trim(),
          company: document.getElementById('rg_company').value.trim(),
          account_type: document.getElementById('rg_type').value,
        },
        emailRedirectTo: 'https://byst.uk/',
      },
    });
    if (error) { showAuthMsg(error.message, true); return; }
    if (data.session) {
      const action = pendingAction;
      pendingAction = null;
      document.getElementById('authModal').classList.add('hidden');
      e.target.reset();
      if (action) action();
    } else {
      showAuthMsg(t('auth.checkEmail'), false);
      e.target.reset();
    }
  });
}

/* ============ Views ============ */

function showView(view) {
  stopCountdown();
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-' + view).classList.remove('hidden');
  document.querySelectorAll('.nav-link').forEach(n => {
    const target = n.dataset.view;
    n.classList.toggle('active', target === view || (target === 'results' && (view === 'detail' || view === 'confirm')));
  });
  if (view === 'results') renderResults();
  if (view === 'detail') renderDetail();
  if (view === 'search') renderDeals();
  window.scrollTo(0, 0);
}

/* ============ i18n apply ============ */

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById('langToggle').textContent = lang === 'en' ? '中文' : 'EN';
  renderAuthArea();
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  const current = [...document.querySelectorAll('.view')].find(v => !v.classList.contains('hidden'));
  if (current) {
    if (current.id === 'view-results') renderResults();
    if (current.id === 'view-detail') renderDetail();
    if (current.id === 'view-search') renderDeals();
    if (current.id === 'view-quote') renderQuotes();
  }
}

/* ============ Wiring ============ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
  document.querySelectorAll('[data-goto]').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.goto)));
  document.getElementById('langToggle').addEventListener('click', () => { lang = lang === 'en' ? 'zh' : 'en'; applyTranslations(); });

  document.getElementById('currencyToggle').addEventListener('click', () => {
    currencyIdx = (currencyIdx + 1) % currencies.length;
    document.getElementById('currencyToggle').textContent = cur().label;
    const current = [...document.querySelectorAll('.view')].find(v => !v.classList.contains('hidden'));
    if (current) {
      if (current.id === 'view-results') renderResults();
      if (current.id === 'view-detail') renderDetail();
      if (current.id === 'view-search') renderDeals();
      if (current.id === 'view-quote') renderQuotes();
    }
  });

  document.getElementById('calcToggle').addEventListener('click', () => {
    document.getElementById('calcPanel').classList.toggle('hidden');
  });
  const calc = () => {
    const n = id => parseFloat(document.getElementById(id).value) || 0;
    const len = n('c_len'), wid = n('c_wid'), hei = n('c_hei'), qty = n('c_qty') || 1;
    if (!len || !wid || !hei) {
      document.getElementById('calcCbm').textContent = '—';
      document.getElementById('calcVol').textContent = '—';
      return null;
    }
    const cbm = (len * wid * hei / 1e6) * qty;
    const volKg = (len * wid * hei / 6000) * qty;
    document.getElementById('calcCbm').textContent = `${(Math.round(cbm * 100) / 100)} ${u('cbm')}`;
    document.getElementById('calcVol').textContent = `${Math.round(volKg)} ${u('kg')}`;
    return cbm;
  };
  ['c_len', 'c_wid', 'c_hei', 'c_qty'].forEach(id => document.getElementById(id).addEventListener('input', calc));
  document.getElementById('calcUse').addEventListener('click', () => {
    const cbm = calc();
    if (cbm) document.getElementById('q_volume').value = Math.round(cbm * 100) / 100;
  });

  document.getElementById('quoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const req = {
      origin: document.getElementById('q_origin').value || 'shenzhen',
      dest: document.getElementById('q_dest').value || 'felixstowe',
      mode: document.getElementById('q_mode').value,
      service: document.getElementById('q_service').value,
      volume: parseFloat((document.getElementById('q_volume').value || '5').replace(/[^0-9.]/g, '')) || 5,
      weight: parseFloat((document.getElementById('q_weight').value || '300').replace(/[^0-9.]/g, '')) || 300,
    };
    lastQuote = { ...req, quotes: buildQuotes(req) };
    renderQuotes();
    document.getElementById('quoteResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    searchFilters = {
      origin: document.getElementById('s_origin').value,
      dest: document.getElementById('s_dest').value,
      mode: document.getElementById('s_mode').value,
    };
    showView('results');
  });

  ['f_sea', 'f_air', 'f_guaranteed', 'f_standbyOnly', 'f_svc_port', 'f_svc_door'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderResults);
  });

  document.querySelectorAll('.sort-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeSort = tab.dataset.sort;
      document.querySelectorAll('.sort-tab').forEach(x => x.classList.toggle('active', x === tab));
      renderResults();
    });
  });

  document.getElementById('listingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    requireAuth(() => {
      const type = document.getElementById('f_type').value;
      const dest = document.getElementById('f_dest').value || 'felixstowe';
      const di = destInfo[dest];
      const capacityRaw = document.getElementById('f_capacity').value || (type === 'sea' ? '5' : '300');
      const priceRaw = document.getElementById('f_price').value || (type === 'sea' ? '50' : '5.50');
      const cutoffRaw = document.getElementById('f_cutoff').value || '2 days';
      const cutoffNum = parseFloat(cutoffRaw.replace(/[^0-9.]/g, '')) || 2;
      const standby = document.getElementById('f_standby').checked;
      const price = parseFloat(priceRaw.replace(/[^0-9.]/g, '')) || (type === 'sea' ? 50 : 5.5);
      const service = document.getElementById('f_service').value;

      listings.push({
        service,
        doorFee: service === 'p2p' ? null : (type === 'sea' ? 140 : 90),
        id: nextId++,
        type, standby,
        origin: document.getElementById('f_origin').value || 'shenzhen',
        dest,
        forwarder: forwarders[(nextId + 3) % forwarders.length],
        date: document.getElementById('f_date').value || '2026-09-01',
        transitDays: di ? di.transit : (type === 'sea' ? 28 : 1),
        cutoff: { v: cutoffNum, u: /hour/i.test(cutoffRaw) ? 'hours' : (cutoffNum === 1 ? 'day' : 'days') },
        capacity: capacityRaw.replace(/[^0-9.]/g, '') || '5',
        capUnit: type === 'sea' ? 'cbm' : 'kg',
        price,
        wasPrice: standby ? Math.round(price * 1.5 * 10) / 10 : null,
        priceUnit: type === 'sea' ? 'usd_cbm' : 'usd_kg',
      });

      const box = document.getElementById('justPublished');
      box.classList.remove('hidden');
      box.innerHTML = `<div class="publish-success">${t('list.published.title')}<br><span>${t('list.published.body')}</span></div>`;
      document.getElementById('listingForm').reset();
    });
  });

  wireAuth();
  applyTranslations();
  showView('search');
});
